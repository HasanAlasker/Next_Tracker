"use client";
import AppForm from "@/app/components/form/AppForm";
import Button from "@/app/components/form/Button";
import FormikInput from "@/app/components/form/FormikInput";
import { useAuthStore } from "@/app/store/useAuthStore";
import { AuthPayload } from "@/app/types/auth";
import { Form } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const { login, loading } = useAuthStore();
  const router = useRouter();

  const [err, setErr] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values: AuthPayload) => {
    try {
      const res = await login(values);
      console.log("res: ", res.data);
      if (res.status === 200) router.push("/");
    } catch (error: any) {
      const message = error.response?.data?.error ?? "something went wrong";
      setErr(message);
      console.log(message);
    }
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
        {err && <p className="error">{err}</p>}
        <hr />
        <Button
          title={"Register"}
          onClick={() => router.push("/auth/register")}
        />
      </Form>
    </AppForm>
  );
}
