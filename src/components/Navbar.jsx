import { useState, useRef, useEffect } from 'react';

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Experience", // ✅ Added here
  "Projects",
  "Education",
  "Certificates",
  "Contact"
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-slate-800 fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-400">Ibad Ali</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-200 hover:text-indigo-400 capitalize"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Hamburger icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div ref={menuRef} className="md:hidden px-4 pb-4 bg-slate-800">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-gray-200 hover:text-indigo-400 capitalize"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
