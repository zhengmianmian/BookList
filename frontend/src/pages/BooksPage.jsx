import { useState, useEffect } from "react"
import axios from "axios"
import {useAuth} from '../components/Auth'
import {BOOKS_URL} from '../api/urls.js'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function BooksPage() {
  const { token, user } = useAuth()
  const [books, setBooks] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('')
  const [author, setAuthor] = useState('')
  const [display, setDisplay] = useState(false)

  const inputStyle = "my-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
  const getBooks = async () => {
    await axios.get(`${BOOKS_URL}/mine/${user._id}`, {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then(res => {
      setBooks(res.data)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  const clearForm = () => {
    setName('')
    setPrice(0)
    setCategory('')
    setAuthor('')
  }

  const handleAdd = async () =>{
    await axios.post(BOOKS_URL, {
      BookName: name,
      Price: price,
      Category: category,
      Author: author,
      Owner: user._id
    }, {
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(()=>{
      clearForm()
      setDisplay(false)
      getBooks()
    }).catch(error => {
      console.error('Error:', error);
    });
  }
  const clkLike = async (book)=>{
    await axios.put(`${BOOKS_URL}/${book.id}`, {
      BookName: book.bookName,
      Price: book.price,
      Category: book.category,
      Author: book.author,
      Like: !book.like,
      Owner: user._id
    }, {
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(()=>{
      getBooks()
    }).catch(error => {
      console.error('Like a book Error:', error);
    });
  }

  useEffect(() => {
    getBooks()
  }, [])
  const deleteBook = async (id)=>{
    await axios.delete(`${BOOKS_URL}/${id}`,{ 
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(()=>{
      getBooks()
    }).catch((err)=>{
      console.log(err)
    })
  }
  const bookItem = (book) => {
    return (
      <div key={book.id} className="m-2 p-4 bg-sky-500 rounded flex flex-row">
        <div className="w-3/4">
          <div>Name: {book.bookName}</div>
          <div>Price: {book.price}</div>
          <div>Category: {book.category}</div>
          <div>Author: {book.author}</div>
        </div>
        <div className="w-1/4 flex flex-col items-center justify-center">
          <div className="hover:cursor-pointer" onClick={()=>{ clkLike(book) }}>
            {book.like? <FavoriteIcon style={{color:'red'}} /> : <FavoriteBorderIcon /> }
          </div>
          <div className="mt-2 underline hover:no-underline hover:cursor-pointer" onClick={()=>deleteBook(book.id)}>DELETE</div>
        </div>
      </div>
    )
  };
  const booklist = books.map(book => bookItem(book));
  return (
    <div>
      <div className="p-2 text-center text-4xl">You have {books.length} books.</div>
      <div className="w-1/4 mx-auto text-xl underline hover:no-underline hover:cursor-pointer" onClick={()=>setDisplay(true)}>Add NEW BOOK?</div>
      {display && (<div className="w-1/4 mx-auto my-2 p-2">
        <div>book name: </div>
        <input
            type="text"
            placeholder="Enter book name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputStyle}
          />

        <div>price: </div>
        <input
            type="text"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={inputStyle}
          />

        <div>category: </div>
        <input
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={inputStyle}
          />

        <div>author: </div>
        <input
            type="text"
            placeholder="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className={inputStyle}
          />
          <div className="p-2 flex flex-row items-right">
            <div className="m-2 underline hover:no-underline hover:cursor-pointer" onClick={handleAdd}>ADD</div>
            <div className="m-2 underline hover:no-underline hover:cursor-pointer" onClick={()=>setDisplay(false)}>CLOSE</div>
        </div>
      </div>)}

      {books.length>0 && (<div className="w-1/3 mx-auto my-4 flex flex-col justify-center">
        {booklist}
      </div>)}
    </div>
  );
}

export default BooksPage;