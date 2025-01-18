import { NextRequest, NextResponse } from "next/server";
import { getStorage, setStorage, TempStorage } from "../globalVar";

export const POST = async (req: NextRequest) => {
  const body: TempStorage = await req.json();

  setStorage(body);

  return NextResponse.json({
    success: true,
    data: getStorage(),
  });
};
