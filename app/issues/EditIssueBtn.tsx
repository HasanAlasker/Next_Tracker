import React from "react";
import Button from "../components/form/Button";
import Link from "next/link";

export default function EditIssueBtn({ id }: { id: string }) {
  return (
    <Button
      title={<Link href={`/issues/${id}/edit`}>Edit</Link>}
      icon="edit-2"
      isPri
    ></Button>
  );
}
