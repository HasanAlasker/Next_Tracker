"use client";

import Link from "next/link";
import { Construction } from "lucide-react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function Navbar() {
  const pathName = usePathname();

  const LinkList = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex items-center justify-between text-2xl p-6 border-b border-zinc-400">
      <div className="flex space-x-6">
        {LinkList.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              "text-black": pathName === link.href,
              "text-zinc-400": pathName !== link.href,
              "transition-all hover:text-black hover:-translate-y-1": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link href={"/"}>
        <Construction strokeWidth={1.5} size={30} />
      </Link>
    </nav>
  );
}
