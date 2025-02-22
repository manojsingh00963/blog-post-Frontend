import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import BlogerProfile from "./components/BlogerProfile";
import VerifyOtp from "./components/VerifyOtp";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/signin" element={<Signup />} />
        <Route path="/profile" element={<BlogerProfile />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
      </Routes>
    </Router>
  );
};

export default App;
