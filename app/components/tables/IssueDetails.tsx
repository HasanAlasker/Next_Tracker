import { Issue } from "@/app/generated/prisma/client";
import React from "react";
import Badge from "../general/Badge";
import Markdown from "react-markdown";

export default function IssueDetails({ issue }: { issue: Issue }) {
  return (
    <>
      <h1 className="mb-5">{issue.title}</h1>
      <div className="flex items-center space-x-4">
        <Badge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </div>
      <div className="prose border-2 border-zinc-300 rounded-lg p-5 mt-10 mb-10">
        <Markdown>{issue.description}</Markdown>
      </div>
    </>
  );
}
