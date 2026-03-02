const AdminDashboard = () => {
  // Mock Data
  const stats = [
    { title: "Total Patients", value: 245 },
    { title: "Doctors", value: 32 },
    { title: "Appointments Today", value: 18 },
    { title: "Available Beds", value: 12 },
  ];

  const appointments = [
    { name: "John Doe", doctor: "Dr. Smith", time: "10:00 AM" },
    { name: "Mary James", doctor: "Dr. Adams", time: "11:30 AM" },
    { name: "David Paul", doctor: "Dr. Grace", time: "01:00 PM" },
  ];

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-gray-500">{item.title}</h3>
            <p className="text-2xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Recent Appointments */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Appointments</h2>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Patient</th>
                <th>Doctor</th>
                <th>Time</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((appt, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{appt.name}</td>
                  <td>{appt.doctor}</td>
                  <td>{appt.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Doctor Availability */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Doctor Availability</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Dr. Smith</span>
              <span className="text-green-600 font-medium">Available</span>
            </div>

            <div className="flex justify-between">
              <span>Dr. Adams</span>
              <span className="text-red-500 font-medium">Busy</span>
            </div>

            <div className="flex justify-between">
              <span>Dr. Grace</span>
              <span className="text-green-600 font-medium">Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
