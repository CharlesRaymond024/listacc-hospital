import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Layout from "./components/home/Layout";
import Login from "./components/auth/Login";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminDashboardLayout from "./components/admin/AdminLayout";
import About from "./components/pages/AboutUs";
import Services from "./components/pages/Services";
import "react-toastify/dist/ReactToastify.css";
import Page404 from "./components/auth/Page404";
import RequireAuth from "./components/auth/RequireAuth";
import AdminPatient from "./components/admin/AdminPatient";
import AdminDoctor from "./components/admin/AdminDoctor";

function App() {
  return (
    <Routes>
      {/* Home routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Route>

      {/* Admin routes */}
      <Route element={<RequireAuth role="Admin" />}>
        <Route path="/admin" element={<AdminDashboardLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="/admin/patients" element={<AdminPatient />} />
          <Route path="/admin/doctors" element={<AdminDoctor />} />
        </Route>
      </Route>

      {/* Static pages */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
