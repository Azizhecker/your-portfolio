import { getExperience } from "../services/supabaseQueries";

export default async function Experience() {
  const data = await getExperience();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Pengalaman</h2>

      <ul className="space-y-4">
        {data.map((exp) => (
          <li key={exp.id} className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold">{exp.posisi}</h3>
            <p className="text-sm text-gray-600">{exp.perusahaan}</p>
            <p className="text-xs text-gray-500 mt-2">{exp.tahun}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
