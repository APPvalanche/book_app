"use client";
import { client } from "../lib/sanity";
import { simplifiedBook } from "../interface";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "book"] {
    _id,
    "imageUrl": image.asset->url,
      name,
      author,
      "slug": slug.current,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Books() {
  const data: simplifiedBook[] = await getData();
  return (
    <div className="mt-6 flex flex-wrap gap-6 justify-center">
      {data.map((book) => (
        <div
          key={book.slug}
          className="group relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        >
          <div className="aspect-w-2 aspect-h-3">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                className="object-cover w-full h-full"
                src={book.imageUrl}
                alt={book.name}
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {book.name}
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {book.author}
            </p>
            <div className="mt-4">
              <Button className="text-white font-semibold py-2 px-4 rounded">
                <Link href={`/book/${book.slug}`}>Book Details</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
