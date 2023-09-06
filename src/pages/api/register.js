export default function contact(req, res) {
   require("dotenv").config();

   let nodemailer = require("nodemailer");
   const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
         user: process.env.SMTP_USER,
         pass: process.env.PASSWORD,
      },
      secure: true,
   });

   const mailData = {
      from: "intellimindsbr@gmail.com",
      to: `intellimindsbr@gmail.com, ${req.body.email}`,
      subject: `Copy of ${team} Registration From ${req.body.fullName}`,
      text: req.body.origin + " | Sent from: " + req.body.emailAddress,
      html: `
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
                   <div style="background-color: #ffffff;">
                     <div class="block-grid " style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; margin: 0 auto; background-color: transparent;">
                       <br>
                       <span style="font-size: 12pt;">
                         <img style="float: left;" src="https://www.wecareactnyc.org/logos/wecareactnyc.png" alt="" width="313" height="55">
                       </span> 
                       <br>
                     </div>
                   </div>
                   <div style="background-color: transparent;">
                     <div class="block-grid " style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; margin: 0 auto; background-color: transparent;">
                       <p data-pm-slice="1 1 []">
                         <span style="font-family: helvetica, arial, sans-serif;">
                           <span style="font-size: 16px;">
                             <br>
                             <br>
                             <br>Dear ${req.body.fullName}, 
                             <br>
                             <br>Thank you for your application to We Care Act! Your application is currently under review.
                             <br>
                             <br>Please see the following for a copy of your submission to our form for your reference. 
                             <br>
                             <br>Email: ${req.body.emailAddress}
                             <br>Full Name: ${req.body.fullName}
                             <br>Current Grade: ${req.body.currentGrade}
                             <br>Service: ${req.body.service}
                             <br>How did you hear about us: ${req.body.hearAboutUs}
                           </span>
                         </span>
                         <br />
                         <br />
                         <span style="font-size: 12pt; font-family: helvetica, arial, sans-serif;">
                           <br>
                           <br>Sincerely, 
                           <br>
                           <span style="color: #808080;">Intelliminds</span> 
                           <br>
                         </span>
                       </p>
                     </div>
                   </div>
                 </td>
               </tr>
             </tbody>
           </table>
         </div>
         `,
   };
   transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
   });
   res.status(200);
}
