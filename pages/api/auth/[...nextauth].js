import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import data from "../../../utils/data";

export const authOptions = {
    // Configure one or more authentication providers
    
    providers: [
        CredentialsProvider({
          async authorize(credentials) {
            console.log(credentials)
            // Add logic here to look up the user from the credentials supplied
            const user = data.users.find(user => user.email === credentials.email)
      
            if (user) {
              // Any object returned will be saved in `user` property of the JWT
              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              throw new Error('Invalid email or password');      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
        })
      ]
  }

export default NextAuth(authOptions)