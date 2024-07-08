import axios from "axios";
import { useAuth } from "./Auth";
import { useEffect, useState } from "react";
import { BOOKS_URL, USERS_URL } from "../api/urls";
import FavoriteIcon from '@mui/icons-material/Favorite';

function ShareBoard(props) {
  const { user, token } = useAuth()
  const [friends, setFriends] = useState([])
  const [books, setBooks] = useState([])
  const [seeWho, setSeeWho] = useState('')

  const getFriends = async () => {
    await axios.get(USERS_URL, {
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((res) => {
      setFriends(res.data.filter(f => f.id !== user._id));
      setSeeWho(res.data[0].id)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const getBooks = async (id) => {
    await axios.get(`${BOOKS_URL}/like/${id}`, {
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

  useEffect(()=>{
    getFriends()
  }, [])

  useEffect(()=>{
    if(seeWho !== null && seeWho.length === 24){
      getBooks(seeWho)
    }
  }, [seeWho])

  const friendsList = friends.map(friend => (
    <div 
      key={friend.id} 
      className="m-2 text-xl underline hover:no-underline hover:cursor-pointer" 
      onClick={() => setSeeWho(friend.id)}
    >
      {friend.email}
    </div>
  ))

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
          <FavoriteIcon style={{color:'red'}} />
        </div>
      </div>
    )
  };
  const booklist = books.map(book => bookItem(book));

  return (
    <div className="mx-auto w-4/5 h-dvh flex flex-row">
      <div className="w-1/4 p-6 border-r-2 flex flex-col items-center">
        {friendsList}
      </div>
      <div className="w-3/4">
        {books.length > 0? <div className="w-1/3 mx-auto my-4 flex flex-col justify-center">
          { booklist }
        </div>: <div className="mt-4 text-center text-xl">This user likes no book.</div> }
        
      </div>
    </div>
  );
}

export default ShareBoard;