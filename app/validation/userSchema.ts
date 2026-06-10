import z, { email, string } from "zod";

export const userRegister = z.object({
  name: string().min(2).max(25),
  email: email(),
  password: string(),
});

export const userLogin = z.object({
  email: email(),
  password: string(),
});
