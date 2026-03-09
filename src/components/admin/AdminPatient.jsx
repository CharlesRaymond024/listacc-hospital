import { useFetch } from "../../hooks/useFetch";
import { useContext } from "react";
import AuthContext from "../../providers/AuthProvider";
import LoaddingGif from "../../assets/spinner.gif";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const AdminPatient = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const url = "/patient";
  const { data, loading, error } = useFetch(url, auth?.accessToken);
  console.log(data);

  const handlePatientDetails = (id) => {
    navigate(`/admin/patients/${id}`);
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Admin Patient Management
      </h1>

      <div className="bg-white shadow-md rounded-xl p-6">
        {/* Error */}
        {error && (
          <p className="text-red-500 font-medium mb-4">
            Error Loading Patients
          </p>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-10">
            <img src={LoaddingGif} alt="Loading..." className="w-16 h-16" />
          </div>
        )}

        <div className="flex justify-start">
          <NavLink
            to="/admin/patient/create"
            className="bg-green-500 hover:bg-blue-600 hover:text-white text-white text-sm px-4 py-2 rounded mb-4 transition duration-500"
          >
            Create New Patient
          </NavLink>
        </div>

        {/* Table */}
        {data && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100 text-left">
                <tr className="text-gray-600 text-sm uppercase">
                  <th className="p-3">S/N</th>
                  <th className="p-3">First Name</th>
                  <th className="p-3">Last Name</th>
                  <th className="p-3">Phone No.</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {data?.patients.map((patient, index) => (
                  <tr
                    key={patient._id || index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{patient.firstname}</td>
                    <td className="p-3">{patient.lastname}</td>
                    <td className="p-3">{patient.phone}</td>

                    <td className="p-3">
                      <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
                        {patient.status}
                      </span>
                    </td>

                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() => handlePatientDetails(patient._id)}
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

export default AdminPatient;
