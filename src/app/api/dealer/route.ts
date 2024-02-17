import { restClient } from "@/lib/mongo";
import { DealerlModel } from "@/schema/dealer";
import { NextResponse } from "next/server";

export const GET = restClient(async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  const rPage = Number(page) - 1;

  if (!page || !limit)
    return NextResponse.json({
      success: false,
      message: "provide limit and page number",
    });

  const data = await DealerlModel.find()
    .limit(Number(limit))
    .skip(rPage * Number(limit));

  const total = await DealerlModel.find().countDocuments();

  return NextResponse.json({
    data,
    total,
  });
});
