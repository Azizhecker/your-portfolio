export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-6 md:px-12 py-16">
      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-14 relative overflow-hidden">
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide mb-6">
          EXPERIENCE & ORGANIZATION
        </h1>

        {/* UNDERLINE */}
        <div className="w-40 h-1.5 bg-lime-400 mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT CONTENT */}
          <div>
            {/* Organization */}
            <h2 className="text-xl font-bold text-purple-600 mb-3">
              Organization
            </h2>
            <ul className="space-y-2 text-gray-900">
              <li>Sekretaris umum LDF FUAT AI Muttaqin UNIMAL 2023</li>
              <li>
                Mentor Desain Grafis Informatic Study Platform UNIMAL 2023
              </li>
              <li>Ketua Departemen Syiar LDK Al Kautsar UNIMAL 2024</li>
              <li>Pengurus Menkominfo BEM Universitas Malikussaleh 2024</li>
              <li>Ketua Menteri Agama BEM Universitas Malikussaleh 2025</li>
            </ul>

            {/* Experience */}
            <h2 className="text-xl font-bold text-purple-600 mt-8 mb-3">
              Experience
            </h2>
            <ul className="space-y-2 text-gray-900">
              <li>
                2nd International Conference on Multi Disciplinary Engineering
              </li>
              <li>International Engineering Student Conference</li>
              <li>Graphic Designer & Business Owner Pasee ART</li>
              <li>Officer Social Media & Graphic Design</li>
              <li>Project GEMASTIK</li>
              <li>Community service</li>
              <li>Project Logo Event</li>
            </ul>
          </div>

          {/* RIGHT IMAGE & TOOLS */}
          <div className="relative flex flex-col items-center">
            <img src="/aziz3.png" className="w-60 md:w-800 drop-shadow-xl" />

            {/* Tools icons */}
            <div className="absolute top-6 right-4 space-y-4">
              <img src="/figma.png" className="w-12" />
              <img src="/ai.png" className="w-12" />
              <img src="/premiere.png" className="w-12" />
              <img src="/ps.png" className="w-12" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
