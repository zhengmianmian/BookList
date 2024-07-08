import { Link, Outlet } from "react-router-dom";

function HomeLayout(props) {

  return (
    <div className="mx-auto mt-8 h-96 w-4/5 flex flex-row justify-center items-center">
      <div className="m-4 py-8 border-r-2 w-1/2 h-full">
        <div className="m-2 text-4xl">You clean booklist.</div>
        <div>Add books to you booklist now!</div>
      </div>
      <div className="m-4 w-1/2 h-full flex flex-col justify-center items-center">
        <Outlet/>
      </div>
      
    </div>
  );
}

export default HomeLayout;