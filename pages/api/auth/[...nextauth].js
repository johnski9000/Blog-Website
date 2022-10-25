import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../utils/db";
import User from "../../../Model/User";
import bcryptjs from "bcryptjs"



export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (user?._id) token._id = user._id;
      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      if (token?._id) session.user._id = token._id;
      return session
    }
  },
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
          async authorize(credentials) {
            await db.connect()
            const user = await User.findOne({email: credentials.email})
            await db.disconnect()
            console.log(user)
            // Add logic here to look up the user from the credentials supplied
            // const user = data.users.find(user => user.email === credentials.email)
            if (user && bcryptjs.compareSync(credentials.password, user.password)) {
              // Any object returned will be saved in `user` property of the JWT
              return {
                _id: user._id,
                name: user.name,
                email: user.email,
                image: user.image
              }
            } 
              throw new Error('Invalid email or password');      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          
        })
      ]
  })

