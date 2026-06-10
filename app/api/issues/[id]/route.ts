import { prisma } from "@/app/lib/prisma";
import { issueSchema } from "@/app/validation/issueSchema";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params;
    const issueId = Number(id);

    const body = await request.json();
    const validation = issueSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(
        { error: validation.error.issues },
        { status: 400 },
      );

    const issue = await prisma.issue.findUnique({ where: { id: issueId } });
    if (!issue)
      return NextResponse.json({ error: "Issue not found" }, { status: 404 });

    const updatedIssue = await prisma.issue.update({
      where: { id: issueId },
      data: {
        title: body.title,
        description: body.description,
        status: body.status,
      },
    });

    return NextResponse.json(updatedIssue, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params;
    const issueId = Number(id);

    const issue = await prisma.issue.findUnique({ where: { id: issueId } });
    if (!issue)
      return NextResponse.json({ error: "Issue not found" }, { status: 404 });

    const deletedIssue = await prisma.issue.delete({ where: { id: issueId } });

    return NextResponse.json(deletedIssue, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
