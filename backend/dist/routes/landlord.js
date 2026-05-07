"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importStar(require("../middleware/auth"));
const db_1 = require("../lib/db");
const uploadService_1 = require("../services/uploadService");
const router = express_1.default.Router();
router.use(auth_1.default);
// POST /api/landlord/compounds - Create compound
router.post('/compounds', auth_1.isLandlord, uploadService_1.upload.array('nrcImages', 2), async (req, res) => {
    try {
        const { name, description, location } = req.body;
        const userId = req.user.id;
        const files = (req.files ?? []);
        const nrcImages = files.map((file) => ({
            url: `/uploads/nrc/${file.filename}`,
            side: file.fieldname === 'front' ? 'front' : 'back'
        }));
        const compound = await db_1.prisma.compound.create({
            data: {
                name,
                description,
                location,
                userId
            }
        });
        // Update user nrcImages
        await db_1.prisma.user.update({
            where: { id: userId },
            data: { nrcImages }
        });
        res.json(compound);
    }
    catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});
// GET /api/landlord/compounds
router.get('/compounds', auth_1.isLandlord, async (req, res) => {
    try {
        const compounds = await db_1.prisma.compound.findMany({
            where: { userId: req.user.id },
            include: { buildings: true }
        });
        res.json(compounds);
    }
    catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});
// POST /api/landlord/buildings
router.post('/buildings', auth_1.isLandlordOrManager, uploadService_1.upload.array('images', 8), async (req, res) => {
    try {
        const { name, description, location, price, roomType, totalBeds, features } = req.body;
        const compoundId = req.body.compoundId;
        const files = (req.files ?? []);
        const images = files.map((file) => ({ url: `/uploads/buildings/${file.filename}` }));
        const featureNames = parseFeatureNames(features);
        const building = await db_1.prisma.building.create({
            data: {
                name,
                description,
                location,
                price: price ? parseFloat(price) : null,
                roomType: roomType,
                images: images.length ? { create: images } : undefined,
                totalBeds: parseInt(totalBeds, 10),
                occupiedBeds: 0,
                features: featureNames.length
                    ? {
                        create: featureNames.map((featureName) => ({
                            feature: {
                                connectOrCreate: {
                                    where: { name: featureName },
                                    create: { name: featureName }
                                }
                            }
                        }))
                    }
                    : undefined,
                compoundId
            }
        });
        res.json(building);
    }
    catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});
// PUT /api/landlord/buildings/:id/beds - Update occupied beds
router.put('/buildings/:id/beds', auth_1.isLandlordOrManager, async (req, res) => {
    try {
        const { id } = req.params;
        const { occupiedBeds } = req.body;
        const building = await db_1.prisma.building.update({
            where: { id },
            data: { occupiedBeds: parseInt(occupiedBeds, 10) }
        });
        res.json({ availableBeds: building.totalBeds - building.occupiedBeds, status: getBedStatus(building.totalBeds - building.occupiedBeds) });
    }
    catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});
function getBedStatus(available) {
    if (available === 0)
        return 'FULL';
    if (available <= 5)
        return 'LOW';
    return 'AVAILABLE';
}
function parseFeatureNames(features) {
    if (!features)
        return [];
    const parsed = typeof features === 'string' ? JSON.parse(features) : features;
    return Array.isArray(parsed)
        ? parsed.filter((feature) => typeof feature === 'string' && feature.trim().length > 0)
        : [];
}
exports.default = router;
//# sourceMappingURL=landlord.js.map