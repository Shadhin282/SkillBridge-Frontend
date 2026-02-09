import { env } from "@/env";
import { cookies } from "next/headers";


const AUTH_URL = env.AUTH_URL;
const BACKEND_API = env.BACKEND_API;

export const userService = {

  getSession: async function () {

    try {

      const cookieStore = await cookies();

      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      const session = await res.json();

      if (!session) {
        return { data: null, error: { message: "Session is missing" } };
      }

      return { data: session, error: null };


    } catch (err) {

      console.log(err);

      return {
        data: null,
        error: { message: "Something went wrong during get cookie" },
      };
    }
  },
  getStats : async function (){
    const cookieStore = await cookies();
          try {
            const res = await fetch(`${BACKEND_API}/admin/stats`,{
              headers: {
                Cookie : cookieStore.toString(),
              },
            })

            const stats = await res.json();

            return { data: stats, error: null };
          } catch (error) {
             console.log(error);

      return {
        data: null,
        error: { message: "Something went wrong during get cookie" },
      };
          }
  },

  getUsers : async function (){
     const cookieStore = await cookies();
      try {
        const res = await fetch(`${BACKEND_API}/admin/users`,{
          headers : {
            Cookie : cookieStore.toString(),
          }
        })
        const data = await res.json();

        return { data, error: null };
      } catch (error) {
            console.log(error);

      return {
        data: null,
        error: { message: "Something went wrong during get cookie" },
      };
      }
  }
};
