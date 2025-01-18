import { NextResponse } from "next/server";
import twilio from "twilio";

const accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const authToken = "your_auth_token";

const client = twilio(accountSid, authToken);

export const GET = async () => {
  client.calls.create({
    to: "",
    from: "",
    twiml: "",
  });

  return NextResponse.json({ success: true });
};
