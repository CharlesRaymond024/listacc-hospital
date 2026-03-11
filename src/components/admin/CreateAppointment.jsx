import useAuth from "../../hooks/useAuth";
import usePost from "../../hooks/usePost";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";
import { useFetch } from "../../hooks/useFetch";

const CreateAppointment = () => {
  const url = "/appointment";
  const { auth } = useAuth();
  const { data, error, loading, postData } = usePost(url, auth?.accessToken);

  // Fetch doctors and patients to populate dropdowns
  const { data: doctorsData } = useFetch("/doctor", auth?.accessToken);
  const { data: patientsData } = useFetch("/patient", auth?.accessToken);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleCreateAppointment = (formData) => {
    console.log("Submitting appointment:", formData);
    postData(formData);

    if (data) {
      toast.success("Appointment created successfully");
      reset();
    }
    if (error) {
      toast.error("Error creating appointment");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ToastContainer />
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Create Appointment
        </h2>

        <form
          onSubmit={handleSubmit(handleCreateAppointment)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Reason */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason
            </label>
            <textarea
              rows="3"
              name="Reason"
              id="Reason"
              {...register("Reason", { required: true })}
              placeholder="Enter reason for appointment"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            {errors.Reason && (
              <p className="text-red-500 text-sm mt-1">Reason is required</p>
            )}
          </div>

          {/* Doctor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Doctor
            </label>
            <select
              name="DoctorID"
              id="DoctorID"
              {...register("DoctorID", { required: true })}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Doctor</option>
              {doctorsData?.doctors?.map((doctor) => (
                <option key={doctor._id} value={doctor._id}>
                  {doctor.firstname} {doctor.lastname}
                </option>
              ))}
            </select>
            {errors.DoctorID && (
              <p className="text-red-500 text-sm mt-1">Doctor is required</p>
            )}
          </div>

          {/* Patient */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Patient
            </label>
            <select
              name="patientID"
              id="patientID"
              {...register("patientID", { required: true })}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Patient</option>
              {patientsData?.patients?.map((patient) => (
                <option key={patient._id} value={patient._id}>
                  {patient.firstname} {patient.lastname}
                </option>
              ))}
            </select>
            {errors.patientID && (
              <p className="text-red-500 text-sm mt-1">Patient is required</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              {loading ? "Creating..." : "Create Appointment"}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-4">
        <button
          onClick={() => navigate("/admin/appointments")}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md shadow-md transition duration-200"
        >
          <FaArrowLeft />
          Back to Appointments
        </button>
      </div>
    </div>
  );
};

export default CreateAppointment;
