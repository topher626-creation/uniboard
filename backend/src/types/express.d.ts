import type { AdminLevel, Role, UserStatus } from '@prisma/client';

declare global {
  namespace Express {
    interface User {
      id: string;
      role: Role;
      status: UserStatus;
      adminLevel: AdminLevel | null;
    }

    interface Request {
      user?: User;
    }
  }
}

export {};
