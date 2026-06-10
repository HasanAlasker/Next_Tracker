"use client";
import AppForm from "@/app/components/form/AppForm";
import Button from "@/app/components/form/Button";
import FormikInput from "@/app/components/form/FormikInput";
import { useAuthStore } from "@/app/store/useAuthStore";
import { AuthPayload } from "@/app/types/auth";
import { Form } from "formik";
import { useRouter } from "next/navigation";

export default function Register() {
  const { register } = useAuthStore();
  const router = useRouter();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values: AuthPayload) => {
    try {
      const res = await register(values);
      if (res.status === 201) router.push("/");
    } catch (error) {}
  };
  return (
    <AppForm initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <FormikInput
          name="name"
          label="Name"
          placeholder="Enter your name"
          icon="user"
        />
        <FormikInput
          name="email"
          label="Email"
          placeholder="Enter your email"
          icon="mail"
        />
        <FormikInput
          name="password"
          label="Password"
          placeholder="Enter your password"
          icon="key-round"
        />
        <Button type="submit" title={"Register"} isPri />
        <hr />
        <Button
          title={"Login"}
          onClick={() => router.push("/auth/login")}
        />
      </Form>
    </AppForm>
  );
}
