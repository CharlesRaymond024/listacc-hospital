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
import AdminPatientDetails from "./components/admin/AdminPatientDetails";
import AdminDoctorDetails from "./components/admin/AdminDoctorDetails";
import AdminAppointment from "./components/admin/AdminAppointment";
import AdminNurse from "./components/admin/AdminNurse";
import AdminNurseDetails from "./components/admin/AdminNurseDetails";
import AdminAppointmentDetails from "./components/admin/AdminAppointmentDetails";
import CreatePatient from "./components/admin/CreatePatient";

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
          <Route path="/admin/appointments" element={<AdminAppointment />} />
          <Route path="/admin/nurses" element={<AdminNurse />} />
          <Route path="/admin/patients/:id" element={<AdminPatientDetails />} />
          <Route path="/admin/doctors/:id" element={<AdminDoctorDetails />} />
          <Route path="/admin/appointments/:id" element={<AdminAppointmentDetails />} />
          <Route path="/admin/nurses/:id" element={<AdminNurseDetails />} />
          <Route path="/admin/patient/create" element={<CreatePatient />} />
        </Route>
      </Route>

      {/* Static pages */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
