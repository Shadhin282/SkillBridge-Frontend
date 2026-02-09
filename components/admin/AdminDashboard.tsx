import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, DollarSign, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  

  const recentRegistrations = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Student',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      time: 'Just now',
      initials: 'AJ',
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      role: 'Tutor',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      time: 'Just now',
      initials: 'SW',
    },
    {
      id: 3,
      name: 'Admin User',
      role: 'Admin',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      time: 'Just now',
      initials: 'AU',
    },
  ];

  const recentBookings = [
    {
      id: 1,
      title: 'Calculus',
      student: 'Alex Johnson',
      tutor: 'Sarah Wilson',
      status: 'CONFIRMED',
      statusColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: 2,
      title: 'React',
      student: 'Alex Johnson',
      tutor: 'David Chen',
      status: 'COMPLETED',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 3,
      title: 'Spanish',
      student: 'Alex Johnson',
      tutor: 'Emily Rodriguez',
      status: 'CANCELLED',
      statusColor: 'bg-red-100 text-red-800',
    },
  ];
    return (
        
    );
};

export default AdminDashboard;