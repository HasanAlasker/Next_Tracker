"use client";

import Link from "next/link";
import { Helicopter } from "lucide-react/";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
import { useAuthStore } from "@/app/store/useAuthStore";
import Button from "../form/Button";

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
    <nav className="flex items-center justify-between text-md md:text-xl px-6 py-4 mb-10 border-b border-zinc-400">
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
      <div className="flex space-x-4 items-center">
        <Link href={"/"}>
          <Helicopter strokeWidth={1.5} size={30} />
        </Link>
        {user && (
          <Button
            isDelete
            isPri
            title={"Log out"}
            icon="log-out"
            onClick={handleLogout}
          />
        )}
      </div>
    </nav>
  );
}
