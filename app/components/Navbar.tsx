"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, ArrowDownCircleIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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

  function setIsOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center bg-black justify-between mx-auto px-4 sm:px-6 lg:px-8 flex h-16 w-full">
        <div>
          <Link href="/">
            <span className="flex text-2xl font-bold text-gray-100 cursor-pointer">
            <ArrowDownCircleIcon className="w-6 m-1" /> BOOKIFY
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
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="h-6 lg:hidden w-6 text-gray-100" />
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {links.map((link, idx) => (
                <Link
                onClick={() => setIsOpen(false)}
                  href={link.href}
                  key={idx}
                  className="block px-2 py-1 text-lg"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
