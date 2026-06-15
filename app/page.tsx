import IssuesChart from "./components/charts/IssuesChart";
import IssueCards from "./components/tables/IssueCards";
import LatestIssues from "./components/tables/LatestIssues";
import { prisma } from "./lib/prisma";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProg = await prisma.issue.count({ where: { status: "IN_PROGRESS" } });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

  return (
    <div className="lg:flex justify-between gap-5">
      <div className="flex flex-col flex-2 justify-between gap-5">
        <IssueCards open={open} inProg={inProg} closed={closed} />
        <IssuesChart open={open} inProg={inProg} closed={closed} />
      </div>

      <LatestIssues />
    </div>
  );
}
