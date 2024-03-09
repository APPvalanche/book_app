import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../app/lib/sanity";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, author, imageUrl, description } = req.body;

      // Create a new book document in Sanity
      const createdBook = await client.create({
        _type: "book",
        name,
        author,
        imageUrl,
        description,
      });

      res.status(201).json(createdBook);
    } catch (error) {
      console.error("Error creating book:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
