import { useState, useEffect } from "react"
import axios from "axios"

function BooksPage(props) {
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
  return (
    <div>
      <h1>There are {books.length} books.</h1>
      
    </div>
  );
}

export default BooksPage;