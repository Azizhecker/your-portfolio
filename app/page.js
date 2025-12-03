export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-10 pt-5">
      {/* ===== TOP RIGHT INFO ===== */}
      <nav className="flex justify-end items-center mb-8" data-aos="fade-down">
        <div className="text-right text-sm leading-tight">
          <p className="font-semibold">Pakwa Creative</p>
          <p>
            Designer Atakana | <span className="font-semibold">@azizctd</span>
          </p>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center -mt-2">
        {/* LEFT TEXT CONTENT */}
        <div className="mt-4" data-aos="fade-right">
          <p className="text-lg mb-2 text-gray-700">Hello !!!</p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-black">
            Saya Abdul
            <br />
            Aziz, S.Kom
          </h1>

          <div className="bg-lime-300 text-black font-semibold w-fit mt-3 px-5 py-2 rounded-full shadow">
            Graphic Design & Web Development
          </div>

          <p className="text-gray-700 mt-4 leading-relaxed w-[90%] md:w-[85%]">
            IT Support berpengalaman di troubleshooting & infrastruktur IT,
            dengan keahlian desain grafis, editing video, dan pengembangan web.
          </p>

          {/* EMAIL + BUTTON */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-3 border border-black px-6 py-3 rounded-full bg-white shadow-lg">
              <img src="/gmail.png" className="w-6" />
              <span className="text-sm">aziz.com5535@gmail.com</span>
            </div>

            <button className="bg-lime-400 hover:bg-lime-500 px-6 py-3 rounded-full font-semibold shadow-lg">
              Gmail
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="relative flex justify-center md:justify-end -mt-10 md:-mt-20"
          data-aos="fade-left"
        >
          <img
            src="/aziz.png"
            className="w-[550px] md:w-[750px] xl:w-[900px] drop-shadow-xl"
          />
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* ABOUT IMAGE */}
        <div
          className="flex justify-center md:justify-start"
          data-aos="zoom-in"
        >
          <img
            src="/aziz2.png"
            className="w-[620px] md:w-[820px] xl:w-[900px] drop-shadow-xl rounded-2xl"
          />
        </div>

        {/* ABOUT TEXT */}
        <div data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Abdul Aziz, S.Kom
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 w-[95%]">
            Saya seorang IT Support dengan keahlian di desain grafis, UI/UX,
            editing video, videographer, dan pengembangan front-end website.
            Berpengalaman dalam troubleshooting, infrastruktur IT, dan
            multimedia organisasi. Menggabungkan kreativitas dan kemampuan
            teknis untuk menghasilkan solusi terbaik.
          </p>

          {/* Skill Title */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold">Skill & Interest</h3>
            <div className="h-1 bg-lime-400 w-40 mt-1"></div>
          </div>

          {/* SKILL GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-orange-300 px-4 py-3 rounded-xl font-semibold shadow">
              IT Support
            </div>
            <div className="bg-gray-200 px-4 py-3 rounded-xl font-semibold shadow">
              Front-end Development
            </div>
            <div className="bg-gray-800 text-white px-4 py-3 rounded-xl font-semibold shadow">
              Graphic Design
            </div>
            <div className="bg-purple-400 text-white px-4 py-3 rounded-xl font-semibold shadow">
              UI/UX Design
            </div>
            <div className="bg-gray-400 text-white px-4 py-3 rounded-xl font-semibold shadow">
              Video Editing
            </div>
            <div className="bg-lime-300 px-4 py-3 rounded-xl font-semibold shadow">
              Photography
            </div>
            <div className="bg-orange-400 text-white px-4 py-3 rounded-xl font-semibold shadow">
              Videography
            </div>
            <div className="bg-blue-500 text-white px-4 py-3 rounded-xl font-semibold shadow">
              Organization
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
