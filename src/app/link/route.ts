import { twitliCall } from "@/lib/twilio";
import { NextRequest, NextResponse } from "next/server";
import { getStorage, setStorage, TUser } from "../globalVar";

export const maxDuration = 60;

export const POST = async (req: NextRequest) => {
  const body: TUser = await req.json();

  setStorage(body);

  if (body.phone.includes("15105988232")) {
    //TODO: add url

    twitliCall(body.personality === "gentle" ? undefined : undefined);
  }

  return NextResponse.json({
    success: true,
    data: getStorage(),
  });
};
