import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import data from "../../../utils/data";
import bcrypt from "bcryptjs"


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
    async session({ token, session }) {
      // Send properties to the client, like an access_token from a provider.
      if (token?._id) session.user._id = token._id;
      return session
    }
  },
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
          async authorize(credentials) {
            // Add logic here to look up the user from the credentials supplied
            const user = data.users.find(user => user.email === credentials.email)
            if ( user && bcrypt.compareSync(credentials.password, user.password) ) {
              // Any object returned will be saved in `user` property of the JWT
              return {
                _id: user.id,
                name: user.name,
                email: user.email,
              }
            } 
              throw new Error('Invalid email or password');      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          
        })
      ]
  })

