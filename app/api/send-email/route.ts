import nodemailer from "nodemailer";
require("dotenv").config();

export async function POST(req) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      message,
      type,
      range,
      timeline,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail", // or your email provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailhtml = `<div> 
        <div>
            <strong>First Name:</strong> <br />
            <span>${firstName}</span>
        </div>
        <br />
        <div>
            <strong>Last Name:</strong> <br />
            <span>${lastName}</span>
        </div>
        <br />
        <div>
            <strong>Email Address:</strong> <br />
            <span>${email}</span>
        </div>
        <br />
        <div>
            <strong>Phone Number:</strong> <br />
            <span>${phone}</span>
        </div>
        <br />
        <div>
            <strong>Property Type:</strong> <br />
            <span>${type}</span>
        </div>
        <br />
        <div>
            <strong>Budget Range:</strong> <br />
            <span>${range}</span>
        </div>
        <br />
        <div>
            <strong>Purchase Timeline:</strong> <br />
            <span>${timeline}</span>
        </div>
        <br />
        <div>
            <strong>Message</strong> <br />
            <span>${message}</span>
        </div>
    </div>`;

    const mailOptions = {
      from: email,
      // to: "awogbuyitimothy@gmail.com", // the recipient's email address
      to:  'info@homeviewdubai.com', // the recipient's email address
      subject: `New message from ${firstName} ${lastName}`,
      html: emailhtml,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error sending email", details: error.message }),
      { status: 500 }
    );
  }
}
