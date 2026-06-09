"use client";

import Button from "../../components/form/Button";
import AppForm from "../../components/form/AppForm";
import FormikInput from "../../components/form/FormikInput";
import { Form } from "formik";
import FormikMde from "../../components/form/FormikMde";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import { Issue } from "@/app/generated/prisma/client";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(2).max(255),
  description: Yup.string().required().min(2),
});

interface Props {
  issue?: Issue;
}

export default function IssuesForm({ issue }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState(null);

  const router = useRouter();
  console.log(issue);

  const initialValues = {
    title: issue?.title ?? "",
    description: issue?.description ?? "",
  };

  const handleSubmit = async (values: {
    title: string;
    description: string;
  }) => {
    setSubmitting(true);
    try {
      const res = await axios.post("/api/issues", values);
      console.log(res);
      router.push("/issues");
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
