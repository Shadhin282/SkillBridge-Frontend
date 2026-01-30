'use client';

import { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
// import UserNavbar from '@/components/user-navbar';
import { Button } from '@/components/ui/button';

type TabType = 'upcoming' | 'past' | 'cancelled';

export default function MyBookings() {
  const [activeTab, setActiveTab] = useState<TabType>('upcoming');

  const bookings = {
    upcoming: [
      {
        id: 1,
        subject: 'Calculus',
        tutor: 'Sarah Wilson',
        date: '25/03/2024',
        time: '14:00',
        duration: '60 min',
        status: 'CONFIRMED',
      },
    ],
    past: [
      {
        id: 2,
        subject: 'Physics',
        tutor: 'David Chen',
        date: '20/03/2024',
        time: '10:00',
        duration: '60 min',
        status: 'COMPLETED',
      },
    ],
    cancelled: [
      {
        id: 3,
        subject: 'Chemistry',
        tutor: 'Emily Rodriguez',
        date: '15/03/2024',
        time: '15:00',
        duration: '60 min',
        status: 'CANCELLED',
      },
    ],
  };

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', count: 1 },
    { id: 'past', label: 'Past', count: 1 },
    { id: 'cancelled', label: 'Cancelled', count: 1 },
  ];

  const currentBookings = bookings[activeTab];

  return (
    <>
      {/* <UserNavbar userType="student" /> */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Bookings</h1>

        {/* Tabs */}
        <div className="flex gap-8 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`pb-4 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {currentBookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white border border-gray-200 rounded-lg p-6 max-w-2xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {booking.subject}
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <span>👤</span> with {booking.tutor}
                  </p>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    booking.status === 'CONFIRMED'
                      ? 'bg-gray-900 text-white'
                      : booking.status === 'COMPLETED'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                  }`}
                >
                  {booking.status}
                </span>
              </div>

              <div className="flex items-center gap-8 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {booking.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {booking.time} ({booking.duration})
                </div>
              </div>

              {activeTab === 'upcoming' && (
                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                  Join Meeting
                </Button>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
