import { getProjects } from "../services/supabaseQueries";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Project</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="p-5 bg-white shadow rounded-xl">
            <h3 className="font-semibold">{p.nama_project}</h3>
            <p className="text-sm text-gray-600">{p.deskripsi}</p>
            {p.image_url && <img src={p.image_url} className="mt-3 rounded" />}
          </div>
        ))}
      </div>
    </div>
  );
}
