import { FormEvent, PropsWithChildren, useState } from "react";
import { Book } from "./BookList";

type BookProps = {
  onSubmit: (object: { [k: string]: FormDataEntryValue }) => void;
} & Partial<Book>;

export default function BookForm(props: PropsWithChildren<BookProps>) {
  const [author, setAuthor] = useState(props.author);
  const [description, setDescription] = useState(props.description);
  const [genre, setGenre] = useState(props.genre);
  const [title, setTitle] = useState(props.title);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData);

    props.onSubmit(payload);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          name="genre"
          id="genre"
          placeholder="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}
