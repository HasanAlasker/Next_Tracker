import Link from "next/link";
import Button from "../components/form/Button";
import { prisma } from "../lib/prisma";
import { Issue } from "../types/issue";
import IssuesTable from "../components/tables/IssuesTable";

export default async function IssuesPage() {

  return (
    <div className="flex flex-col space-y-10">
      <IssuesTable />
      <Button full isPri title={<Link href={"/issues/new"}>Add Issue</Link>} icon="receipt-text" />
    </div>
  );
}
