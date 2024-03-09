
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import Dropzone from "react-dropzone";

const NewBookForm = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("author", author);
      formData.append("description", description);
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const response = await fetch("api/createBook", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create book");
      }

      setName("");
      setAuthor("");
      setImageFile(null);
      setDescription("");
      console.log("Book added successfully!");
    } catch (error) {
      console.error("Error adding book:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrop = (acceptedFiles: File[]) => {
    setImageFile(acceptedFiles[0]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Upload Image:
        </label>
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="border border-dashed p-4 rounded-md cursor-pointer"
            >
              <input {...getInputProps()} />
              {imageFile ? (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Uploaded Image"
                  className="mx-auto max-h-48 mb-2 object-cover"
                />
              ) : (
                <p className="text-gray-400 text-center">
                  Drag 'n' drop an image here, or click to select one
                </p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Description:
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <Button type="submit">{isLoading ? "Submitting..." : "Submit"}</Button>
    </form>
  );
};

export default NewBookForm;
