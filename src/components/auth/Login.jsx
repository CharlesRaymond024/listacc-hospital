import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { ToastContainer, toast } from "react-toastify";
import AuthContext from "../../providers/AuthProvider";
import loginImage from "../../assets/images/loginpic.jpg";

const Login = () => {
  const {setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await api.post("/login", data);
      setAuth(res.data);

      const { role } = res.data;

      switch (role) {
        case "Admin":
          navigate("/admin");
          break;
        case "Doctor":
          navigate("/doctor");
          break;
        case "Nurse":
          navigate("/nurse");
          break;
        default:
          navigate("unauthorized");
      }
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Invalid email or password");
          break;
        case 401:
          toast.error("Unauthorized access");
          break;
        default:
          toast.error("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <ToastContainer />

      {/* ========= LEFT IMAGE ========= */}
      <div className="hidden lg:block w-1/2 relative">
        <img
          src={loginImage}
          alt="Login"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center px-10 leading-relaxed">
            Secure Hospital <br /> Management Portal
          </h1>
        </div>
      </div>

      {/* ========= LOGIN FORM ========= */}
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-gray-100">
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-[90%] max-w-md transition duration-300 hover:shadow-blue-200">
          <h2 className="text-3xl font-bold text-center mb-2 text-blue-600 uppercase">
            Login
          </h2>

          <p className="text-center text-gray-500 mb-8">
            Access your dashboard
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* EMAIL */}
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                required
                value={data.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                                focus:outline-none focus:ring-2 focus:ring-blue-500
                                transition"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                required
                value={data.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                                focus:outline-none focus:ring-2 focus:ring-blue-500
                                transition"
              />
            </div>

            {/* BUTTON */}
            <button
              className="w-full p-3 bg-blue-600 text-white rounded-lg
                            hover:bg-blue-700 transition duration-300
                            active:scale-95 disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
