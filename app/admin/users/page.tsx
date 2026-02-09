import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { userService } from '@/services/user.service';
import { User } from '@/types';
import { Ban } from 'lucide-react';


export default async function UserManagement() {
  // const [searchQuery, setSearchQuery] = useState('');

  // const users = [
  //   {
  //     id: 1,
  //     name: 'Alex Johnson',
  //     email: 'student@test.com',
  //     role: 'student',
  //     status: 'Active',
  //     joined: 'Mar 15, 2024',
  //     avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  //     initials: 'AJ',
  //   },
  //   {
  //     id: 2,
  //     name: 'Sarah Wilson',
  //     email: 'tutor@test.com',
  //     role: 'tutor',
  //     status: 'Active',
  //     joined: 'Mar 15, 2024',
  //     avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  //     initials: 'SW',
  //   },
  //   {
  //     id: 3,
  //     name: 'Admin User',
  //     email: 'admin@test.com',
  //     role: 'admin',
  //     status: 'Active',
  //     joined: 'Mar 15, 2024',
  //     avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  //     initials: 'AU',
  //   },
  // ];
    const {data} = await userService.getUsers()
    console.log(data)
  const getRoleBadgeColor = (role: string) => {
    switch (data.data.role) {
      case 'student':
        return 'bg-gray-100 text-gray-800';
      case 'tutor':
        return 'bg-gray-900 text-white';
      case 'admin':
        return 'bg-red-600 text-white';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // const filteredUsers = users.filter(
  //   (user) =>
  //     user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     user.email.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <>
      {/* <AdminNavbar /> */}
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
            {/* <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-10"
              />
            </div> */}
          </div>

          {/* Users Table */}
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Joined
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.data.map((user:User) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={user.image || "/placeholder.svg"} />
                            <AvatarFallback>{user.name}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900 text-sm">
                              {user.name}
                            </p>
                            <p className="text-gray-500 text-xs">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge
                          className={`${getRoleBadgeColor(
                            user.role
                          )} text-xs font-semibold capitalize`}
                        >
                          {user.role}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Badge className="bg-green-100 text-green-800 text-xs font-semibold">
                          {user.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(user.createdAt).toISOString().split('T')[0]}
                      </td>
                      <td className="px-6 py-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 cursor:pointer hover:text-red-700 hover:bg-red-50 gap-2"
                        >
                          <Ban className="w-4 h-4" />
                          Ban
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {data.data.length === 0 && (
              <div className="px-6 py-12 text-center">
                <p className="text-gray-500">No users found matching your search.</p>
              </div>
            )}
          </Card>

          {/* Stats */}
          <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
            <p>
              Showing <span className="font-medium">{data.data.length}</span> of{' '}
              <span className="font-medium">{data.data.length}</span> users
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
