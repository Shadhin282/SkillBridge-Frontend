"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name?: string;
  email?: string;
  image?: string;
}

export default function NavbarClient({ user }: { user: User | null }) {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <>
          <Avatar className="w-9 h-9">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" />
            <AvatarFallback>Alex </AvatarFallback>
          </Avatar>
            <span className="text-sm font-medium text-gray-900">
                      Alex Johnson
                    </span>
          <Button variant="ghost" onClick={handleSignOut}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/register">
            <Button className="bg-black text-white">Get Started</Button>
          </Link>
        </>
      )}
    </div>
  );
}
