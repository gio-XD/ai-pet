import { twitliCall } from "@/lib/twilio";
import { NextRequest, NextResponse } from "next/server";
import { getStorage, setStorage, TUser } from "../globalVar";

export const maxDuration = 60;

export const POST = async (req: NextRequest) => {
  const body: TUser = await req.json();

  if (body.phone.startsWith("+1") || body.phone.startsWith("+852")) {
    console.log("🚀 ~ POST ~ body:", body);
    //TODO: add url

    twitliCall(
      body.phone,
      body.personality === "gentle"
        ? "https://cdn-2.fakeyou.com/media/p/2/d/w/2/p2dw2mbrhrr0gvmypp9t6xqmw4md00sm/fakeyou_p2dw2mbrhrr0gvmypp9t6xqmw4md00sm.wav"
        : "https://cdn-2.fakeyou.com/media/n/0/4/r/n/n04rnzjj7sebkcdy91vbctab2b03w3as/fakeyou_n04rnzjj7sebkcdy91vbctab2b03w3as.wav"
    );
  }

  setStorage(body);

  return NextResponse.json({
    success: true,
    data: getStorage(),
  });
};
