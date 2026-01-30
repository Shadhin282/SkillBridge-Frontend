// import AdminNavbar from '@/components/admin-navbar';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, DollarSign, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: '3',
      change: '+5 this week',
      icon: Users,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Total Bookings',
      value: '3',
      change: '+12% vs last month',
      icon: BookOpen,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Platform Revenue',
      value: '$6',
      change: '10% commission',
      icon: DollarSign,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      title: 'Growth Rate',
      value: '15%',
      change: 'Steady growth',
      icon: TrendingUp,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ];

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
    <>
      {/* <AdminNavbar /> */}
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm font-medium mb-2">
                        {stat.title}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-3xl font-bold text-gray-900">
                          {stat.value}
                        </p>
                      </div>
                      <p className="text-green-600 text-xs mt-2 font-medium">
                        {stat.change}
                      </p>
                    </div>
                    <div className={`${stat.bgColor} p-3 rounded-lg`}>
                      <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Registrations */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Recent Registrations
              </h2>
              <div className="space-y-4">
                {recentRegistrations.map((registration) => (
                  <div
                    key={registration.id}
                    className="flex items-center justify-between py-3 border-b border-gray-300 last:border-b-0"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={registration.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{registration.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {registration.name}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {registration.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">
                      {registration.time}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Bookings */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Recent Bookings
              </h2>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex items-center justify-between py-3 border-b border-gray-300 last:border-b-0"
                  >
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {booking.title}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {booking.student} with {booking.tutor}
                      </p>
                    </div>
                    <Badge className={`${booking.statusColor} text-xs font-semibold`}>
                      {booking.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
