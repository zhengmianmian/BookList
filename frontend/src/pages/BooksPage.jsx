import { useState, useEffect } from "react"
import axios from "axios"

function BooksPage() {
  const [books, setBooks] = useState([])

  const getBooks = async () => {
    await axios.get('http://localhost:8080/api/Books')
    .then(res => {
      setBooks(res.data)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  useEffect(() => {
    getBooks()
  }, [])
  const bookItem = (book) => {
    return (
      <div key={book._id} className="m-2 p-4 bg-sky-500 rounded">
        <div>Name: {book.bookName}</div>
        <div>Price: {book.price}</div>
        <div>Category: {book.category}</div>
        <div>Author: {book.author}</div>
      </div>
    )
  };
  const booklist = books.map(book => bookItem(book));
  return (
    <div>
      <div className="p-2 text-center text-4xl">There are {books.length} books in total.</div>
      <div className="w-1/4 mx-auto text-xl underline hover:no-underline hover:cursor-pointer">Add a new book?</div>
      {books.length && (<div className="w-1/4 mx-auto my-4 flex flex-col justify-center">
        {booklist}
      </div>)}
    </div>
  );
}

export default BooksPage;