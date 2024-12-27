import Image from "next/image";
import { getBookById, getBooks } from "@/app/_services/books";

export async function generateStaticParams() {
  const books = await getBooks();

  return books.map((book) => ({
    id: String(book.id),
  }));
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const book = await getBookById(id);

  return (
    <div className="book-detail-container">
      <div className="book-detail-card">
        {book.svg_image && book.title ? (
          <Image
            src={book.svg_image}
            alt={book.title}
            width={200}
            height={300}
            className="book-image"
          />
        ) : (
          <div className="placeholder">No Image</div>
        )}
        <div className="book-metadata">
          <h1 className="book-title">{book.title}</h1>
          <p className="book-author">
            <strong>Author:</strong> {book.author || "Unknown"}
          </p>
          <p className="book-publisher">
            <strong>Publisher:</strong> {book.publisher || "Unknown"}
          </p>
          <p className="book-year">
            <strong>Year:</strong> {book.year || "Unknown"}
          </p>
          <p className="book-pages">
            <strong>Pages:</strong> {book.pages || "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
}
