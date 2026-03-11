import useAuth from "../../hooks/useAuth";
import usePost from "../../hooks/usePost";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";

const CreateNurse = () => {
  const url = "/nurse";
  const { auth } = useAuth();
  const { data, error, loading, postData } = usePost(url, auth?.accessToken);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleCreateNurse = (data) => {
    postData(data);
    console.log(data);

    if (data) {
      toast.success("Nurse created successfully");
      reset();
    }

    if (error) {
      toast.error("Error creating nurse");
    }
  };

  console.log(data);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ToastContainer />
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Create Nurse
        </h2>

        <form
          onSubmit={handleSubmit(handleCreateNurse)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
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
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
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
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm mt-1">Last name is required</p>
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
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
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
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">Phone is required</p>
            )}
          </div>

          {/* Station */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Station
            </label>
            <select
              name="station"
              id="station"
              {...register("station", { required: true })}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">Select Station</option>
              <option value="Emergency">Emergency</option>
              <option value="Surgery">Surgery</option>
              <option value="Male Ward">Male Ward</option>
              <option value="Peadiatric Ward">Peadiatric Ward</option>
              <option value="Female Ward">Female Ward</option>
            </select>

            {errors.station && (
              <p className="text-red-500 text-sm mt-1">Station is required</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              {loading ? "Creating..." : "Create Nurse"}
            </button>
          </div>
        </form>
      </div>
      {/* Back Button */}
      <div className="mt-4">
        <button
          onClick={() => navigate("/admin/nurses")}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md shadow-md transition duration-200"
        >
          <FaArrowLeft />
          Back to Nurses
        </button>
      </div>
    </div>
  );
};

export default CreateNurse;
