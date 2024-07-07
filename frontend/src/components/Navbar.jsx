import { useAuth } from '../components/Auth'
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { isAuthenticated, setToken } = useAuth()
  const unitStyle = "p-4 hover:bg-stone-700 hover:text-sky-400 transition duration-300 hover:cursor-pointer"
  const handleSignout = () => {
    setToken('')
  }

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-sky-400 bg-border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0">
          <div className={unitStyle}>Booklist</div>
          <div className="flex">
            {isAuthenticated?(<><div className={unitStyle} onClick={handleSignout}>Sign out</div></>):(<>
              <div className={unitStyle}><Link to="/login">Sign in</Link></div>
              <div className={unitStyle}><Link to="/signup">Sign up</Link></div>
            </>)}
            
          </div>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;