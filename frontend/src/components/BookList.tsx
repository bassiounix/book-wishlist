import { useQuery } from "@tanstack/react-query";
import BookItem from "./BookItem.tsx";

export type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
};

export default function BookList() {
  const { error, isError, data, isLoading, isSuccess } = useQuery<Book[]>({
    queryKey: ["all books"],
    queryFn: () =>
      fetch("http://localhost:8000/api/books?format=json").then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }

  return (
    isSuccess && (
      <>
        <h2>Book List</h2>
        {data.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            description={book.description}
          />
        ))}
      </>
    )
  );
}
