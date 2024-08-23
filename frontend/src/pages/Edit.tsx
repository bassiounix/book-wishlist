import { Navigate, useParams } from "react-router-dom";
import BookForm from "../components/BookForm";
import { Book } from "../components/BookList";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function Edit() {
  let { id } = useParams();

  const item = useQuery<Book>({
    queryKey: ["book", id],
    queryFn: () =>
      fetch(`http://localhost:8000/api/books/${id}/`).then((res) => res.json()),
  });

  const form = useMutation({
    mutationFn: async (object: unknown) => {
      const response = await fetch(`http://localhost:8000/api/books/${id}/`, {
        method: "put",
        body: JSON.stringify(object),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    },
  });

  if (form.isSuccess) {
    return <Navigate to=".." />;
  }

  return (
    <>
      <h2>Edit Book</h2>

      {form.isError && (
        <p className="notice">
          Error:{" "}
          {form.error instanceof Error ? form.error.message : "Unknown error"}
        </p>
      )}
      {item.isError && (
        <p className="notice">
          Error:{" "}
          {item.error instanceof Error ? item.error.message : "Unknown error"}
        </p>
      )}

      {form.isPending && <p className="notice">Processing...</p>}
      {item.isLoading && <p className="notice">Loading...</p>}

      {item.isSuccess && (
        <BookForm
          title={item.data.title}
          author={item.data.author}
          description={item.data.description}
          genre={item.data.genre}
          onSubmit={form.mutate}
        />
      )}
    </>
  );
}
