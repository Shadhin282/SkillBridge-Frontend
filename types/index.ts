export interface TutorProfile {
    id: string;
    userId: string;
    name: string;
    email: string;
    role: 'TUTOR';
    avatar?: string;
    bio: string;
    subjects: string[];
    hourlyRate: number;
    review : number;
    _count : {
        review : number
    };
    user : {
        image : string;
        name : string;
    };
    avgRating : number;
    rating : number;
    reviewCount: number;
    availability: AvailabilitySlot[];
    categoryName: string;
}

export interface AvailabilitySlot {
    day: string; // 'Monday', 'Tuesday', etc.
    startTime: string; // '09:00'
    endTime: string; // '17:00'
}

export interface Category {
        id : string;
        name : string;
        _count :{
            tutors : number
        } 

}

export interface TutorSearchParams {
        search ?: string;
        category? : string;
        price ?: number;
        rating ?: number;
}

export interface ServiceOptions {
    cache? : RequestCache;
    revalidate? : number;
}

export interface Review {
    id?: string;
    rating?: number | undefined;
    comment?: string | undefined;
    tutorId : string ;
    legnth : number;
}