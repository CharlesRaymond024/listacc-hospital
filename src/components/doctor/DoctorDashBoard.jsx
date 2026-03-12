import { useState } from "react";

// Mock data
const DoctorDashBoard = () => {
  const [appointments] = useState([
    { patient: "John Doe", time: "10:00 AM" },
    { patient: "Mary James", time: "11:30 AM" },
    { patient: "David Paul", time: "01:00 PM" },
  ]);

  // Stats for doctor overview
  const stats = [
    { title: "Today's Appointments", value: appointments.length },
    { title: "Completed Appointments", value: 12 },
    { title: "Pending Follow-ups", value: 5 },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Doctor Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6">
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

      {/* Appointments Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Today's Appointments</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Patient</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{appt.patient}</td>
                <td>{appt.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorDashBoard;
