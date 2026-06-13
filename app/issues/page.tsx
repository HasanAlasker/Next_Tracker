import StatusFilter from "../components/filter/StatusFilter";
import IssuesTable from "../components/tables/IssuesTable";
import { status } from "../constants/statusDDL";
import { Status } from "../generated/prisma/enums";
import IssueActions from "./AddIssueBtn";

const options = [{ label: "All", value: "" }, ...status];

interface Props {
  searchParams?: Promise<{ status: Status }>;
}

export default async function IssuesPage({ searchParams }: Props) {
  const { status } = (await searchParams) ?? {};
  console.log(status);

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex justify-between items-center">
        <StatusFilter
          name="status"
          options={options}
          placeholder="Status filter "
        />
        <IssueActions />
      </div>
      <IssuesTable status={status}/>
    </div>
  );
}

export const dynamic = "force-dynamic";
