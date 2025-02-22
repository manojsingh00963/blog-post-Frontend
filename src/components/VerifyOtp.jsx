import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email; // Get email from state

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/verify-otp", { email, otp });
      alert("Account verified successfully!");
      navigate("/signin"); // Redirect to Sign-in page
      setTimeout(() => {
        alert("Thank you! Now you can sign in and use your blog.");
      }, 1000);
    } catch (error) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold">Verify OTP</h2>
      <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">
        <input type="text" name="otp" placeholder="Enter OTP" className="border p-2" onChange={(e) => setOtp(e.target.value)} required />
        <button type="submit" className="bg-green-500 text-white p-2">Verify OTP</button>
      </form>
    </div>
  );
};

export default VerifyOtp;
