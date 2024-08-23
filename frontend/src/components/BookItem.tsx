import { PropsWithChildren } from "react";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";

type BookItemProps = {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
};

export default function BookItem({
  id,
  title,
  author,
  genre,
  description,
}: PropsWithChildren<BookItemProps>) {
  return (
    <section>
      <h3>
        {title} <Link to={`/${id}/edit`}>[Edit]</Link>
      </h3>
      <p>
        <strong>Author:</strong> {author}
      </p>
      <p>
        <strong>Genre:</strong> {genre}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <DeleteButton book_id={id} />
    </section>
  );
}
