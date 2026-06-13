import Link from "next/link";
import Button from "../components/form/Button";

export default function IssueActions() {
  return (
    <Button
      isPri
      title={<Link href={"/issues/new"}>Add Issue</Link>}
      icon="receipt-text"
    />
  );
}
