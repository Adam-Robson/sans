import { client } from "./client";

export async function getBooks() {
  try {
    const { data: books, error } = await client.from("books-table").select();

    if (error) {
      throw new Error(`Error fetching books: ${error.message}`);
    }

    return books;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch books");
  }
}

export async function getBookById(id: string) {
  const { data: book, error } = await client
    .from("books-table")
    .select("*")
    .eq("id", id);

  if (error) {
    throw new Error(`Error fetching book with ID ${id}: ${error.message}`);
  }
  return book[0];
}
