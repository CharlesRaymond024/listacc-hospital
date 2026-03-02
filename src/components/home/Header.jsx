import { NavLink } from "react-router-dom";
import logo from "../../assets/images/hospital-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-blue-400 text-white shadow-md z-50">
      <div className="flex justify-between items-center h-full px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Hospital Logo"
            className="h-12 w-auto object-contain"
          />
          <h1 className="text-xl font-semibold text-white font-family-Sans-serif uppercase">
            BloodLust
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>

          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>

          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
