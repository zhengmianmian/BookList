import Navbar from "./components/Navbar";
import BooksPage from "./pages/BooksPage";
import { Routes, Route} from "react-router-dom";
import {RequiresAuth, RequiresNonAuth} from "../src/components/Auth.jsx"
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx"
import HomeLayout from "./components/HomeLayout.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route 
          path='/'
          element={
            <RequiresNonAuth>
              <HomeLayout/>
            </RequiresNonAuth>
          }
        >
          <Route index element={<LoginPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="signup" element={<SignupPage/>} />
        </Route>
        
        <Route
          path="/books"
          element={
            <RequiresAuth>
              <BooksPage/>
            </RequiresAuth>
          }
        />
      </Routes>
      
    </>
  );
}

export default App;
