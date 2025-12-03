"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: "",
  });

  const sendMessage = async () => {
    await fetch("/api/send-message", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    alert("Pesan berhasil dikirim!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Kontak</h2>

      <input
        type="text"
        placeholder="Nama"
        className="border p-2 w-full mb-3"
        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-3"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <input
        type="text"
        placeholder="Subjek"
        className="border p-2 w-full mb-3"
        onChange={(e) => setFormData({ ...formData, subjek: e.target.value })}
      />

      <textarea
        placeholder="Pesan"
        className="border p-2 w-full mb-3"
        onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={sendMessage}
      >
        Kirim Pesan
      </button>
    </div>
  );
}
