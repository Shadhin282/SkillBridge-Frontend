import { env } from "@/env"


const BACKEND_API = env.BACKEND_API

export const ReviewService = {
    getReviewById : async function (id : string){
            try {
                const res = await fetch(`${BACKEND_API}/reviews/${id}`);
            const reviewId = await res.json();

            return reviewId;
            } catch (error) {
                return {data : null , error : { message  : " review data are not get" } }
            }
    }
}