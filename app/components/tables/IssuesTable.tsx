import { prisma } from "@/app/lib/prisma";
import Badge from "../general/Badge";
import { Issue } from "@/app/generated/prisma/client";
import Link from "next/link";

export default async function IssuesTable() {
  const issues: Issue[] = await prisma.issue.findMany();

  const List = issues.map((i) => (
    <tr key={i.id}>
      <td>
        <Link href={`/issues/${i.id}`}>{i.title}</Link>
        <div className="block md:hidden">
          <Badge status={i.status} />
        </div>
      </td>
      <td className="hidden md:table-cell">
        <Badge status={i.status} />
      </td>
      <td className="hidden md:table-cell">
        {i.createdAt?.toLocaleDateString()}
      </td>
    </tr>
  ));

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Issue</th>
          <th className="hidden md:table-cell">Status</th>
          <th className="hidden md:table-cell">Created At</th>
        </tr>
      </thead>
      <tbody>{List}</tbody>
    </table>
  );
}
