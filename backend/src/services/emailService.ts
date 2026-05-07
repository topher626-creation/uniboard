import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendOTP(email: string, otp: string) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'UniBoard OTP Verification',
    html: `
      <h2>Your UniBoard OTP</h2>
      <p>Your OTP is: <strong>${otp}</strong></p>
      <p>Valid for 10 minutes.</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}

export async function sendApprovalEmail(email: string, status: 'approved' | 'rejected', reason?: string) {
  const subject = status === 'approved' ? 'Account Approved - Welcome to UniBoard!' : 'Account Review - UniBoard';
  const html = status === 'approved' ? 
    '<h2>Congratulations! Your provider account is approved.</h2><p>You can now add compounds and buildings.</p>' :
    `<h2>Account ${status.toUpperCase()}</h2><p>Reason: ${reason}</p>`;

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    html,
  });
}
