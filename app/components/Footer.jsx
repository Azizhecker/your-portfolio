"use client";
export default function Footer() {
  return (
    <footer className="mt-16 bg-white border-t">
      <div className="container px-6 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Abdul Aziz — Portfolio. Dibuat dengan
        Next.js.
      </div>
    </footer>
  );
}
