import { useEffect, useState } from "react";
import hospital1 from "../../assets/images/hospital buliding.jpg";
import hospital2 from "../../assets/images/hospital building  2.jpg";
import doctorPatient from "../../assets/images/doctor-patient.jpg";
import doctor1 from "../../assets/images/doctor1.jpg";
import doctor2 from "../../assets/images/doctor2.jpg";
import doctor3 from "../../assets/images/doctor3.jpg";
import doctor4 from "../../assets/images/doctor4.jpg";

const Home = () => {
  const images = [hospital1, hospital2];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const doctors = [
    {
      name: "Dr. John Smith",
      specialty: "Cardiologist",
      image: doctor1,
    },
    {
      name: "Dr. Sarah Williams",
      specialty: "Neurologist",
      image: doctor2,
    },
    {
      name: "Dr. Michael Brown",
      specialty: "Pediatrician",
      image: doctor3,
    },
    {
      name: "Dr. John Doe",
      specialty: "Surgeon",
      image: doctor4,
    },
  ];

  const stats = [
    { title: "Patients Treated", value: 12000 },
    { title: "Qualified Doctors", value: 120 },
    { title: "Successful Surgeries", value: 3500 },
    { title: "Medical Awards", value: 45 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) =>
          count < stats[i].value
            ? count + Math.ceil(stats[i].value / 100)
            : stats[i].value,
        ),
      );
    }, 30);

    return () => clearInterval(interval);
  }, );

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[calc(100vh-5rem)] overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt="Hospital"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-6xl mx-auto text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome To Our Hospital
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl">
              Providing world-class healthcare services with modern facilities
              and experienced medical professionals.
            </p>

            <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg hover:bg-green-500 hover:text-white transition duration-200">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* ================= TRENDING DISEASE SECTION ================= */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Trending Disease: Malaria
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Malaria remains one of the most common diseases in many tropical
            regions. It is caused by parasites transmitted through infected
            mosquito bites. Preventive measures help reduce infection risks.
          </p>

          {/* Prevention Grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Sleep under treated mosquito nets",
              "Keep surroundings clean",
              "Use mosquito repellents",
              "Drain stagnant water",
              "Install window nets",
              "Wear protective clothing",
              "Use indoor insect sprays",
              "Visit hospital early when symptoms appear",
            ].map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-[45%] lg:w-[22%] 
          bg-blue-50 p-6 rounded-xl shadow-md
          transition-all duration-500
          hover:-translate-y-3
          hover:shadow-xl
          hover:bg-blue-100"
              >
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR MEDICAL SERVICES ================= */}
      <section className="w-full flex flex-col lg:flex-row">
        {/* LEFT IMAGE */}
        <div className="lg:w-1/2 ">
          <img
            src={doctorPatient}
            alt="Medical Services"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="lg:w-1/2 bg-blue-600 text-white flex items-center">
          <div className="px-10 py-16 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Medical Services
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              We provide comprehensive healthcare services including general
              consultation, laboratory testing, emergency care, maternity
              services, surgery, and advanced diagnostic treatments delivered by
              experienced professionals.
            </p>

            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition ease-in-out duration-300">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* ================= DOCTORS PREVIEW ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our Specialists
          </h2>

          <p className="text-gray-600 mb-12">
            Our experienced doctors are committed to providing world-class
            healthcare services.
          </p>

          {/* Doctors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden
          transform hover:-translate-y-3 hover:shadow-xl
          transition duration-300"
              >
                {/* Image */}
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{doctor.name}</h3>

                  <p className="text-blue-600 mt-2">{doctor.specialty}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <button className="mt-12 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-green-500 hover:text-white transition duration-300">
            View All Doctors
          </button>
        </div>
      </section>

      {/* ================= HOSPITAL STATISTICS ================= */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Our Hospital Achievements
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md
          rounded-xl p-8
          hover:scale-105 transition duration-300"
              >
                <h3 className="text-5xl font-bold mb-3">{counts[index]}+</h3>

                <p className="text-lg">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
