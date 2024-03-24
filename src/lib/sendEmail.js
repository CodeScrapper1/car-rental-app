const nodemailer = require("nodemailer");

export const sendEmail = async (options) => {
  const detail = options.order;
  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_SMTP_HOST,
    port: process.env.NEXT_PUBLIC_SMTP_PORT,
    service: process.env.NEXT_PUBLIC_SMTP_SERVICE,
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_EMAIL,
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    },
  });

  transporter.verify(async function (error, success) {
    if (error) {
      console.log("email not found");
    } else {
      const mailOptions = {
        from: process.env.NEXT_PUBLIC_SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Verify Your Email</title>
        </head>
        <body style="background-color: #F2F5F8; margin: 0; padding: 20px 0px; font-family: Arial, sans-serif;">
            <div style="max-width: 600px; width: 90%; margin: 20px auto 10px auto; padding: 0px; background-color: #ffffff; border-top: 5px solid #0233E4;">
                <div style="max-width: 80%; width: 100%; padding: 15px 0px; border-bottom: 1px solid #ebebeb; margin:auto">
                       <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" style="margin: auto; display: flex; height: 55px; max-width: 180px; object-fit: contain; object-position: center;" alt="proptexx">
                </div>
                <div style="padding: 40px 20px;">
                  <br/>
                  <br/>
                  <p><span style="font-weight:bold">Car Name: </span>${
                    detail.title
                  }</p>
                  <p><span style="font-weight:bold">Source Location: </span>${
                    detail.source
                  }</p>
                  <p><span style="font-weight:bold">Destination Location: </span>${
                    detail.destination
                  }</p>
                  <p><span style="font-weight:bold">Pickup Date: </span>${
                    detail.pickupdate
                  }</p>
                  <p><span style="font-weight:bold">Pickup Time: </span>${
                    detail.pickuptime
                  }</p>
                  <p><span style="font-weight:bold">Transfer Type: </span>${
                    detail.transfertype
                  }</p>
                  <p><span style="font-weight:bold">Price: </span>${
                    detail.price
                  }</p>
                  <p><span style="font-weight:bold">Number of persons: </span>${
                    detail.persons
                  }</p>
                  <p><span style="font-weight:bold">First Name: </span>${
                    detail.firstname
                  }</p>
                  <p><span style="font-weight:bold">Last Name: </span>${
                    detail.lastname
                  }</p>
                  <p><span style="font-weight:bold">Email: </span>${
                    detail.email
                  }</p>
                  <p><span style="font-weight:bold">Phone Number:: </span>${
                    detail.phoneNumber
                  }</p>
                  <p><span style="font-weight:bold">Comment: </span>${
                    detail.comment || ""
                  }</p>
                </div>
            </div>
        </body>
        </html>
                `,
      };
      await transporter.sendMail(mailOptions);
    }
  });
};
