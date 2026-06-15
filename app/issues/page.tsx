import { Metadata } from "next";
import StatusFilter from "../components/filter/StatusFilter";
import Pagination from "../components/general/Pagination";
import IssuesTable from "../components/tables/IssuesTable";
import { status } from "../constants/statusDDL";
import { Issue } from "../generated/prisma/client";
import { Status } from "../generated/prisma/enums";
import { prisma } from "../lib/prisma";
import IssueActions from "./AddIssueBtn";

const options = [{ label: "All", value: "" }, ...status];

interface Props {
  searchParams?: Promise<{
    status: Status;
    orderBy: keyof Issue;
    page: string;
  }>;
}

export default async function IssuesPage({ searchParams }: Props) {
  const { status, orderBy, page } = (await searchParams) ?? {};
  const pageSize = 5

  const count: number = await prisma.issue.count({
    where: status ? { status } : undefined,
  });

  return (
    <div className="flex flex-col space-y-10 flex-wrap">
      <div className="flex justify-between items-center">
        <StatusFilter
          name="status"
          options={options}
          placeholder="Status filter "
        />
        <IssueActions />
      </div>
      <IssuesTable
        status={status}
        orderBy={orderBy}
        page={Number(page || 1)}
        pageSize={pageSize}
      />
      <Pagination
        itemCount={count}
        pageNumber={Number(page || 1)}
        pageSize={pageSize}
      />
    </div>
  );
}

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Issue Tracker - Issues",
  description: "View all project issues"
}