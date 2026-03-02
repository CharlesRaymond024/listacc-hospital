import { Link } from "react-router-dom"; // <-- import Link
import logo from "../../assets/images/hospital-logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* ===== Hospital Info ===== */}
        <div>
          <img src={logo} alt="Hospital Logo" className="w-16 mb-4" />
          <p className="text-sm leading-6">
            Providing world-class healthcare services with modern medical
            facilities and experienced professionals dedicated to saving lives.
          </p>
        </div>

        {/* ===== Quick Links ===== */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-400">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== Services ===== */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>Emergency Care</li>
            <li>Laboratory Services</li>
            <li>Cardiology</li>
            <li>Radiology</li>
            <li>Pharmacy</li>
          </ul>
        </div>

        {/* ===== Contact ===== */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt /> Lagos, Nigeria
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt /> +234 800 000 0000
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope /> info@bloodlusthospital.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* ===== Bottom Footer ===== */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Bloodlust Hospital. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
