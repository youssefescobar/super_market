// utils/messageTemplates.js

const passwordResetCodeMessage = (code) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Password Reset Code</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', sans-serif; background-color: #f9f9f9;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    <tr>
      <td style="padding: 20px; background-color: #639543; color: white; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">🔐 Password Reset Request</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px;">
        <p style="font-size: 16px; color: #333;">Hi there,</p>
        <p style="font-size: 16px; color: #333;">
          We received a request to reset your password. Please use the code below to verify your identity:
        </p>
        <div style="margin: 30px 0; text-align: center;">
          <span style="display: inline-block; background-color: #639543; color: white; padding: 15px 30px; font-size: 24px; font-weight: bold; border-radius: 8px; letter-spacing: 2px;">
            ${code}
          </span>
        </div>
        <p style="font-size: 16px; color: #333;">
          ⏳ This code is valid for <strong>10 minutes</strong>. If you didn't request this, you can safely ignore this email.
        </p>
        <p style="font-size: 16px; color: #333;">Thanks,<br/>The <strong>Cineflix</strong> Team</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px; background-color: #f0f0f0; text-align: center; color: #888; font-size: 14px;">
        © ${new Date().getFullYear()} Cineflix. All rights reserved.
      </td>
    </tr>
  </table>
</body>
</html>
`;
};

module.exports = {
  passwordResetCodeMessage,
};
