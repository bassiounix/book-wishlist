import { useMutation } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

type DeleteButtonProps = {
  book_id: number;
};

export default function DeleteButton({
  book_id: id,
}: PropsWithChildren<DeleteButtonProps>) {
  const { isSuccess, isError, mutate, error, isPending } = useMutation({
    mutationFn: async (_e: unknown) => {
      const response = await fetch(`http://localhost:8000/api/books/${id}/`, {
        method: "delete",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    },
  });

  if (isSuccess) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <button onClick={mutate}>Delete</button>
      {isPending && <p className="notice">Deleting Book...</p>}
      {isError && (
        <p className="notice">
          Error: {error instanceof Error ? error.message : "Unknown error"}
        </p>
      )}
    </>
  );
}
