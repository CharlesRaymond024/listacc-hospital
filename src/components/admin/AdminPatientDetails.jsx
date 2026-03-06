import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useContext } from "react";
import AuthContext from "../../providers/AuthProvider";

const AdminPatientDetails = () => {
  const { id } = useParams();
  const { auth } = useContext(AuthContext);
  const url = `/patient/${id}`;

  const { data, loading, error } = useFetch(url, auth?.accessToken);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Patient Details
      </h1>

      {/* Error */}
      {error && (
        <p className="text-red-500 font-medium mb-4">
          Error Loading Patient Details
        </p>
      )}

      {/* Loading */}
      {loading && (
        <p className="text-green-500 font-medium mb-4">
          Loading Patient Details
        </p>
      )}

      {/* Patient Data */}
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
                <span className="font-medium text-gray-900">
                  Date of Birth:
                </span>{" "}
                {data?.dateOfBirth}
              </p>
              <p>
                <span className="font-medium text-gray-900">Gender:</span>{" "}
                {data?.gender}
              </p>
              <p>
                <span className="font-medium text-gray-900">Phone:</span>{" "}
                {data?.phone}
              </p>
              <p>
                <span className="font-medium text-gray-900">
                  Emergency Contact:
                </span>{" "}
                {data?.emergencyContact}
              </p>
              <p>
                <span className="font-medium text-gray-900">Address:</span>{" "}
                {data?.address}
              </p>
            </div>
          </div>

          {/* Medical Details */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">
              Medical Details
            </h2>

            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-medium text-gray-900">
                  Patient Number:
                </span>{" "}
                {data?.patientNumber}
              </p>

              <p>
                <span className="font-medium text-gray-900">Status:</span>{" "}
                {data?.status}
              </p>

              <p>
                <span className="font-medium text-gray-900">Blood Group:</span>{" "}
                {data?.bloodGroup}
              </p>
              <p>
                <span className="font-medium text-gray-900">Genotype:</span>{" "}
                {data?.genotype}
              </p>
              <p>
                <span className="font-medium text-gray-900">Height:</span>{" "}
                {data?.height}
              </p>
              <p>
                <span className="font-medium text-gray-900">Weight:</span>{" "}
                {data?.weight}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPatientDetails;
