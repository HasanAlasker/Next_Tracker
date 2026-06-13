import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if (!token) return NextResponse.redirect(new URL("/auth/login", request.url));

  try {
    const secret = new TextEncoder().encode(process.env.SECRET_KEY!);
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  // matcher: ["/issues", "/issues/new", "/issues/edit/:id+"],
  matcher: ["/issues/:path*"],
};
