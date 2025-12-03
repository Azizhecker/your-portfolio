import { getProfile } from "../services/supabaseQueries";

export default async function About() {
  const profile = await getProfile();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Tentang Saya</h2>
      <p className="text-gray-700 leading-relaxed">{profile?.deskripsi}</p>
    </div>
  );
}
