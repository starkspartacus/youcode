import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { env } from "@/lib/env"

const prisma = new PrismaClient()

export default NextAuth({
  providers: [
   GitHubProvider({
    clientId: env.GITHUB_ID,
    clientSecret: env.GITHUB_SECRET,
  }),
  ],
  adapter: PrismaAdapter(prisma),
})