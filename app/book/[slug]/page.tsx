import { client } from "@/app/lib/sanity";
import { fullBook } from "@/app/interface";
import Image from "next/image";

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
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:w-1/2 lg:pb-24 lg:pt-48">
          <h1 className="mb-2 text-2xl font-bold text-black sm:text-3xl md:mb-4 md:text-4xl">
            {data.name}
          </h1>
          <p className="max-w-md leading-relaxed text-blue-500 xl:text-base">
            {data.author}
          </p>
          <p className="text-gray-700">{data.description}</p>
        </div>
        <div className="flex w-full lg:w-1/2">
          <div className="w-full">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={data.imageUrl}
                alt={data.name}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
