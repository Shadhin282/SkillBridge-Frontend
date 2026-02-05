import { env } from "@/env"



const BACKEND_API = env.BACKEND_API;

export const tutorService = {
    getTutorsPost : async function() {
        try {

            const res = await fetch(`${BACKEND_API}/tutors`,{
                next: {revalidate: 10},
                cache : "no-cache"
                
            })
            const data = await res.json();
            return data;
        } catch (error) {
            return {data : null, error : {message : "Tutors Data not fetch"}}
        }
    },

    getCategory : async function() {
        try {

                const res = await fetch(`${BACKEND_API}/categories`,{
                    cache : "no-cache"
                })
                const category = await res.json();
                return category;

        } catch (error) {

            return {data : null , error : { message  : " Categories data are not get" } }
        }
    }


}