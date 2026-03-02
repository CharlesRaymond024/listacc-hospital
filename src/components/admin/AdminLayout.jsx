import { Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../providers/AuthProvider";
import { NavLink } from "react-router-dom";

const AdminDashboardLayout = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth);
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-linear-to-r from-blue-700 to-blue-600 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left Side - Title */}
          <h1 className="text-2xl font-bold tracking-wide">
            Hospital Admin Dashboard
          </h1>

          {/* Right Side - User Section */}
          <div className="flex items-center gap-4">
            {/* Username */}
            <span className="hidden sm:block text-sm font-medium opacity-90">
              {auth?.user?.firstname}
            </span>

            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center font-bold shadow-md cursor-pointer hover:scale-105 transition-transform duration-200">
              {auth?.user?.firstname?.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      </header>

      {/* Body Section */}
      {/* Body Section */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside className="w-64 bg-black shadow-lg">
          <ul className="flex flex-col p-6 gap-6 font-medium text-gray-700">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `cursor-pointer hover:bg-blue-500 hover:text-white rounded px-4 py-3 transition duration-500 ${isActive ? "text-blue-600 font-semibold" : ""}`
              }
            >
              <li>Overview</li>
            </NavLink>

            <NavLink
              to="/admin/patients"
              className={({ isActive }) =>
                `cursor-pointer hover:bg-blue-500 hover:text-white rounded px-4 py-3 transition duration-500 ${isActive ? "text-blue-600 font-semibold" : ""}`
              }
            >
              <li>Patients</li>
            </NavLink>

            <NavLink
              to="/admin/appointments"
              className={({ isActive }) =>
                `cursor-pointer hover:bg-blue-500 hover:text-white rounded px-4 py-3 transition duration-500 ${isActive ? "text-blue-600 font-semibold" : ""}`
              }
            >
              <li>Appointments</li>
            </NavLink>

            <NavLink
              to="/admin/doctors"
              className={({ isActive }) =>
                `cursor-pointer hover:bg-blue-500 hover:text-white rounded px-4 py-3 transition duration-500 ${isActive ? "text-blue-600 font-semibold" : ""}`
              }
            >
              <li>Doctors</li>
            </NavLink>

            <NavLink
              to="/admin/nurses"
              className={({ isActive }) =>
                `cursor-pointer hover:bg-blue-500 hover:text-white rounded px-4 py-3 transition duration-500 ${isActive ? "text-blue-600 font-semibold" : ""}`
              }
            >
              <li>Nurses</li>
            </NavLink>
          </ul>
        </aside>

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          <div className="p-6 flex-1">
            <Outlet />
          </div>

          {/* Footer */}
          <footer className="bg-white shadow-inner text-center p-4">
            <p className="text-sm text-gray-500">
              © 2026 Hospital Management System
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboardLayout;
