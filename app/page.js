export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-6 md:px-10 pt-5">
      {/* HERO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-5">
        {/* LEFT TEXT */}
        <div data-aos="fade-right">
          <p className="text-lg mb-1 text-gray-700">Hello !!!</p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black">
            Saya Abdul <br /> Aziz, S.Kom
          </h1>

          <div className="bg-lime-300 text-black font-semibold w-fit mt-3 px-4 py-2 rounded">
            Graphic Design & Web Development
          </div>

          <p className="text-gray-700 mt-3 leading-relaxed w-full md:w-[85%] text-justify md:text-left">
            IT Support berpengalaman di troubleshooting & infrastruktur IT,
            dengan keahlian desain grafis, editing video, dan pengembangan web.
          </p>

          {/* Email + Button */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-5">
            <div className="flex items-center gap-3 border border-black px-4 py-2 rounded-full bg-white shadow-md w-fit">
              <img src="/gmail.png" className="w-6" />
              <span className="text-sm break-all">aziz.com5535@gmail.com</span>
            </div>

            <button className="bg-lime-400 hover:bg-lime-500 px-6 py-2.5 rounded-full font-semibold shadow-md w-fit">
              Gmail
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="flex justify-center md:justify-end"
          data-aos="fade-left"
        >
          <img
            src="/aziz.png"
            className="w-[260px] sm:w-[360px] md:w-[500px] xl:w-[650px] drop-shadow-xl"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <div
          className="flex justify-center md:justify-start"
          data-aos="fade-right"
        >
          <img
            src="/aziz2.png"
            className="w-[300px] sm:w-[420px] md:w-[600px] xl:w-[650px] drop-shadow-lg rounded-xl"
          />
        </div>

        {/* RIGHT TEXT */}
        <div data-aos="fade-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
            Abdul Aziz, S.Kom
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 w-full md:w-[95%] text-justify md:text-left">
            Saya seorang IT Support dengan keahlian di desain grafis, UI/UX,
            editing video, videographer, dan pengembangan front-end website.
            Berpengalaman dalam troubleshooting, infrastruktur IT, dan
            multimedia organisasi. Menggabungkan kreativitas dan kemampuan
            teknis untuk menghasilkan solusi terbaik.
          </p>

          <h3 className="text-2xl font-bold">Skill & Interest</h3>
          <div className="h-1 bg-lime-400 w-40 mt-1 mb-5"></div>

          {/* SKILL GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "IT Support", color: "bg-orange-300 border-orange-500" },
              {
                name: "Front-end Development",
                color: "bg-gray-200 border-gray-400",
              },
              {
                name: "Graphic Design",
                color: "bg-gray-800 text-white border-gray-900",
              },
              {
                name: "UI/UX Design",
                color: "bg-purple-400 text-white border-purple-600",
              },
              {
                name: "Video Editing",
                color: "bg-gray-400 text-white border-gray-500",
              },
              { name: "Photography", color: "bg-lime-300 border-lime-500" },
              {
                name: "Videography",
                color: "bg-orange-400 text-white border-orange-600",
              },
              {
                name: "Organization",
                color: "bg-blue-500 text-white border-blue-600",
              },
            ].map((skill, i) => (
              <div
                key={i}
                className={`px-4 py-3 rounded-xl font-semibold shadow border text-center transition-transform duration-200 hover:scale-[1.05] ${skill.color}`}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
