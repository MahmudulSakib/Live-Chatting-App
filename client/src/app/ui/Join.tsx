"use client";

import { useState } from "react";
import Link from "next/link";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Join a Room
        </h1>

        <div className="mb-4">
          <input
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <input
            placeholder="Room Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>

        <Link
          href={`/chat?name=${name}&room=${room}`}
          onClick={(e) => {
            if (!name || !room) e.preventDefault();
          }}
        >
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
