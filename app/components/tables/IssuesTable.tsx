import { prisma } from "@/app/lib/prisma";
import { Issue } from "@/app/types/issue";

export default async function IssuesTable() {
  const issues: Issue[] = await prisma.issue.findMany();

  const List = issues.map((i) => (
    <tr key={i.id}>
      <td>
        {i.title}
        <div className="block md:hidden">{i.status}</div>
      </td>
      <td className="hidden md:table-cell">{i.status}</td>
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
