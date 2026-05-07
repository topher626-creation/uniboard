export declare function sendOTP(email: string, otp: string): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
export declare function sendApprovalEmail(email: string, status: 'approved' | 'rejected', reason?: string): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
//# sourceMappingURL=emailService.d.ts.map