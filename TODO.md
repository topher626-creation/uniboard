# TODO: Implement Landlord Registration Form with Verification Upload

## Phase 1: Fix Prisma Schema & Setup
- [ ] 1. Edit backend/prisma/schema.prisma: Change `nrcImages Json[]?` -> `nrcImages Json`
- [ ] 2. Run prisma commands: `cd backend && npx prisma format && npx prisma generate && npx prisma db push`
- [ ] 3. Restart backend server

## Phase 2: Backend Upload & Auth Updates
- [ ] 4. Create backend/src/routes/upload.ts: Public POST /api/upload/verification-docs multer.array('files',5), JPG/PNG/PDF, return [{url}]
- [ ] 5. Edit backend/src/services/uploadService.ts: PDF support, public URLs
- [ ] 6. Edit backend/src/index.ts: Mount /api/upload
- [ ] 7. Edit backend/src/routes/auth.ts: Handle verificationImages in signup body for landlord, set nrcImages

## Phase 3: Frontend Updates
- [ ] 8. Edit frontend/src/lib/authContext.tsx: signup accept verificationImages?: string[]
- [ ] 9. Edit frontend/src/app/sign-up-login-screen/components/SignupForm.tsx: Landlord upload UI + logic
- [ ] 10. Add UI warning/helper text

## Phase 4: Testing
- [ ] 11. Test full flow end-to-end

