import { Issue } from "@/app/generated/prisma/client";
import { getAuthUser } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";
import { issueSchema } from "@/app/validation/issueSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const user = getAuthUser(request);
    const body: Issue = await request.json();

    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const validation = issueSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(
        { error: validation.error.issues },
        { status: 400 },
      );

    const issue = await prisma.issue.create({
      data: {
        title: body.title,
        description: body.description,
        authorId: user.id,
      },
    });

    if (!issue)
      return NextResponse.json(
        { error: "Couldn't create issue" },
        { status: 400 },
      );

    return NextResponse.json({ issue }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
