import { useMutation } from "@tanstack/react-query";
import { Book } from "../components/BookList";
import BookForm from "../components/BookForm";
import { Navigate } from "react-router-dom";

export default function Create() {
  const { isSuccess, isError, mutate, error, isPending } = useMutation({
    mutationFn: async (object: unknown) => {
      const response = await fetch("http://localhost:8000/api/books/", {
        method: "post",
        body: JSON.stringify(object),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      return data as Book;
    },
  });

  if (isSuccess) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h2>Create Book</h2>

      {isError && (
        <p className="notice">
          Error: {error instanceof Error ? error.message : "Unknown error"}
        </p>
      )}

      {isPending && <p className="notice">Processing...</p>}

      <BookForm onSubmit={mutate} />
    </>
  );
}
