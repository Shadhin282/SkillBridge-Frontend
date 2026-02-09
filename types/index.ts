

export interface TutorProfile {
  id: string;
  userId: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  bio: string;
  subjects: string[];
  hourlyRate: number;
  review: number;
  _count: {
    review: number;
  };
  user: {
    image: string;
    name: string;
    role: string;
    email : string;
  };
  avgRating: number;
  rating: number;
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
  id: string;
  name: string;
  _count: {
    tutors: number;
  };
  description : string;
}

export interface TutorSearchParams {
  search?: string;
  category?: string;
  price?: number;
  rating?: number;
}

export interface ServiceOptions {
  cache?: RequestCache;
  revalidate?: number;
}

export interface Review {
  id?: string;
  rating: number ;
  comment?: string | undefined;
  tutorId: string;
  legnth: number;
  student : {
    name : string;
    image : string;
  };
  createdAt : Date;

}

export interface User {
  id: string;
  name: string;
  image: string;
  role: string;
  email: string;
  createdAt: Date;
  status: string;
}

export interface Booking {
  id: string;
  studentId: string;
  tutorId: string;
  date: Date;
  status: string;
  createdAt: Date;
  student : {
    email : string;
    name : string ;
    image : string;

  };
  tutor : {
    subjects : string;
    user : {
        name : string;
    }
  }
}
