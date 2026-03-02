import { useFetch } from "../../hooks/useFetch";
import { useContext } from "react";
import AuthContext from "../../providers/AuthProvider";
import LoaddingGif from "../../assets/spinner.gif";

const AdminDoctor = () => {
  const { auth } = useContext(AuthContext);
  const url = "/doctor";
  const { data, loading, error } = useFetch(url, auth?.accessToken);

  console.log(data);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Admin Doctor Management
      </h1>

      <div className="bg-white shadow-md rounded-xl p-6">
        {/* Error */}
        {error && (
          <p className="text-red-500 font-medium mb-4">Error Loading Doctors</p>
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
                  <th className="p-3">First Name</th>
                  <th className="p-3">Last Name</th>
                  <th className="p-3">Specialization</th>
                  <th className="p-3">Phone No.</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {data?.doctors.map((doctor, index) => (
                  <tr
                    key={doctor._id || index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{doctor.firstname}</td>
                    <td className="p-3">{doctor.lastname}</td>
                    <td className="p-3">{doctor.specialization}</td>
                    <td className="p-3">{doctor.phone}</td>

                    <td className="p-3">
                      <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
                        {doctor.status}
                      </span>
                    </td>

                    <td className="p-3 flex gap-2">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded">
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

export default AdminDoctor;
