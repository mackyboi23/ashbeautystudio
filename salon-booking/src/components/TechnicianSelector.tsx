type Technician = {
  id: number;
  name: string;
};

export default function TechnicianSelector({
  technicians,
  onSelect,
  onBack,
}: {
  technicians: Technician[];
  onSelect: (tech: Technician) => void;
  onBack: () => void;
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-[#5a4d44] mb-4">Select a Technician</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {technicians.map((tech) => (
          <button
            key={tech.id}
            className="bg-[#f9ede9] hover:bg-[#efd7ce] text-[#5a4d44] py-3 px-4 rounded-lg border border-[#e8dedb] transition"
            onClick={() => onSelect(tech)}
          >
            {tech.name}
          </button>
        ))}
      </div>
      <button
        onClick={onBack}
        className="py-2 px-4 bg-gray-200 text-[#5a4d44] rounded hover:bg-gray-300"
      >
        Back
      </button>
    </div>
  );
}
