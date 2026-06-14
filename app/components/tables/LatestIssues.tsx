import { prisma } from "@/app/lib/prisma";
import React from "react";
import Badge from "../general/Badge";
import Link from "next/link";
import StyledLink from "../general/StyledLink";

export default async function LatestIssues() {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "asc" },
    take: 5,
    include: {
      assignTo: true,
    },
  });

  const issuesList = issues?.map((i) => (
    <tr key={i.id}>
      <td className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <StyledLink
            icon="arrow-up-right"
            href={`/issues/${i.id}`}
            text={i.title}
          />
          <Badge status={i.status} />
        </div>
        <div className="flex items-center justify-center rounded-full w-12 aspect-square bg-purple-600 text-blue-100 font-bold">
          {i.assignTo.name[0].toUpperCase()}
        </div>
      </td>
    </tr>
  ));

  return (
    <div>
      <h1 className="mb-7">Latest Issues</h1>
      <table>
        <tbody>{issuesList}</tbody>
      </table>
    </div>
  );
}
