import { supabase } from "@/lib/supabaseClient";

export async function POST(request) {
  const body = await request.json();

  const { data, error } = await supabase.from("messages").insert([
    {
      nama: body.nama,
      email: body.email,
      subjek: body.subjek,
      pesan: body.pesan,
    },
  ]);

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  return Response.json({ success: true }, { status: 200 });
}
