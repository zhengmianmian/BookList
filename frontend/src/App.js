import Navbar from "./components/Navbar";
import BooksPage from "./pages/BooksPage";
import { Routes, Route, Navigate} from "react-router-dom";
import {RequiresAuth, RequiresNonAuth} from "../src/components/Auth.jsx"
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route 
          path='/'
          element={<Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={
            <RequiresNonAuth>
              <LoginPage />
            </RequiresNonAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <RequiresNonAuth>
              <SignupPage/>
            </RequiresNonAuth>
          }
        />
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
