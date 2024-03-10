import { LibraryBig } from "lucide-react";

export default function Hero() {
  return (
    <div className="mx-auto w-full h-[500px] bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-xl flex items-center">
      <div className="p-10 text-center">
        <span>
          <LibraryBig color="white" size={48} />
        </span>
        <div className="w-[320px] text-left">
          <h1 className="mb-4 text-5xl font-bold text-white sm:text-5xl md:mb-8 md:text-7xl">
            Read The Next Book With Us.
          </h1>
        </div>
      </div>
    </div>
  );
}
