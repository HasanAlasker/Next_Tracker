import IssuesForm from "@/app/components/form/IssueForm";
import { prisma } from "@/app/lib/prisma";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const fetchIssue = cache((issueId: number) => {
  return prisma.issue.findUnique({ where: { id: issueId } });
});

export default async function EditIssuePage({ params }: Props) {
  const { id } = await params;
  const issueId = Number(id);

  const issue = await fetchIssue(issueId);
  if (!issue) notFound();

  return <IssuesForm issue={issue} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const issue = await fetchIssue(Number(id));

  return {
    title: "Edit - " + issue?.title,
    description: issue?.description ?? "",
  };
}
