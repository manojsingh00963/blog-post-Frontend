import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // Initialize navigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signin", formData);
      localStorage.setItem("token", res.data.token);
      alert(res.data.message || "Login Successful");
      navigate("/profile"); 
    } catch (error) {
      alert("Error: " + (error.response?.data?.error || "Invalid credentials"));
      navigate("/signup"); 
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold">Sign In</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" name="email" placeholder="Email" className="border p-2" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="border p-2" onChange={handleChange} required />
        <button type="submit" className="bg-blue-500 text-white p-2">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
