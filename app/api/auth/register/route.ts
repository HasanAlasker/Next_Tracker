// api/auth/register

import { User } from "@/app/generated/prisma/client";
import { generateJWT, hashPassword } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";
import { userRegister } from "@/app/validation/userSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body: User = await request.json();
    const validation = userRegister.safeParse(body);

    if (!validation.success)
      return NextResponse.json(
        { error: validation.error.issues },
        { status: 400 },
      );

    const exists = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (exists)
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: await hashPassword(body.password),
      },
    });

    const token = generateJWT(user);
    if (!token)
      return NextResponse.json({ error: "Signing in failed" }, { status: 400 });

    const { password, ...userPayload } = user;

    return NextResponse.json({ user: userPayload, token }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
