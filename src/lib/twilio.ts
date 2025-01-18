import twilio from "twilio";

const accountSid = process.env.NEXT_PUBLIC_TWILIO_SID;

const authToken = process.env.NEXT_PUBLIC_TWILIO_TOKEN;

const client = twilio(accountSid, authToken);

export const twitliCall = (
  src: string = "https://hackathonleo.s3.us-west-2.amazonaws.com/dog.wav"
) => {
  client.calls.create({
    to: "+15105988232",
    from: "+15075954363",
    twiml: `<Response><Play>${src}</Play></Response>`,
  });
};
