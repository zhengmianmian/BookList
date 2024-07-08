import axios from "axios";
import { useAuth } from "./Auth";
import { useEffect, useState } from "react";
import { USERS_URL } from "../api/urls";

function ShareBoard(props) {
  const { user, token } = useAuth()
  const [friends, setFriends] = useState([])

  const getFriends = async () => {
    await axios.get(USERS_URL, {
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((res) => {
      const updatedFriends = res.data.map(u => {
        if(u.id !== user._id){
          return u
        }
      })
      setFriends(updatedFriends);
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getFriends()
  }, [])

  return (
    <div className="w-full h-dvh flex flex-row">
      <div className="w-1/4 bg-red-100"></div>
      <div className="w-3/4 bg-red-300"></div>
    </div>
  );
}

export default ShareBoard;