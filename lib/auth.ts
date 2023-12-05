import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { env } from "./env";
import { prisma } from "./prisma";
import { AuthOptions, getServerSession } from "next-auth";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      if (!session?.user) return session;
      session.user.id = user.id;
      return session;
    },
  },
};

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};

export const getRequiredAuthSession = async () =>
  // ...parameters: ParametersGetServerSession
  {
    const session = await getServerSession(authOptions);

    if (!session?.user.id) {
      throw new Error("Unauthorized");
    }

    return session as {
      user: {
        id: string;
        email?: string;
        image?: string;
        name?: string;
      };
    };
  };
