import Link from "next/link";
import Button from "../components/form/Button";

export default function IssuesPage() {
  return (
    <div>
      <Button icon="plus" isPri title={<Link href={"/issues/new"}>Add Issue</Link>} />
    </div>
  );
}
