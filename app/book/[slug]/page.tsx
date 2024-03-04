import { client } from "@/app/lib/sanity";
import { fullBook } from "@/app/interface";
import Image from "next/image";
import Link from "next/link";

async function getData(slug: string) {
  const query = `*[_type == "book" && slug.current == "${slug}"][0] {
        _id,
          "imageUrl": image.asset->url,
            name,
          author,
          description,
          "slug": slug.current,
      }`;

  const data = await client.fetch(query);

  return data;
}

export default async function BookPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBook = await getData(params.slug);

  return (
    <div className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            {data.name}
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            {data.author}
          </p>
          <p className="text-gray-700">{data.description}</p>
        </div>
        <div className="b-12 flex w-full md:mb-16 lg:w-2/3">
          <Image
            src={data.imageUrl}
            alt={data.name}
            width={300}
            height={300}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
