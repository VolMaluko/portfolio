import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
  const response = NextResponse.json({
    message: "Logout realizado com sucesso!",
  });

  response.headers.set(
    "Set-Cookie",
    serialize("auth_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      expires: new Date(0),
    })
  );

  return response;
}
