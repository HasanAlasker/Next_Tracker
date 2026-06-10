"use client";

import axios from "axios";
import Button from "../components/form/Button";
import { useRouter } from "next/navigation";

export default function DeleteIssueBtn({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/issues/${id}`);
      console.log(res);

      if (res.status === 200) {
        router.push("/issues");
      }
    } catch (error) {}
  };

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
