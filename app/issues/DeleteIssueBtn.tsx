"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../components/form/Button";

export default function DeleteIssueBtn({ id }: { id: string }) {
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setDeleting(true);
    try {
      if (confirm("Delete issue?") === true) {
        const res = await axios.delete(`/api/issues/${id}`);
        console.log(res);

        if (res.status === 200) {
          router.push("/issues");
        } else {
          alert("Couldn't delete");
        }
      }
    } catch (error) {
      alert("Couldn't delete");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Button
      disabled={deleting}
      isDelete
      type="button"
      icon={"trash"}
      isPri
      title={!deleting ?"Delete" : "Deleting..." }
      onClick={handleDelete}
    />
  );
}
