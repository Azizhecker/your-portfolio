import { supabase } from "@/lib/supabaseClient";

// ============ GET PROFILE ============
export async function getProfile() {
  const { data, error } = await supabase.from("profiles").select("*").single();

  if (error) {
    console.error("Error load profile:", error);
    return null;
  }

  return data;
}

// ============ GET EXPERIENCE ============
export async function getExperience() {
  const { data, error } = await supabase
    .from("experience")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error load experience:", error);
    return [];
  }

  return data;
}

// ============ GET PROJECTS ============
export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error load projects:", error);
    return [];
  }

  return data;
}

// ============ GET SKILLS ============
export async function getSkills() {
  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .order("kategori", { ascending: true });

  if (error) {
    console.error("Error load skills:", error);
    return [];
  }

  return data;
}
