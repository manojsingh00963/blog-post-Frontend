import { useState } from "react";
import axios from "axios";

const BlogForm = ({ fetchBlogs }) => {
  const [blog, setBlog] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/blogs", blog);
    fetchBlogs();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input type="text" name="title" placeholder="Title" className="border p-2" onChange={handleChange} required />
      <textarea name="content" placeholder="Content" className="border p-2" onChange={handleChange} required />
      <button type="submit" className="bg-green-500 text-white p-2">Create Blog</button>
    </form>
  );
};

export default BlogForm;
