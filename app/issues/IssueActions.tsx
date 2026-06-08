import React from "react";
import Button from "../components/form/Button";
import Link from "next/link";

export default function IssueActions() {
  return (
    <Button
      full
      isPri
      title={<Link href={"/issues/new"}>Add Issue</Link>}
      icon="receipt-text"
    />
  );
}
