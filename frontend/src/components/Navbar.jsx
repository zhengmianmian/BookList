
function Navbar() {
  const unitStyle = "p-4 hover:bg-stone-700 hover:text-sky-400 transition duration-300 hover:cursor-pointer"
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-sky-400 bg-border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0">
          <div className={unitStyle}>Booklist</div>
          <div className="flex">
            <div className={unitStyle}>Sign in</div>
            <div className={unitStyle}>Sign up</div>
          </div>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;