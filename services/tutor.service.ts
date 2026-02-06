import { env } from "@/env"
import {  ServiceOptions, TutorSearchParams } from "@/types";



const BACKEND_API = env.BACKEND_API;



export const tutorService = {
    getTutorsPost : async function(params?: TutorSearchParams, options? : ServiceOptions) {
        try {

            const url = new URL(`${BACKEND_API}/tutors`);
            
            // url.searchParams.append("key","value");
            // console.log(Object.entries(params))
        //    console.log(url.toString())
            if(params){
                Object.entries(params).forEach(([key,value])=>{
                    if(value!==undefined && value!==null && value!==''){
                        url.searchParams.append(key,value)
                    }
                })
            }
            // console.log(url.toString())
            const config : RequestInit = {};

            if(options?.cache){
                config.cache = options.cache
            }

            if(options?.revalidate){
                config.next = {revalidate : options.revalidate}
            }

            const res = await fetch(url.toString(),{
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
    },
    getTutorById : async function(id : string) {
        try {

                const res = await fetch(`${BACKEND_API}/tutors/${id}`)
                const tutor = await res.json();
                return tutor;

        } catch (error) {

            return {data : null , error : { message  : " Categories data are not get" } }
        }
    },



}