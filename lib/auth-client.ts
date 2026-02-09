import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
  baseURL: 'https://skill-bridge-orpin.vercel.app'

//   typeof window !== "undefined" ? window.location.origin : "",
//   fetchOptions: {
//     credentials: "include",
//   },
}
)


export const { signIn, signUp,signOut, useSession } = createAuthClient()