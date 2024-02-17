import { restClient } from "@/lib/mongo";
import { ProspectlModel } from "@/schema/prospect";
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

  const data = await ProspectlModel.find()
    .limit(Number(limit))
    .skip(rPage * Number(limit));

  const total = await ProspectlModel.find().countDocuments();

  return NextResponse.json({
    data,
    total,
  });
});
