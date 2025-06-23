'use client';
import { useState, useEffect } from 'react';

// Utility to format date
const formatDate = (date: Date) => date.toISOString().split('T')[0];

export default function DateSelector({
  technicianId,
  onSelect,
  onBack,
}: {
  technicianId: number;
  onSelect: (date: string) => void;
  onBack: () => void;
}) {
  const today = new Date();
  const [availableDates, setAvailableDates] = useState<string[]>([]);

  // Simulate fetching available dates per technician
  useEffect(() => {
    const simulatedAvailability: { [key: number]: string[] } = {
      1: ['2025-06-25', '2025-06-27', '2025-06-28'],
      2: ['2025-06-26', '2025-06-28', '2025-06-30'],
    };

    setAvailableDates(simulatedAvailability[technicianId] || []);
  }, [technicianId]);

  // Generate next 14 days
  const nextTwoWeeks = Array.from({ length: 14 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date;
  });

  return (
    <div>
      <h2 className="text-lg font-semibold text-[#5a4d44] mb-4">Select a Date</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {nextTwoWeeks.map((date) => {
          const dateStr = formatDate(date);
          const isAvailable = availableDates.includes(dateStr);
          const isPast = date < today;

          return (
            <button
              key={dateStr}
              disabled={!isAvailable || isPast}
              onClick={() => onSelect(dateStr)}
              className={`p-2 rounded-lg border text-sm transition
                ${
                  isAvailable
                    ? 'bg-[#f9ede9] hover:bg-[#efd7ce] text-[#5a4d44]'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }
              `}
            >
              {date.toDateString().slice(0, 10)}
            </button>
          );
        })}
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
