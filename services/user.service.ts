import { cookies } from "next/headers";
import { toast } from "sonner";

export const userService = {

  getSession: async function () {

    try {

      const cookieStore = await cookies();

      const res = await fetch("http://localhost:5000/api/auth/get-session", {
        headers: {
          Cookie: cookieStore.toString(),
        },
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
};
