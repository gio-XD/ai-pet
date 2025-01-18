import { twitliCall } from "@/lib/twilio";
import { NextRequest, NextResponse } from "next/server";
import { getStorage, setStorage, TUser } from "../globalVar";

export const maxDuration = 60;

export const POST = async (req: NextRequest) => {
  const body: TUser = await req.json();

  setStorage(body);

  if (body.phone.includes("15105988232")) {
    console.log("🚀 ~ POST ~ body:", body);
    //TODO: add url

    twitliCall(
      body.personality === "gentle"
        ? undefined
        : "https://cdn-2.fakeyou.com/media/n/0/4/r/n/n04rnzjj7sebkcdy91vbctab2b03w3as/fakeyou_n04rnzjj7sebkcdy91vbctab2b03w3as.wav"
    );
  }

  return NextResponse.json({
    success: true,
    data: getStorage(),
  });
};
