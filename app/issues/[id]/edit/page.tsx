import IssuesForm from "@/app/components/form/IssueForm";
import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}
export default async function EditIssuePage({ params }: Props) {
  const { id } = await params;
  const issueId = Number(id);

  const issue = await prisma.issue.findUnique({ where: { id: issueId } });
  if (!issue) notFound();

  return <IssuesForm issue={issue} />;
}
