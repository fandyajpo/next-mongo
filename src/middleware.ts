import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {}

export const config = {
  matcher: [
    {
      source:
        "/((?!api|_next/static|_next/image|_vercel/insights|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
