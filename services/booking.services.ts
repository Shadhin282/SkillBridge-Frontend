import { env } from "@/env"
import { cookies } from "next/headers";


const BACKEND_API = env.BACKEND_API;

export const BookingService = {
    getBooking : async function () {
        const cookieStore = await cookies();
        try {
            const res = await fetch(`${BACKEND_API}/bookings`,{
          headers : {
            Cookie : cookieStore.toString(),
          }})
            const data = await res.json();

            return {data, error : null}
        } catch (error) {
            console.log(error)
            return { data : null , error : {message : "internal error, category not fetch"}}
        }
    }
}