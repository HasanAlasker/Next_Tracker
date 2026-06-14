import { Issue, Status } from "@/app/generated/prisma/client";
import { prisma } from "@/app/lib/prisma";
import Badge from "../general/Badge";
import StyledLink from "../general/StyledLink";
import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";

interface Props {
  status?: Status;
  orderBy?: keyof Issue;
}

export default async function IssuesTable({ status, orderBy }: Props) {
  const issues: Issue[] = await prisma.issue.findMany({
    where: { status },
    orderBy: orderBy ? { [orderBy]: "asc" } : undefined,
  });

  const heads = [
    { label: "Issue", value: "title" },
    { label: "Status", value: "status", className: "hidden md:table-cell" },
    {
      label: "Created at",
      value: "createdAt",
      className: "hidden md:table-cell",
    },
  ];

  const List = issues.map((i) => (
    <tr key={i.id}>
      <td>
        <div className="flex justify-between flex-wrap space-y-3">
          <StyledLink
            href={`/issues/${i.id}`}
            text={i.title}
            icon="arrow-up-right"
          />
          <div className="block md:hidden">
            <Badge status={i.status} />
          </div>
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
          {heads.map((h) => (
            <th key={h.label} className={h?.className}>
              <div className="flex items-center space-x-1">
                <Link href={{ query: { status, orderBy: h.value } }}>
                  {h.label}
                </Link>
                {orderBy === h.value && (
                  <DynamicIcon name="arrow-up" strokeWidth={1} size={18} />
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{List}</tbody>
    </table>
  );
}
