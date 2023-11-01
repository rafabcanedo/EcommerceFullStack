import NextAuth from "next-auth/next";

declare module "next-auth" {
 type User = {
  id: number,
  email: string;
  name: string;
  password?: string;
 }
}