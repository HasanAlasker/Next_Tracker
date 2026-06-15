import { getAuthUser } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const user = getAuthUser(request);
  const users = await prisma.user.findMany({
    where: { id: { not: user?.id } },
    orderBy: { name: "desc" },
  });
  return NextResponse.json({ users }, { status: 200 });
}
