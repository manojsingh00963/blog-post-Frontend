import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Authentication System</h1>
      <p className="text-lg mb-6">Secure authentication with OTP verification and CRUD features.</p>
      <div className="space-x-4">
        <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</Link>
        <Link to="/signin" className="bg-green-500 text-white px-4 py-2 rounded">Sign In</Link>
      </div>
    </div>
  );
};

export default Home;
