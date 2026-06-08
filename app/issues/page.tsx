import Link from "next/link";
import Button from "../components/form/Button";
import IssuesTable from "../components/tables/IssuesTable";
import IssueActions from "./IssueActions";

export default async function IssuesPage() {
  return (
    <div className="flex flex-col space-y-10">
      <IssuesTable />
      <IssueActions />
    </div>
  );
}
