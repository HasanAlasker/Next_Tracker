"use client";

import { status } from "@/app/constants/statusDDL";
import { Issue } from "@/app/generated/prisma/client";
import apiClient from "@/app/lib/apiClient";
import { Form } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
});

interface Props {
  issue?: Issue;
}

export default function IssuesForm({ issue }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState(null);

  const router = useRouter();

  const initialValues = {
    title: issue?.title ?? "",
    description: issue?.description ?? "",
    status: issue?.status ?? "OPEN",
  };

  const handleSubmit = async (values: {
    title: string;
    description: string;
  }) => {
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
