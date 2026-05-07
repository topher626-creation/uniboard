"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../lib/db");
const router = express_1.default.Router();
/* =========================
   GET ALL AVAILABLE PROPERTIES
========================= */
router.get('/', async (req, res) => {
    try {
        const allProperties = await db_1.prisma.property.findMany({
            include: {
                building: {
                    include: {
                        compound: {
                            include: {
                                user: {
                                    select: {
                                        fullName: true,
                                        phone: true
                                    }
                                }
                            }
                        }
                    }
                }
            },
            orderBy: { createdAt: 'desc' },
            take: 50
        });
        // filter available properties (business logic layer)
        const properties = allProperties.filter((p) => p.occupiedBeds < p.totalBeds);
        res.json(properties);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});
/* =========================
   GET PROPERTY BY ID
========================= */
router.get('/:id', async (req, res) => {
    try {
        const property = await db_1.prisma.property.findUnique({
            where: { id: req.params.id },
            include: {
                building: {
                    include: {
                        compound: true
                    }
                }
            }
        });
        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }
        res.json(property);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.default = router;
//# sourceMappingURL=properties.js.map