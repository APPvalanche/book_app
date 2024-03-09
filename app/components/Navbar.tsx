"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Books",
    href: "/Books",
  },
  {
    name: "Add Book",
    href: "/EditBook",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center bg-gray-900 justify-between mx-auto px-4 sm:px-6 lg:px-8 flex h-16 w-full">
        <div>
          <Link href="/">
            <h1 className="text-3xl font-bold text-gray-100">BOOKIFY</h1>
          </Link>
        </div>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  key={idx}
                  className="text-lg font-semibold text-gray-100"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-100 transition duration-100 hover:text-gray-100"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
