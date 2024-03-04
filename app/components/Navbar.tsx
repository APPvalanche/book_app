import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Books",
      href: "/",
    },
    {
      name: "AddBook",
      href: "/",
    },
  ];

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 flex h-16 w-full">
        <div>
          <Link href="/">
            <h1 className="text-3xl font-bold">BOOKIFY</h1>
          </Link>
        </div>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, i) => (
            <Button
              className="text-lg font-semibold text-primary"
              variant="link"
              size="lg"
            >
              <Link href={link.href} key={i}>
                {link.name}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
