import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 pl-10 pr-6 flex justify-between ">
      <h1 className="text-xl font-bold">My Blog</h1>
      <div className="space-x-4 flex gap-20">
        <Link to="/" className="hover:text-gray-300 border-b border-t font-bold text-xl ">Home</Link>
        <div className="auth flex gap-2 ">
        <Link to="/signup" className="hover:text-gray-300 border pb-0 pt-0 p-2 rounded-md  ">Sign Up</Link>
        <Link to="/signin" className="hover:text-gray-300 border pb-0 pt-0 p-2 rounded-md ">Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
