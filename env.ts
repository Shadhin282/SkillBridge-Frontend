import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const env = createEnv({
    server : {
        BACKEND_API : z.url(),
        BACKEND_URL : z.url(),     
        AUTH_URL : z.url(),
    },
    // client : {

    // },
    runtimeEnv : {
         BACKEND_API : process.env.BACKEND_API,
        BACKEND_URL : process.env.BACKEND_URL,
        AUTH_URL : process.env.AUTH_URL,
       
    }
})