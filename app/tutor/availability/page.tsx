'use client';

import { useState } from 'react';
import { Calendar, Save } from 'lucide-react';
// import UserNavbar from '@/components/user-navbar';
import { Button } from '@/components/ui/button';

interface TimeSlot {
  day: string;
  time: string;
  available: boolean;
}

export default function TutorAvailability() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeSlots = [
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
    '17:00 - 18:00',
  ];

  // Initialize availability grid
  const initialAvailability: { [key: string]: { [key: string]: boolean } } = {};
  days.forEach((day) => {
    initialAvailability[day] = {};
    timeSlots.forEach((time) => {
      // Pre-populate some availability for Monday morning
      initialAvailability[day][time] = day === 'Monday' && timeSlots.indexOf(time) < 3;
    });
  });

  const [availability, setAvailability] = useState(initialAvailability);

  const toggleSlot = (day: string, time: string) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [time]: !prev[day][time],
      },
    }));
  };

  const handleSaveChanges = () => {
    console.log('Saving availability:', availability);
    alert('Availability updated successfully!');
  };

  return (
    <>
      {/* <UserNavbar userType="tutor" userName="Sarah Wilson" /> */}
      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Manage Availability
            </h1>
            <p className="text-gray-600">Click on time slots to toggle your availability.</p>
          </div>
          <Button
            onClick={handleSaveChanges}
            className="bg-gray-900 text-white hover:bg-gray-800 flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
        </div>

        {/* Availability Grid */}
        <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 text-left font-semibold text-gray-900 bg-gray-50">
                  Time
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="px-4 py-4 text-center font-semibold text-gray-900 bg-gray-50 min-w-32"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time, timeIndex) => (
                <tr
                  key={time}
                  className={`${timeIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200 last:border-b-0`}
                >
                  <td className="px-6 py-4 font-medium text-gray-900 text-sm">
                    {time}
                  </td>
                  {days.map((day) => (
                    <td key={`${day}-${time}`} className="px-4 py-4 text-center">
                      <button
                        onClick={() => toggleSlot(day, time)}
                        className={`w-20 h-12 rounded-lg font-medium text-sm transition-all ${
                          availability[day][time]
                            ? 'bg-gray-900 text-white shadow-sm'
                            : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {availability[day][time] ? '✓' : ''}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-8 flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-900 rounded"></div>
            <span className="text-sm text-gray-600">Available</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-gray-200 rounded bg-white"></div>
            <span className="text-sm text-gray-600">Not Available</span>
          </div>
        </div>
      </main>
    </>
  );
}
