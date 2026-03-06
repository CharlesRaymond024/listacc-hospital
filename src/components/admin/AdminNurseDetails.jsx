import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useContext } from "react";
import AuthContext from "../../providers/AuthProvider";

const AdminNurseDetails = () => {
  const { id } = useParams();
  const { auth } = useContext(AuthContext);
  const url = `/nurse/${id}`;

  const { data, loading, error } = useFetch(url, auth?.accessToken);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Nurse Details
      </h1>

      {/* Error */}
      {error && (
        <p className="text-red-500 font-medium mb-4">
          Error Loading Nurse Details
        </p>
      )}

      {/* Loading */}
      {loading && (
        <p className="text-green-500 font-medium mb-4">
          Loading Nurse Details...
        </p>
      )}

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Details */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">
              Personal Details
            </h2>

            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-medium text-gray-900">First Name:</span>{" "}
                {data?.firstname}
              </p>

              <p>
                <span className="font-medium text-gray-900">Last Name:</span>{" "}
                {data?.lastname}
              </p>

              <p>
                <span className="font-medium text-gray-900">Email:</span>{" "}
                {data?.email}
              </p>

              <p>
                <span className="font-medium text-gray-900">Station:</span>{" "}
                {data?.station}
              </p>

              <p>
                <span className="font-medium text-gray-900">Phone:</span>{" "}
                {data?.phone}
              </p>
            </div>
          </div>

          {/* Other Details */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">
              Other Details
            </h2>

            <div className="space-y-3 text-sm text-gray-700">

              <p>
                <span className="font-medium text-gray-900">Type:</span>{" "}
                {data?.type}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminNurseDetails;
