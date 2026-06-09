import { prisma } from "@/app/lib/prisma";
import Badge from "../general/Badge";
import { Issue } from "@/app/generated/prisma/client";
import StyledLink from "../general/StyledLink";
import delay from "delay";

export default async function IssuesTable() {
  const issues: Issue[] = await prisma.issue.findMany();

  // await delay(2000);

  const List = issues.map((i) => (
    <tr key={i.id}>
      <td>
        <StyledLink
          href={`/issues/${i.id}`}
          text={i.title}
          icon="arrow-up-right"
        />
        <div className="block md:hidden">
          <Badge status={i.status} />
        </div>
      </td>
      <td className="hidden md:table-cell">
        <Badge status={i.status} />
      </td>
      <td className="hidden md:table-cell">{i.createdAt?.toDateString()}</td>
    </tr>
  ));

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Issue</th>
          <th className="hidden md:table-cell">Status</th>
          <th className="hidden md:table-cell">Created at</th>
        </tr>
      </thead>
      <tbody>{List}</tbody>
    </table>
  );
}
