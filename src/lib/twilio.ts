import twilio from "twilio";

const accountSid = process.env.NEXT_PUBLIC_TWILIO_SID;

const authToken = process.env.NEXT_PUBLIC_TWILIO_TOKEN;

const client = twilio(accountSid, authToken);

export const twitliCall = (
  phone: string,
  src: string = "https://cdn-2.fakeyou.com/media/n/0/4/r/n/n04rnzjj7sebkcdy91vbctab2b03w3as/fakeyou_n04rnzjj7sebkcdy91vbctab2b03w3as.wav"
) => {
  client.calls.create({
    to: phone,
    from: "+15075954363",
    twiml: `<Response><Play>${src}</Play></Response>`,
  });
};
