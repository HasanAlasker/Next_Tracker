import IssueDetails from "@/app/components/tables/IssueDetails";
import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import EditIssueBtn from "../EditIssueBtn";
import DeleteIssueBtn from "../DeleteIssueBtn";
import { Metadata } from "next";
import { cache } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const fetchIssue = cache((issueId: number) => {
  return prisma.issue.findUnique({ where: { id: issueId } });
});

export default async function page({ params }: Props) {
  const { id } = await params;
  const issueId = Number(id);

  const issue = await fetchIssue(issueId);
  if (!issue) notFound();

  return (
    <div>
      <IssueDetails issue={issue} />
      <div className="flex space-x-4">
        <EditIssueBtn id={id} />
        <DeleteIssueBtn id={id} />
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const issue = await fetchIssue(Number(id));

  return {
    title: issue?.title ?? "Issue not found",
    description: issue?.description ?? "",
  };
}
