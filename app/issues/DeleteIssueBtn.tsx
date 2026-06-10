"use client";

import Button from "../components/form/Button";

export default function DeleteIssueBtn({ id }: { id: number }) {
  const handleDelete = async () => {};
  
  return (
    <Button
      isDelete
      type="button"
      icon={"trash"}
      isPri
      title={"Delete"}
      onClick={handleDelete}
    />
  );
}
