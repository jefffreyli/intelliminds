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
  <style>body {
    margin: 0;
    padding: 0;
  }
  table,
  td,
  tr {
    vertical-align: top;
    border-collapse: collapse;
  }
  * {
    line-height: inherit;
  }
  a[x-apple-data-detectors=true] {
    color: inherit !important;
    text-decoration: none !important;
  }</style>
<div>
<div>
  <br>
</div>
</div>
<style>@media (max-width: 520px) {
    .block-grid,
    .col {
      min-width: 320px !important;
      max-width: 100% !important;
      display: block !important;
    }
    .block-grid {
      width: 100% !important;
    }
    .col {
      width: 100% !important;
    }
    .col_cont {
      margin: 0 auto;
    }
    img.fullwidth,
    img.fullwidthOnMobile {
      width: 100% !important;
    }
    .no-stack .col {
      min-width: 0 !important;
      display: table-cell !important;
    }
    .no-stack.two-up .col {
      width: 50% !important;
    }
    .no-stack .col.num2 {
      width: 16.6% !important;
    }
    .no-stack .col.num3 {
      width: 25% !important;
    }
    .no-stack .col.num4 {
      width: 33% !important;
    }
    .no-stack .col.num5 {
      width: 41.6% !important;
    }
    .no-stack .col.num6 {
      width: 50% !important;
    }
    .no-stack .col.num7 {
      width: 58.3% !important;
    }
    .no-stack .col.num8 {
      width: 66.6% !important;
    }
    .no-stack .col.num9 {
      width: 75% !important;
    }
    .no-stack .col.num10 {
      width: 83.3% !important;
    }
    .video-block {
      max-width: none !important;
    }
    .mobile_hide {
      min-height: 0px;
      max-height: 0px;
      max-width: 0px;
      display: none;
      overflow: hidden;
      font-size: 0px;
    }
    .desktop_hide {
      display: block !important;
      max-height: none !important;
    }
    .img-container.big img {
      width: auto !important;
    }
  }</style>
<div>
<span style="font-size: 12pt;"><!-- [if IE]><div class="ie-browser"><![endif]--></span>
<table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; width: 100%;" role="presentation" width="100%" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF">
  <tbody>
    <tr style="vertical-align: top;" valign="top">
      <td style="word-break: break-word; vertical-align: top;" valign="top">
        <span style="font-size: 12pt;"><!-- [if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]--></span>
        
        <div style="background-color: transparent;">
          <div class="block-grid " style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; margin: 0 auto; background-color: transparent;">
            <p data-pm-slice="1 1 []">
              <span style="font-family: helvetica, arial, sans-serif;">
                <span style="font-size: 16px;">
                  <br>
                  <br>
                  <br>Dear ${fullName}, 
                  <br>
                  <br>Thank you for choosing IntelliMinds!
                  <br>
                  <br>Please see the following for a copy of your submission to our form for your reference. 
                  <br>
                  <br>Full Name: ${fullName}
                  <br>Email: ${emailAddress}
                  <br>Current Grade: ${currentGrade}
                  <br>Service: ${service}
                  <br>How did you hear about us: ${hearAboutUs}
                </span>
              </span>
              <br />
              <br />
              <span style="font-size: 12pt; font-family: helvetica, arial, sans-serif;">
                <br>
                <br>Sincerely, 
                <br>
                <span style="color: #808080;">IntelliMinds</span> 
              </span>
            </p>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>
  `;

    const mailOptions = {
        from: 'intellimindsbr@gmail.com',
        to: emailAddress,
        subject: 'Intelliminds Sign up Form Responses',
        text: emailText,
        html: emailHtml,
    };

    const mailOptionsToIntelliminds = {
        from: 'intellimindsbr@gmail.com',
        to: 'intellimindsbr@gmail.com',
        subject: 'New Signup Notification',
        text: emailText,
        html: emailHtml,
    };

    try {
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(mailOptionsToIntelliminds);
        res.status(200).json({ message: 'Email sent successfully!'})
    } catch (error) {
        console.error('Error occurred while sending email: ', error);
        res.status(500).json({ message: 'Error while sending email' });
    }
}
