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
    href: "/New",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center bg-black justify-between mx-auto px-4 sm:px-6 lg:px-8 flex h-16 w-full">
        <div>
          <Link href="/">
            <span className="text-2xl font-bold text-gray-100 cursor-pointer">
              BOOKIFY
            </span>
          </Link>
        </div>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              <Link href={link.href}>
                <span
                  className={`text-lg font-semibold text-gray-100 cursor-pointer ${
                    pathname === link.href
                      ? "text-gray-400"
                      : "hover:text-gray-400"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
