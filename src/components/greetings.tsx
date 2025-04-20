import React from "react";

const Greetings = ({ user = "Shek Saheb" }: { user: string }) => {
  return (
    <div className="p-6 bg-green-500 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold">
        Welcome, <span className="text-black">{user}</span>
      </h1>
      <p className="mt-2 text-sm">
        Access and manage your transactions efficiently.
      </p>
    </div>
  );
};

export default Greetings;
