import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";
// import AppleProvider from "next-auth/providers/apple";
// import FacebookProvider from "next-auth/providers/facebook";
// import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: "NextAuth.js <no-reply@example.com>",
    // }),
  ],
  callbacks: {
    async signOut({ token, session }) {
      console.log("signout");

      process.env.IS_AUTHENTICATED = "false";
      return true; // Return true to allow the sign out to complete
    },
    async signIn({ user, account, profile, email, credentials }) {
      const prisma = new PrismaClient();
      const res = await prisma.User.findFirst({
        where: { email: user.email },
      });
      if (res === null) {
        await prisma.User.create({
          data: { id: user.id, name: user.name, email: user.email },
        });
      }
      console.log(process.env.IS_AUTHENTICATED);
      process.env.IS_AUTHENTICATED = "true";
      console.log(process.env.IS_AUTHENTICATED);

      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
});

export { authoptions as GET, authoptions as POST };
