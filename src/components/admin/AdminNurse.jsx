import { useFetch } from "../../hooks/useFetch";
import { useContext, useState } from "react";
import AuthContext from "../../providers/AuthProvider";
import LoaddingGif from "../../assets/spinner.gif";
import { useNavigate } from "react-router-dom";

const AdminNurse = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const url = `/nurse?page=${page}&limit=${limit}`;

  const { data, loading, error } = useFetch(url, auth?.accessToken);
  console.log(data);

  const handleNurseDetails = (id) => {
    navigate(`/admin/nurses/${id}`);
  };

  const handleNextPage = () => {
    if (data) {
      if (data.totalPage === data.page) {
        return;
      } else {
        setPage(() => page + 1);
      }
    }
    return;
  };
  const handlePreviousPage = () => {
    if (data) {
      if (data.page <= 1) {
        return;
      } else {
        setPage(() => page - 1);
      }
    }
    return;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Admin Nurse Management
      </h1>

      <div className="bg-white shadow-md rounded-xl p-6">
        {/* Error */}
        {error && (
          <p className="text-red-500 font-medium mb-4">Error Loading Nurses</p>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-10">
            <img src={LoaddingGif} alt="Loading..." className="w-16 h-16" />
          </div>
        )}

        <div className="mb-6">
          <button
            onClick={() => navigate("/admin/nurse/create")}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium"
          >
            Add Nurse
          </button>
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
                  <th className="p-3">Station</th>
                  <th className="p-3">Phone No.</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {data?.nurses?.map((nurse, index) => (
                  <tr
                    key={nurse._id || index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{nurse.firstname}</td>
                    <td className="p-3">{nurse.lastname}</td>
                    <td className="p-3">{nurse.station}</td>
                    <td className="p-3">{nurse.phone}</td>
                    <td className="p-3">{nurse.type}</td>

                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() => handleNurseDetails(nurse._id)}
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
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handlePreviousPage}
                className="px-4 py-2 rounded bg-gray-700 text-white text-sm hover:bg-gray-800 transition"
              >
                Previous
              </button>

              <button
                onClick={handleNextPage}
                className="px-4 py-2 rounded bg-blue-500 text-white text-sm hover:bg-blue-600 transition"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNurse;
