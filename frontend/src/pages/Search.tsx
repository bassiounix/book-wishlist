import SearchBar from "../components/SearchBar";
import { Book } from "../components/BookList";
import BookItem from "../components/BookItem";
import { useMutation } from "@tanstack/react-query";

export default function Search() {
  const {
    isSuccess,
    isError,
    mutate,
    data: book,
    error,
    isPending,
  } = useMutation({
    mutationFn: async (query: string) => {
      const response = await fetch(
        `http://localhost:8000/api/books/${query}/?format=json`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      return data as Book;
    },
  });

  return (
    <div>
      <SearchBar onSearch={mutate} />
      {isSuccess && (
        <div>
          <BookItem
            id={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            description={book.author}
          />
        </div>
      )}
      {isPending && <div>Loading...</div>}
      {isError && (
        <div>
          Error: {error instanceof Error ? error.message : "Unknown error"}
        </div>
      )}
    </div>
  );
}
