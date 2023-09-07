import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        fullName,
        emailAddress,
        currentGrade,
        service,
        hearAboutUs} = req.body;

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'intellimindsbr@gmail.com',
            pass: 'tvaagmgfjwijxvua'
        }
    });

    const emailText = `
    Full Name: ${fullName}
    Email Address: ${emailAddress}
    Current Grade: ${currentGrade}
    Service: ${service}
    How did you hear about us?: ${hearAboutUs}
  `;

  const emailHtml = `
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Email Address:</strong> ${emailAddress}</p>
    <p><strong>Current Grade:</strong> ${currentGrade}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>How did you hear about us?:</strong> ${hearAboutUs}</p>
  `;

    const mailOptions = {
        from: 'intellimindsbr@gmail.com',
        to: emailAddress,
        subject: 'Email Confirmation for sign up',
        text: emailText,
        html: emailHtml,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!', messageId: info.messageId });
    } catch (error) {
        console.error('Error occurred while sending email: ', error);
        res.status(500).json({ message: 'Error while sending email' });
    }
}
