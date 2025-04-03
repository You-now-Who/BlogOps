import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold">
          Shem's Blog
        </h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="text-autumn-beige hover:text-[#ead7c0]">About</a></li>
          <li><a href="#blog" className="text-autumn-beige hover:text-[#ead7c0]">Blog</a></li>
          <li><a href="#contact" className="text-autumn-beige hover:text-[#ead7c0]">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
