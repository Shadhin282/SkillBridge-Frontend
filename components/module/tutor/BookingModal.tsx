'use client'
import React, { useState } from 'react';
import { BookingModal } from '../booking/BookingModal';
import { TutorProfile } from '@/types';

const BookingModals = ({tutor}:{tutor : TutorProfile}) => {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    return (
        <div>
            <BookingModal
                tutor={tutor}
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                onBook={(details) => console.log('Booked:', details)} />
        </div>
    );
};

export default BookingModals;