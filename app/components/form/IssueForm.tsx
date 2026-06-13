"use client";

import { status } from "@/app/constants/statusDDL";
import { Issue, User } from "@/app/generated/prisma/client";
import apiClient from "@/app/lib/apiClient";
import { Form } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import AppForm from "../../components/form/AppForm";
import Button from "../../components/form/Button";
import FormikInput from "../../components/form/FormikInput";
import FormikDropList from "./FormikDropList";
import FormikMde from "./FormikMde";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(2).max(255),
  description: Yup.string().required().min(2),
  status: Yup.string(),
  assignedToId: Yup.number().required(),
});

interface Props {
  issue?: Issue;
}

export default function IssuesForm({ issue }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState(null);

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data: any = await apiClient.get("/users");
      setUsers(data.data.users);
    };
    fetchUsers();
  }, []);

  const options = users?.map((u) => ({
    lable: u.name,
    value: u.id,
  }));

  const router = useRouter();

  const initialValues = {
    title: issue?.title ?? "",
    description: issue?.description ?? "",
    status: issue?.status ?? "OPEN",
    assignedToId: issue?.assignedToId ?? 0,
  };

  const handleSubmit = async (values: {
    title: string;
    description: string;
    assignedToId: number
  }) => {
    console.log(values)
    setSubmitting(true);
    try {
      if (issue) {
        const res = await apiClient.patch(`/issues/${issue.id}`, values);
        console.log(res);
      } else {
        await apiClient.post("/issues", values);
      }

      router.push("/issues");
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AppForm
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form>
        {issue && (
          <FormikDropList
            name="status"
            label="Issue status"
            placeholder="Status"
            options={status}
          />
        )}
        <FormikInput
          placeholder="Enter task title"
          label="Title"
          name="title"
          icon="text"
        />
        <FormikMde
          name="description"
          label="Description"
          placeholder="Type task description"
        />
        <FormikDropList
          name="assignedToId"
          label="Assigned to"
          placeholder="Assign to"
          options={options}
        />
        <Button
          disabled={submitting}
          type="submit"
          icon={!issue ? "plus" : "edit-2"}
          isPri
          title={!issue ? "Add Issue" : "Edit Issue"}
        />
      </Form>
    </AppForm>
  );
}
