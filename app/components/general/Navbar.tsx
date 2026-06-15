"use client";

import { useAuthStore } from "@/app/store/useAuthStore";
import classNames from "classnames";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const pathName = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  const LinkList = !user
    ? [{ label: "Sign up", href: "/auth/register" }]
    : [
        { label: "Dashboard", href: "/" },
        { label: "Issues", href: "/issues" },
      ];

  return (
    <nav className="flex items-center justify-between text-md md:text-xl px-6 py-4 mb-10 border-b border-zinc-400 bg-white">
      <div className="flex space-x-6">
        {LinkList.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              "text-black": pathName === link.href,
              "text-zinc-400": pathName !== link.href,
              "transition-all hover:text-black hover:-translate-y-1 ": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {user && <LogOut color="red" onClick={handleLogout} />}
    </nav>
  );
}
