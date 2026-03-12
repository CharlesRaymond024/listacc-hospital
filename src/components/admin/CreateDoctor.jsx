import useAuth from "../../hooks/useAuth";
import usePost from "../../hooks/usePost";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";

const CreateDoctors = () => {
  const url = "/doctor";
  const { auth } = useAuth();
  const { data, error, loading, postData } = usePost(url, auth?.accessToken);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleCreateDoctor = (data) => {
    postData(data);
    console.log(data);

    if (data) {
      toast.success("Doctor created successfully");
      reset();
    }

    if (error) {
      toast.error("Error creating doctor");
    }
  };

  console.log(data);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ToastContainer />
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Create Doctor
        </h2>

        <form
          onSubmit={handleSubmit(handleCreateDoctor)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* First Name */}
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              {...register("firstname", { required: true })}
              placeholder="Enter firstname"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm mt-1">
                First name is required
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              {...register("lastname", { required: true })}
              placeholder="Enter lastname"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm mt-1">Last name is required</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              {...register("phone", { required: true })}
              placeholder="Enter phone"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">Phone is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              {...register("email", { required: true })}
              placeholder="Enter email"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                Email is required
              </span>
            )}
          </div>
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              {...register("password", { required: true})}
              placeholder="Enter password"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.password && errors.password.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Password is required</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              id="status"
              defaultValue="Active"
              {...register("status", { required: true })}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm mt-1">Status is required</p>
            )}
          </div>

          {/* Specialization */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Specialization
            </label>
            <select
              name="specialization"
              id="specialization"
              {...register("specialization", { required: true })}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Specialization</option>
              <option value="ENT">ENT</option>
              <option value="General Doctor">General Doctor</option>
              <option value="Cardiology">Cardiology</option>
              <option value="O and G">O and G</option>
              <option value="Ophtamology">Ophtamology</option>
            </select>

            {errors.specialization && (
              <p className="text-red-500 text-sm mt-1">
                Specialization is required
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              {loading ? "Creating..." : "Create Doctor"}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-4">
        <button
          onClick={() => navigate("/admin/doctors")}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md shadow-md transition duration-200"
        >
          <FaArrowLeft />
          Back to Doctors
        </button>
      </div>
    </div>
  );
};

export default CreateDoctors;
