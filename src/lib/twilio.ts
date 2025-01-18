import twilio from "twilio";

const accountSid = "AC0d3fbe89aa9ab669fb3d52f52944d530";
const authToken = "4e3cd71fa353104a1a47805c1c502dde";

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
