import useAuth from "../../hooks/useAuth";
import usePost from "../../hooks/usePost";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";

const CreatePatient = () => {
  const url = "/patient";
  const { auth } = useAuth();
  const { data, error, loading, postData } = usePost(url, auth?.accessToken);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleCreatePatient = (data) => {
    postData(data);
    console.log(data);
    if (data) {
      toast.success("Patient created successfully");
      reset();
    }
    if (error) {
      toast.error("Error creating patient");
    }
  };
  console.log(data);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ToastContainer />
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Create Patient
        </h2>

        <form
          onSubmit={handleSubmit(handleCreatePatient)}
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
              required=""
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm mt-1">
                {""}
                First name is required {""}
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
              required=""
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm mt-1">
                {""}
                Last name is required{""}
              </p>
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
              required=""
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {""}
                {errors.phone.message}
              </p>
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
              required=""
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {""}
                Email is required{""}
              </span>
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
              {...register("status", { required: true })}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Admitted</option>
              <option>Consultation</option>
              <option>Check-Up</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm mt-1">
                {""}
                Status is required{""}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              id="gender"
              {...register("gender", { required: true })}
              defaultValue={"default"}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option disabled value="default">
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">
                {""}
                {errors.gender?.message} {""}
              </p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              {...register("dateOfBirth", { required: true })}
              placeholder="Enter date of birth"
              required=""
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.dateOfBirth && (
              <p className="text-red-500 text-sm mt-1">
                {""}
                Date of birth is required{""}
              </p>
            )}
          </div>

          {/* Patient Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Patient Number
            </label>
            <input
              type="text"
              name="patientNumber"
              id="patientNumber"
              {...register("patientNumber", { required: true })}
              placeholder="Enter patientNumber"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.patientNumber && (
              <p className="text-red-500 text-sm mt-1">
                {""}
                Patient number is required{""}
              </p>
            )}
          </div>

          {/* Genotype */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Genotype
            </label>
            <select
              name="genotype"
              id="genotype"
              {...register("genotype", { required: true })}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Genotype</option>
              <option>AA</option>
              <option>AS</option>
              <option>SS</option>
              <option>AC</option>
            </select>
            {errors.genotype && (
              <p className="text-red-500 text-sm mt-1">
                {""}
                Genotype is required{""}
              </p>
            )}
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blood Group
            </label>
            <select
              name="bloodGroup"
              id="bloodGroup"
              {...register("bloodGroup", { required: true })}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
            {errors.bloodGroup && (
              <p className="text-red-500 text-sm mt-1">
                {""}
                Blood Group is required{""}
              </p>
            )}
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Height (cm)
            </label>
            <input
              type="number"
              name="height"
              id="height"
              {...register("height", { required: true })}
              placeholder="Enter height"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.height && (
              <p className="text-red-500 text-sm mt-1">
                {""}
                Height is required{""}
              </p>
            )}
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Weight (kg)
            </label>
            <input
              type="number"
              name="weight"
              id="weight"
              {...register("weight", { required: true })}
              placeholder="Enter weight"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.weight && (
              <p className="text-red-500 text-sm mt-1">
                {""}
                Weight is required{""}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              rows="3"
              name="address"
              id="address"
              {...register("address", { required: true })}
              placeholder="Enter address"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {""}
                Address is required{""}
              </p>
            )}
          </div>

          {/* Medical History */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Medical History
            </label>
            <textarea
              rows="3"
              name="medicalHistory"
              id="medicalHistory"
              {...register("medicalHistory", { required: true })}
              placeholder="Enter medical history"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>

            {errors.medicalHistory && (
              <p className="text-red-500 text-sm mt-1">
                {""}
                Medical history is required{""}
              </p>
            )}
          </div>

          {/* Emergency Contact */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Emergency Contact
            </label>
            <textarea
              rows="3"
              name="emergencyContact"
              id="emergencyContact"
              {...register("emergencyContact", { required: true })}
              placeholder="Enter emergency contact details"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            {errors.emergencyContact && (
              <p className="text-red-500 text-sm mt-1">
                {""}
                Emergency contact details are required{""}
              </p>
            )}
          </div>
          {/* Allergies */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Allergies
            </label>
            <textarea
              rows="3"
              name="allergies"
              id="allergies"
              {...register("allergies", { required: true })}
              placeholder="Enter allergies"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            {errors.allergies && (
              <p className="text-red-500 text-sm mt-1">
                {""}
                Allergies information is required{""}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              {loading ? "Creating..." : "Create Patient"}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-4">
        <button
          onClick={() => navigate("/admin/patient")}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md shadow-md transition duration-200"
        >
          <FaArrowLeft />
          Back to Patients
        </button>
      </div>
    </div>
  );
};

export default CreatePatient;
