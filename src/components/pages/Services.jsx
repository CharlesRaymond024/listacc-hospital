const services = [
  "General Consultation",
  "Emergency Care",
  "Laboratory Services",
  "Radiology & Scan",
  "Surgery",
  "Maternity Care",
  "Pharmacy",
  "Dental Care",
  "Cardiology",
  "Pediatrics",
  "Vaccination",
  "Health Checkup",
];

const Services = () => {
  return (
    <main className=" bg-gray-100 min-h-screen">
      {/* HERO */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Medical Services</h1>
        <p>Providing comprehensive healthcare solutions</p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow
              hover:bg-blue-600 hover:text-white
              hover:scale-105 transition duration-300
              cursor-pointer text-center"
            >
              <h3 className="font-semibold text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
