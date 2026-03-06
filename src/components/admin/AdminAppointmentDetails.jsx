import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useContext } from "react";
import AuthContext from "../../providers/AuthProvider";

const AdminAppointmentDetails = () => {
  const { id } = useParams();
  const { auth } = useContext(AuthContext);
  const url = `/appointment/${id}`;

  const { data, loading, error } = useFetch(url, auth?.accessToken);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Appointment Details
      </h1>

      {/* Error */}
      {error && (
        <p className="text-red-500 font-medium mb-4">
          Error Loading Appointment Details
        </p>
      )}

      {/* Loading */}
      {loading && (
        <p className="text-green-500 font-medium mb-4">
          Loading Appointment Details...
        </p>
      )}

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Patient Information */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">
              Patient Information
            </h2>

            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-medium text-gray-900">First Name:</span>{" "}
                {data?.patient?.firstname}
              </p>

              <p>
                <span className="font-medium text-gray-900">Last Name:</span>{" "}
                {data?.patient?.lastname}
              </p>

              <p>
                <span className="font-medium text-gray-900">Email:</span>{" "}
                {data?.patient?.email}
              </p>

              <p>
                <span className="font-medium text-gray-900">Phone:</span>{" "}
                {data?.patient?.phone}
              </p>
            </div>
          </div>

          {/* Appointment Information */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">
              Appointment Information
            </h2>

            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-medium text-gray-900">Doctor:</span>{" "}
                {data?.doctor?.firstname} {data?.doctor?.lastname}
              </p>

              <p>
                <span className="font-medium text-gray-900">Reason:</span>{" "}
                {data?.reason}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAppointmentDetails;
