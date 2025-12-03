import { getSkills } from "../services/supabaseQueries";

export default async function Skills() {
  const skills = await getSkills();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Keahlian</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((s) => (
          <div key={s.id} className="p-4 bg-white shadow rounded-lg">
            <h3 className="font-semibold">{s.nama_skill}</h3>
            <p className="text-sm text-gray-600">{s.level}</p>
            <p className="text-xs text-gray-400">{s.kategori}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
