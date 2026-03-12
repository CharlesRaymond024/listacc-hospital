import { useState } from "react";

// Mock data for nurse
const NurseDashBoard = () => {
  const [patients] = useState([
    { name: "John Doe", room: "101A", status: "Stable" },
    { name: "Mary James", room: "102B", status: "Critical" },
    { name: "David Paul", room: "103C", status: "Recovering" },
  ]);

  const stats = [
    { title: "Assigned Patients", value: patients.length },
    {
      title: "Critical Patients",
      value: patients.filter((p) => p.status === "Critical").length,
    },
    {
      title: "Stable Patients",
      value: patients.filter((p) => p.status === "Stable").length,
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Nurse Dashboard</h1>

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

      {/* Assigned Patients Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Assigned Patients</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Patient</th>
              <th>Room</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{patient.name}</td>
                <td>{patient.room}</td>
                <td>{patient.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NurseDashBoard;
