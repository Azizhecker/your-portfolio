export default function CardProject({ title, desc }) {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  );
}
