import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "slllk8y8",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_BOOK_APP_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
