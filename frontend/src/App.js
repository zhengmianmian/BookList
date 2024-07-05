import Navbar from "./components/Navbar";
import BooksPage from "./pages/BooksPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <h1 className="bg-red-200">
        Hello world!
      </h1>
      <BooksPage/>
    </div>
  );
}

export default App;
