import axios from "axios";
import { LOGIN_URL, USERS_URL } from "./urls";
import { useState,useEffect } from "react";
import { useAuth } from "../components/Auth";
// url, body
export const login = (username, password) => 
    axios.post(LOGIN_URL, { 
        email: username, 
        password: password 
    });

export const createAccount = (username, password) =>
    axios.post(USERS_URL, { 
        email: username, 
        password: password 
    });