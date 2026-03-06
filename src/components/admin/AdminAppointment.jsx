import { useFetch } from "../../hooks/useFetch";
import { useContext } from "react";
import AuthContext from "../../providers/AuthProvider";
import LoaddingGif from "../../assets/spinner.gif";
import { useNavigate } from "react-router-dom";

const AdminAppointment = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const url = "/appointment";

  const { data, loading, error } = useFetch(url, auth?.accessToken);
    console.log(data);

  const handleAppointmentDetails = (id) => {
    navigate(`/admin/appointments/${id}`);
  };

  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Admin Appointment Management
      </h1>

      <div className="bg-white shadow-md rounded-xl p-6">
        {/* Error */}
        {error && (
          <p className="text-red-500 font-medium mb-4">
            Error Loading Appointments
          </p>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-10">
            <img src={LoaddingGif} alt="Loading..." className="w-16 h-16" />
          </div>
        )}

        {/* Table */}
        {data && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100 text-left">
                <tr className="text-gray-600 text-sm uppercase">
                  <th className="p-3">S/N</th>
                  <th className="p-3">Patient</th>
                  <th className="p-3">Doctor</th>
                  
                  <th className="p-3">Reason</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {data?.appointments?.map((appointment, index) => (
                  <tr
                    key={appointment._id || index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3">{index + 1}</td>

                    <td className="p-3">
                      {appointment?.patient?.firstname}{" "}
                      {appointment?.patient?.lastname}
                    </td>

                    <td className="p-3">
                      {appointment?.doctor?.firstname}{" "}
                      {appointment?.doctor?.lastname}
                    </td>

                    

                    <td className="p-3">{appointment?.reason}</td>

                    {/* Actions */}
                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() =>
                          handleAppointmentDetails(appointment._id)
                        }
                        className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
                      >
                        View
                      </button>

                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-3 py-1 rounded">
                        Edit
                      </button>

                      <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAppointment;
