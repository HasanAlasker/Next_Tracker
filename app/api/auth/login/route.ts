// api/auth/login

import { User } from "@/app/generated/prisma/client";
import { comparePassword, generateJWT } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";
import { userLogin } from "@/app/validation/userSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body: User = await request.json();
    const validation = userLogin.safeParse(body);

    if (!validation.success)
      return NextResponse.json(
        { error: validation.error.issues },
        { status: 400 },
      );

    const user = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (!user)
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 },
      );

    const validPassword = await comparePassword(body.password, user.password);
    if (!validPassword)
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 },
      );

    const token = generateJWT(user);
    if (!token)
      return NextResponse.json({ error: "log in failed" }, { status: 400 });

    const { password, ...userPayload } = user;

    const res = NextResponse.json({ user: userPayload }, { status: 200 });
    res.headers.set("x-auth-token", token);
    return res
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
