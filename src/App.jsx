import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Signup from "./components/Auth/SignUp";
import Signin from "./components/Auth/SignIn";
import Navbar from "./components/Navbar";
import Dashboard from "./components/pages/Dashboard";
import VerifyOtp from "./components/Auth/VerifyOtp";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
      </Routes>
    </Router>
  );
};

export default App;
