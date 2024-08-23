import React, { PropsWithChildren } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export default function SearchBar({
  onSearch,
}: PropsWithChildren<SearchBarProps>) {
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get("query") as string;

    onSearch(searchQuery.trim());
  };

  return (
    <form onSubmit={handleSearch}>
      <p>
        <input
          type="text"
          name="query"
          placeholder="Search books by title..."
        />
      </p>
      <button type="submit">Search</button>
    </form>
  );
}
