import { prisma } from "@/app/lib/prisma";
import { issueSchema } from "@/app/validation/issueSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
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
      },
    });

    if (!issue)
      return NextResponse.json(
        { error: "Couldn't create issue" },
        { status: 400 },
      );

    return NextResponse.json({ issue }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
