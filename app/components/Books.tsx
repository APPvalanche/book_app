import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
          author
      }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Books() {
  const data: simplifiedBook[] = await getData();

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-4 xl:gap-x-8">
      {data.map((book) => (
        <div key={book._id} className="group relative">
          <div className="aspect-square w-full">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="h-[300] w-[150]">
                  <Image
                    className="object-cover"
                    src={book.imageUrl}
                    alt={book.name}
                    width={300}
                    height={300}
                  />
                </div>
                <CardTitle>{book.name}</CardTitle>
                <CardDescription>{book.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button>
                  <Link href={book._id}>Book Details</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
