import aboutImage from "../../assets/images/hospital buliding.jpg";

const About = () => {
  return (
    <main>
      {/* ========= HERO ========= */}
      <section className="relative h-[60vh]">
        <img
          src={aboutImage}
          alt="Hospital"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">About Our Hospital</h1>
        </div>
      </section>

      {/* ========= ABOUT INFO ========= */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src={aboutImage} alt="About" className="rounded-xl shadow-lg" />

          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our hospital provides advanced medical care using modern
              technology and experienced healthcare professionals. We are
              committed to improving lives through quality treatment,
              prevention, and compassionate service.
            </p>
          </div>
        </div>
      </section>

      {/* ========= MISSION & VISION ========= */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <div className="bg-white/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p>
              To provide accessible, affordable and high-quality healthcare
              services for everyone.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p>
              To become a leading healthcare institution delivering excellence
              in medical innovation and patient care.
            </p>
          </div>
        </div>
      </section>

      {/* ========= WHY CHOOSE US ========= */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-blue-600">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Qualified Doctors",
              "Modern Equipment",
              "24/7 Emergency Care",
              "Affordable Treatment",
              "Patient Safety",
              "Trusted Services",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:-translate-y-2 transition"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
