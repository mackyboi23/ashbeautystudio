export default function TypeSelector({
    onSelect,
  }: {
    onSelect: (type: 'nail' | 'lashes') => void;
  }) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-[#5a4d44]">Select Type of Service</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => onSelect('nail')}
            className="w-full py-3 bg-[#f9ede9] hover:bg-[#efd7ce] text-[#5a4d44] rounded-lg border border-[#e8dedb]"
          >
            Nail Extensions
          </button>
          <button
            onClick={() => onSelect('lashes')}
            className="w-full py-3 bg-[#f9ede9] hover:bg-[#efd7ce] text-[#5a4d44] rounded-lg border border-[#e8dedb]"
          >
            Lashes
          </button>
        </div>
      </div>
    );
  }
  