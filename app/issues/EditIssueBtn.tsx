import Link from "next/link";
import Button from "../components/form/Button";

export default function EditIssueBtn({ id }: { id: string }) {
  return (
    <Button
      title={<Link href={`/issues/${id}/edit`}>Edit</Link>}
      icon="edit-2"
      isPri
    ></Button>
  );
}
