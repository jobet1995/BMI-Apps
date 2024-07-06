import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          BMI Calculator App
        </Link>
        <div className="flex space-x-4">
          <NavLink to="/">Home</NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
    >
      {children}
    </Link>
  );
}

export default Navbar;
