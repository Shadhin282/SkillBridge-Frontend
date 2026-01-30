'use client';

import { useState, useMemo } from 'react';
import { Search, Star } from 'lucide-react';
// import UserNavbar from '@/components/user-navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface Tutor {
  id: number;
  name: string;
  email: string;
  image: string;
  rating: number;
  reviews: number;
  subjects: string[];
  hourlyRate: number;
  bio: string;
  available: boolean;
  category: string;
}

const TUTORS: Tutor[] = [
  {
    id: 1,
    name: 'Sarah Wilson',
    email: 'sarah@test.com',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 124,
    subjects: ['Calculus', 'Algebra', 'Statistics'],
    hourlyRate: 45,
    bio: 'PhD student in Mathematics with 5 years of teaching experience. I make...',
    available: true,
    category: 'Mathematics',
  },
  {
    id: 2,
    name: 'David Chen',
    email: 'david@test.com',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 89,
    subjects: ['React', 'JavaScript', 'Python'],
    hourlyRate: 60,
    bio: 'Senior Software Engineer specializing in Web Development. Learn React,...',
    available: true,
    category: 'Computer Science',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    email: 'emily@test.com',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 56,
    subjects: ['Spanish', 'French', 'ESL'],
    hourlyRate: 35,
    bio: 'Certified Spanish teacher with a passion for languages. Interactive...',
    available: true,
    category: 'Languages',
  },
  {
    id: 4,
    name: 'James Wilson',
    email: 'james@test.com',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 42,
    subjects: ['Physics', 'Chemistry', 'Biology'],
    hourlyRate: 50,
    bio: 'Physics enthusiast and researcher. I specialize in making complex...',
    available: false,
    category: 'Science',
  },
];

interface FilterState {
  category: string[];
  hourlyRate: string;
  rating: string;
  searchQuery: string;
}

export default function BrowseTutors() {
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    hourlyRate: '',
    rating: '',
    searchQuery: '',
  });

  const categories = ['Mathematics', 'Computer Science', 'Languages', 'Science', 'Arts & Music', 'Business'];

  const filteredTutors = useMemo(() => {
    return TUTORS.filter((tutor) => {
      // Search filter
      if (
        filters.searchQuery &&
        !tutor.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
        !tutor.subjects.some((s) => s.toLowerCase().includes(filters.searchQuery.toLowerCase()))
      ) {
        return false;
      }

      // Category filter
      if (filters.category.length > 0 && !filters.category.includes(tutor.category)) {
        return false;
      }

      // Hourly rate filter
      if (filters.hourlyRate) {
        if (filters.hourlyRate === 'under30' && tutor.hourlyRate >= 30) return false;
        if (filters.hourlyRate === '30-60' && (tutor.hourlyRate < 30 || tutor.hourlyRate > 60)) return false;
        if (filters.hourlyRate === '60+' && tutor.hourlyRate < 60) return false;
      }

      // Rating filter
      if (filters.rating) {
        if (filters.rating === '4+' && tutor.rating < 4) return false;
        if (filters.rating === '3+' && tutor.rating < 3) return false;
        if (filters.rating === '2+' && tutor.rating < 2) return false;
      }

      return true;
    });
  }, [filters]);

  const toggleCategory = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category.includes(category)
        ? prev.category.filter((c) => c !== category)
        : [...prev.category, category],
    }));
  };

  const resetFilters = () => {
    setFilters({
      category: [],
      hourlyRate: '',
      rating: '',
      searchQuery: '',
    });
  };

  return (
    <>
      {/* <UserNavbar userType="student" /> */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Browse Tutors</h1>
          <p className="text-lg text-gray-600">Find the perfect tutor for your needs</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by name or subject..."
              value={filters.searchQuery}
              onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
              className="pl-10 py-3 h-12"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 border border-gray-200 sticky top-20">
              <h3 className="font-bold text-gray-900 mb-6">Filters</h3>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 text-sm mb-4">Categories</h4>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.category.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="w-4 h-4 rounded"
                      />
                      <span className="text-sm text-gray-600">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Hourly Rate */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 text-sm mb-4">Hourly Rate</h4>
                <div className="space-y-3">
                  {[
                    { value: 'under30', label: 'Under $30' },
                    { value: '30-60', label: '$30 - $60' },
                    { value: '60+', label: '$60+' },
                  ].map((rate) => (
                    <label key={rate.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rate"
                        value={rate.value}
                        checked={filters.hourlyRate === rate.value}
                        onChange={(e) => setFilters((prev) => ({ ...prev, hourlyRate: e.target.value }))}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-600">{rate.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 text-sm mb-4">Rating</h4>
                <div className="space-y-3">
                  {[
                    { value: '4+', label: '4+ Stars' },
                    { value: '3+', label: '3+ Stars' },
                    { value: '2+', label: '2+ Stars' },
                  ].map((rating) => (
                    <label key={rating.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        value={rating.value}
                        checked={filters.rating === rating.value}
                        onChange={(e) => setFilters((prev) => ({ ...prev, rating: e.target.value }))}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-600">{rating.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                onClick={resetFilters}
                className="w-full border-gray-300 bg-transparent"
              >
                Reset Filters
              </Button>
            </div>
          </aside>

          {/* Tutors Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTutors.map((tutor) => (
                <div
                  key={tutor.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Tutor Header */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={tutor.image || "/placeholder.svg"} alt={tutor.name} />
                        <AvatarFallback>{tutor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg mb-1">
                          {tutor.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-gray-900">
                            {tutor.rating}
                          </span>
                          <span className="text-sm text-gray-600">
                            ({tutor.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {tutor.bio}
                    </p>
                  </div>

                  {/* Subjects */}
                  <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {tutor.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>🕐</span>
                        {tutor.available ? 'Available Today' : 'Not Available'}
                      </div>
                      <span className="font-bold text-gray-900">
                        ${tutor.hourlyRate}
                        <span className="text-sm text-gray-600 font-normal">/hr</span>
                      </span>
                    </div>
                    <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredTutors.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No tutors found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
