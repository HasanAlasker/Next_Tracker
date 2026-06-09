import Badge from "@/app/components/general/Badge";
import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

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
      <h1 className="mb-5">{issue.title}</h1>
      <div className="flex items-center space-x-4">
        <Badge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </div>
      <div className="prose border-2 border-zinc-300 rounded-lg p-5 mt-10">
        <Markdown>{issue.description}</Markdown>
      </div>
    </div>
  );
}
