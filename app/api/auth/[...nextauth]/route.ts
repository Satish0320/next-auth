
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: "Email",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "goku" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            const username = credentials?.username
            const password = credentials?.password

            console.log(username);
            console.log(password);
            
            const user = {
              name: "satish",
              id: "1",
              username: "Goku"
            }
        
            if (user) {
              return user
            }else{
              return null
            }
          }
        })
      ]
})

export {handler as GET, handler as POST}





