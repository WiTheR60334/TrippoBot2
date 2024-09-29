import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"; // Import Credentials Provider
import User from "../../../../models/User"; // Your User model
import connectDB from "../../../../util/DB"; // Your database connection utility
import bcrypt from "bcrypt"; // For password hashing

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your-email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB(); // Connect to the database

        const user = await User.findOne({ email: credentials.email });

        // Check if user exists and password matches
        if (
          user &&
          (await bcrypt.compare(credentials.password, user.password))
        ) {
          return { id: user._id, email: user.email, role: user.role }; // Return user object
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const user = await User.findById(token.id);
      session.user.role = user.role; // Attach user role to session
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
