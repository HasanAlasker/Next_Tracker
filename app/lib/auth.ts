import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../generated/prisma/client";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (plain: string, hash: string) => {
  return bcrypt.compare(plain, hash);
};

export const generateJWT = (user: User) => {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    process.env.SECRET_KEY!,
    {
      expiresIn: "90d",
    },
  );
};
