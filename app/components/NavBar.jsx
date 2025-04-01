import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold font-[Italiana]">
          Whereas disregard
        </h1>
        
        <h1 className="font-heading text-3xl">No More Serifs!</h1> {/* Use the custom font-heading class */}
        {/* Nav Links */}
        <ul className="flex space-x-6">
          <li><a href="#home" className="font-roboto hover:text-[#C9B194]">Really big ass sentence so that I can see if the font changed?</a></li>
          <li><a href="#about" className="hover:text-[#C9B194]" style={{ fontFamily: "Roboto, sans-serif" }}>About</a></li>
          <li><a href="#blog" className="hover:text-[#C9B194]">Blog</a></li>
          <li><a href="#contact" className="hover:text-[#C9B194]">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
