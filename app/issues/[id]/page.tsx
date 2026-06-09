import Button from "@/app/components/form/Button";
import Badge from "@/app/components/general/Badge";
import IssueDetails from "@/app/components/tables/IssueDetails";
import { prisma } from "@/app/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import EditIssueBtn from "../EditIssueBtn";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function page({ params }: Props) {
  const { id } = await params;
  const issueId = Number(id);

  const issue = await prisma.issue.findUnique({ where: { id: issueId } });
  if (!issue) notFound();

  return (
    <div>
      <IssueDetails issue={issue} />
      <EditIssueBtn id={id} />
    </div>
  );
}
