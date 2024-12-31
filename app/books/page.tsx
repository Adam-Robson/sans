import Image from "next/image";
import Link from "next/link";
import { getBooks } from "../_services/books";
import "./books.css";
import { FiChevronsLeft } from "react-icons/fi";
import DarkModeImage from "@/_components/DarkModeImage";

export async function generateStaticParams() {
  const books = await getBooks();
  return books.map((book) => ({ id: book.id.toString() }));
}

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <div className="books">
      <Link href="/">
        <FiChevronsLeft size={32} />
      </Link>
      <DarkModeImage
        darkSrc="/images/subtitle_drk.svg"
        lightSrc="/images/subtitle_lt.svg"
        alt="le fog subtitle"
      />
      <h1 className="books-title">books for reading</h1>

      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-list-item">
            <Link href={`/books/${book.id}`}>
              {book.title && book.png_image && (
                <Image
                  src={book.png_image}
                  alt={book.title}
                  width={220}
                  height={220}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
