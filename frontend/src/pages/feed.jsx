
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Feed = () => {
   const navigate = useNavigate();

  const handelsubmit = async (e) => {
    e.preventDefault();
   

    const formData = new FormData(e.target);

    try {
      const res = await axios.post(
        "http://localhost:3000/create-post",
        formData
      );
        navigate("/Feed");

      console.log(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded-lg shadow-md w-96">

        <h1 className="text-2xl font-bold mb-5 text-center">
          Create Post
        </h1>

        <form
          onSubmit={handelsubmit}
          className="space-y-4"
        >

          {/* Image Upload */}
          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full border p-2 rounded"
          />

          {/* Caption */}
          <input
            type="text"
            name="caption"
            placeholder="Write a caption..."
            className="w-full border p-2 rounded"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>

        </form>

      </div>
    </div>
  );
};

export default Feed;

