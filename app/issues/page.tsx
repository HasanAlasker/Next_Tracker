"use client";

import Link from "next/link";
import Button from "../components/form/Button";
import AppForm from "../components/form/AppForm";
import FormikInput from "../components/form/FormikInput";
import { Form } from "formik";
import { Issue } from "../types/issue";

export default function IssuesPage() {
  const initialValues = {
    title: "",
    description: "",
  };

  const handleSubmit = async (values: Issue) => {
    console.log(values);
  };

  return (
    <AppForm initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <FormikInput
          placeholder="Enter task title"
          label="Title"
          name="title"
          icon="text"
        />
        <Button type="submit" icon="plus" isPri title={"Add Issue"} />
      </Form>
    </AppForm>
  );
}
