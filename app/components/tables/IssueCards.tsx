import { prisma } from "@/app/lib/prisma";
import Card from "../Card";

export default async function IssueCards() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProg = await prisma.issue.count({ where: { status: "IN_PROGRESS" } });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

  return (
    <div className="flex items-center gap-5">
      <Card title="Open Issues" text={open} icon="flag-triangle-right" />
      <Card title="In Progress Issues" text={inProg} icon="clock-8" />
      <Card title="Closed Issues" text={closed} icon="circle-check" />
    </div>
  );
}
