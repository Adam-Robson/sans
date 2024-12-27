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
  if (!id) {
    throw new Error("A book ID is required to view a book.");
  }

  try {
    const res = await client
      .from("books-table")
      .select("*")
      .match({ id })
      .single();

    if (res.error) {
      throw new Error(
        `Error fetching book with ID ${id}: ${res.error.message}`
      );
    }

    if (!res.data) {
      throw new Error(`Book with ID ${id} not found`);
    }

    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch book with ID ${id}`);
  }
}
