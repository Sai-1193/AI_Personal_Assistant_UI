// src/components/NavBar.tsx
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-semibold">Job Finder</Link>
      <div>
        <Link to="/" className="mx-4 hover:text-blue-300">Dashboard</Link>
        <Link to="/job-hunting-form" className="mx-4 hover:text-blue-300">Job Hunting</Link>
      </div>
    </nav>
  );
};

export default NavBar;
