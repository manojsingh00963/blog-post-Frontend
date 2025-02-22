import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex p-50 flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Your Blog Post</h1>
      <p className="text-lg mb-6">Save Your Memories & Enjoy your life.</p>
      <div className="space-x-4">
        <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</Link>
        <Link to="/signin" className="bg-green-500 text-white px-4 py-2 rounded">Sign In</Link>
      </div>
      {/* For Information */}
      <div className=" mt-20 flex flex-col items-center  info p-4 bg-purple-200 rounded-lg shadow-md">
  <h3 className="text-lg font-semibold text-gray-800">Hi there!</h3>
  <p className="text-gray-600 mt-2">
    It will not work because I haven&apos;t used their MongoDB. However, you can 
    click the video below to see how it works.👇
    <br />
    🎥🎞️🎞️🎞️🎞️
    <iframe 
    className="mt-4 border border-gray-400 rounded-lg shadow-lg"
    width="560" height="315" src="https://www.youtube.com/embed/OXk-q67gJJ0?si=b2XHmaphjzndPZpb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    {/* <video 
    src="https://youtu.be/OXk-q67gJJ0" 
    width={550} 
    controls 
  ></video> */}
    
  </p>
</div>

    </div>
  );
};

export default Home;
