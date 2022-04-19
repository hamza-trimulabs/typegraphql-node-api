const nodemailer = require("nodemailer");

export const verificationAuth = async (): Promise<string> => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // const testAccount = await nodemailer.createTestAccount();
  // console.log(testAccount.user);
  // console.log(testAccount.pass);

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "njhflmellgsmeycw@ethereal.email", // generated ethereal user
      pass: "sc7mgDM1aEHx3SrBwX", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <hamza.ashraf@trimulabs.com>', // sender address
    to: "hamza.ashraf@trimulabs.com", // list of receivers
    subject: "Email verification", // Subject line
    text: "Please note the OTP: " + otp, // plain text body
  });
  return otp;
};
