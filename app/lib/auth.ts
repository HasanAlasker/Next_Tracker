import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../generated/prisma/client";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

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

// this was made to act like a auth.js middleware in express
// to get the token of the user
export const getAuthUser = (request: NextRequest) => {
  const token = request.headers.get("x-auth-token");
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY!) as {
      id: number;
      email: string;
      name: string;
    };
    return decoded;
  } catch (error) {
    return null;
  }
};

export const getServerUser = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;

  try {
    return jwt.verify(token, process.env.SECRET_KEY!) as {
      id: number;
      email: string;
      name: string;
    };
  } catch (error) {
    return null;
  }
};
