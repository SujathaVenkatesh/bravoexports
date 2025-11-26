import { useState } from "react";
import { Award, Zap, FileCheck } from "lucide-react";

const About = () => {
  const [showFullProfile, setShowFullProfile] = useState(false);
  const toggleProfile = () => setShowFullProfile(!showFullProfile);

  /* ─────────────────────── Company Data ─────────────────────── */
  const companyProfilePoints = [
    "Established in 2008, trading, supplying, wholesaling, and exporting Natural Stones.",
    "Supreme grade raw material and state-of-the-art manufacturing units.",
    "Experienced quality controllers ensure flawless products.",
    "Timely delivery using multiple transportation modes.",
    "Serving overseas countries: UK, US, Australia, China, Denmark, France, Netherlands, New Zealand & Norway.",
    "Guided by Mr. Satishjeyan Subashini, achieving a remarkable market position.",
  ];

  const factsheetData = [
    {
      label: "Basic Information",
      data: [
        { title: "Founder/Director", value: "Founder/Director" },
        { title: "Retail Business", value: "Retail Business" },
        { title: "Additional Business", value: "Additional Business" },
        { title: "Company CEO", value: "Company CEO" },
      ],
    },
    {
      label: "Company Information",
      data: [
        { title: "Registration Date", value: "01-JUN-2017" },
        { title: "Legal Status of Firm", value: "Partnership" },
        { title: "GST Registration Date", value: "01-JUN-2017" },
        {
          title: "GST Partner Name",
          value: "Subhash Suhashayan, Giriraman Subhashayan",
        },
      ],
    },
  ];

  const infrastructureData = [
    { title: "Location Type", value: "URBAN" },
    { title: "Building Infrastructure", value: "Permanent" },
    { title: "Size of Premises", value: "160 square feet" },
  ];

  const companyUSP = [
    "Good Financial Position & TQM",
    "Large Product Line",
    "Quality & Customer Service",
    "Prompt Customization Solutions",
  ];

  const statutoryProfile = [
    "Import Export Code (IEC)",
    "GSTIN Registration",
    "Udyam Registration",
    "ISO 9001:2015 Certified",
    "FSSAI Approved",
    "Quality Audited",
  ];

  const packagingPaymentDetails = [
    {
      category: "Packaging/Courier",
      items: [
        "Cardboard Packaging",
        "Wooden Crates",
        "Bubble Wrap Protection",
        "Custom Packaging Solutions",
      ],
    },
    {
      category: "Payment Mode",
      items: [
        "Cash",
        "Cheque",
        "Credit Card",
        "Bank Transfer",
        "Digital Payment",
      ],
    },
    {
      category: "Shipment Mode",
      items: [
        "By Cargo",
        "By Road",
        "By Air",
        "Sea Freight",
        "Express Delivery",
      ],
    },
  ];

  const shortPoints = companyProfilePoints.slice(0, 3);

  /* ───────────────────────── Component UI ───────────────────────── */
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* ───────────── Header Section ───────────── */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-teal-600 overflow-hidden text-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6">
            <Award className="w-5 h-5" />
            <span className="font-semibold">About Bravo Exports</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Excellence in Global Trade
          </h1>
          <p className="text-xl text-white/90 max-w-full mx-auto">
            Your trusted partner for premium export services since 2008
          </p>
        </div>
      </section>

      {/* ───────────── Company Profile ───────────── */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <img
            src="/Images/profie-image.png"
            alt="Company Profile"
            className="rounded-2xl w-full h-auto object-cover"
          />

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Company Profile
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600"></div>

            <ul className="text-gray-600 text-lg leading-relaxed list-disc list-inside space-y-2">
              {(showFullProfile ? companyProfilePoints : shortPoints).map(
                (point, i) => (
                  <li key={i}>{point}</li>
                )
              )}
            </ul>

            <button
              onClick={toggleProfile}
              className="text-emerald-700 font-semibold hover:underline"
            >
              {showFullProfile ? "Show Less" : "Show More"}
            </button>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "500+", label: "Happy Clients" },
                { number: "50+", label: "Countries" },
                { number: "10K+", label: "Shipments" },
              ].map((s, i) => (
                <div key={i} className="p-6 bg-white rounded-xl shadow-lg">
                  <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {s.number}
                  </p>
                  <p className="text-gray-600 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Factsheet ───────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Factsheet</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {factsheetData.map((section, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-emerald-700 mb-6">
                  {section.label}
                </h3>

                {section.data.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b pb-3 mb-3"
                  >
                    <span className="text-gray-700 font-medium">
                      {item.title}
                    </span>
                    <span className="text-emerald-700 font-semibold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Infrastructure ───────────── */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white text-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-10">Infrastructure</h2>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg mx-auto max-w-2xl">
            {infrastructureData.map((item, i) => (
              <div key={i} className="flex justify-between border-b pb-3 mb-4">
                <span className="text-gray-700 font-medium text-lg">
                  {item.title}
                </span>
                <span className="text-emerald-700 font-semibold text-lg">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── USP ───────────── */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-10">Company USP</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyUSP.map((usp, i) => (
              <div
                key={i}
                className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg flex flex-col items-center"
              >
                <Zap className="w-10 h-10 text-emerald-700 mb-4" />
                <span className="font-semibold text-gray-900 text-lg">
                  {usp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Statutory Profile ───────────── */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Statutory Profile</h2>

          <div className="bg-white p-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {statutoryProfile.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-emerald-700" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Packaging, Payment & Shipment ───────────── */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">
            Packaging, Payment & Shipment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packagingPaymentDetails.map((block, i) => (
              <div
                key={i}
                className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-6">{block.category}</h3>
                <ul className="space-y-3">
                  {block.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-700 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
