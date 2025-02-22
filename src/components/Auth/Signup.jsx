import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", contact: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert("OTP sent to your email");
      navigate("/verify-otp", { state: { email: formData.email } }); // Pass email to VerifyOtp component
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold">Sign Up</h2>
      <form onSubmit={handleSignup} className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Name" className="border p-2" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="border p-2" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="border p-2" onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Contact" className="border p-2" onChange={handleChange} required />
        <button type="submit" className="bg-blue-500 text-white hover:cursor-pointer p-2">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
