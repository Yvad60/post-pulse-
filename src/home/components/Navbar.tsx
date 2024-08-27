import { Link } from "react-router-dom";

const navLinks = ["Home", "About", "Contact"];

const NavBar = () => {
  return (
    <header className="shadow sticky top-0 z-[100] bg-white py-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center">
          <span className="text-xl italic font-extrabold">Post Pulse</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <div>
            <ul className="flex gap-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <Link to="">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="px-4 py-1 border border-black rounded-sm">
              Login
            </Link>
            <Link to="/signup" className="px-4 py-1 text-white bg-black rounded-sm">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
