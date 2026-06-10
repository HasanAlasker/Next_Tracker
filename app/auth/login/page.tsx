"use client";
import AppForm from "@/app/components/form/AppForm";
import Button from "@/app/components/form/Button";
import FormikInput from "@/app/components/form/FormikInput";
import { useAuthStore } from "@/app/store/useAuthStore";
import { AuthPayload } from "@/app/types/auth";
import { Form } from "formik";
import { useRouter } from "next/navigation";

export default function Login() {
  const { login } = useAuthStore();
  const router = useRouter();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values: AuthPayload) => {
    try {
      const res = await login(values);
      if (res.status === 200) router.push("/");
    } catch (error) {}
  };
  return (
    <AppForm initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
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
        <Button type="submit" title={"Login"} isPri />
        <hr />
        <Button
          title={"Register"}
          onClick={() => router.push("/auth/register")}
        />
      </Form>
    </AppForm>
  );
}
