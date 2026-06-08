"use client";

import Button from "../../components/form/Button";
import AppForm from "../../components/form/AppForm";
import FormikInput from "../../components/form/FormikInput";
import { Form } from "formik";
import { Issue } from "../../types/issue";
import FormikMde from "../../components/form/FormikMde";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function IssuesPage() {
  const router = useRouter();

  const initialValues = {
    title: "",
    description: "",
  };

  const handleSubmit = async (values: Issue) => {
    const res = await axios.post("/api/issues", values);
    console.log(res);
    router.push("/issues");
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
        <FormikMde
          name="description"
          label="Description"
          placeholder="Type task description"
        />
        <Button type="submit" icon="plus" isPri title={"Add Issue"} />
      </Form>
    </AppForm>
  );
}
