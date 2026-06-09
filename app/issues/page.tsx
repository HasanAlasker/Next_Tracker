import IssuesTable from "../components/tables/IssuesTable";
import IssueActions from "./AddIssueBtn";

export default async function IssuesPage() {
  return (
    <div className="flex flex-col space-y-10">
      <IssuesTable />
      <IssueActions />
    </div>
  );
}
