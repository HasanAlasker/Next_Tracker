import React from "react";
import Link from "next/link";
import { Construction } from "lucide-react";

export default function Navbar() {
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
            className="text-zinc-500 transition-all hover:text-black hover:-translate-y-1"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Construction strokeWidth={1.5} size={30} />
    </nav>
  );
}
