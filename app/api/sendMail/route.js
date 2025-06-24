import Mailgun from "mailgun.js";
import { NextResponse, NextRequest } from "next/server";

import nodemailer from "nodemailer";


export async function POST(request) {
  try {
    const body = await request.json();
    //change
    const { name, email, message } = body;
    // adding mail gun here
    const mg = new Mailgun({
      apikey: process.env.APIKEY,
      domain: process.env.DOMAIN,
    });

    const info = {
      from: email,
      to: "mohit.sharma327043@gmail.com",
      to: "sharadbhardwaj4444@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      html: `
                  <strong>Name:</strong> ${name}<br />
                  <strong>Email:</strong> ${email}<br />
                  <strong>Message:</strong><br /> ${message}
                `,
    };

    mg.messages().send(info, (error, body) => {
      if (error) {
        console.error("Error:", error);
        return NextResponse.json({ success: false });
      } else {
        console.log("Email sent:", body);
        return NextResponse.json({ success: true });
      }
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message, success: false });
  }
}
