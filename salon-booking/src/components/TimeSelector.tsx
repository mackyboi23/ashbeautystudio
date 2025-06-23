'use client';
import { useEffect, useState } from 'react';

export default function TimeSelector({
  technicianId,
  date,
  onSelect,
  onBack,
}: {
  technicianId: number;
  date: string;
  onSelect: (time: string) => void;
  onBack: () => void;
}) {
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  // Simulated available times by technician and date
  useEffect(() => {
    const availability: {
      [techId: number]: { [date: string]: string[] };
    } = {
      1: {
        '2025-06-25': ['10:00 AM', '1:00 PM'],
        '2025-06-27': ['11:00 AM', '2:00 PM', '3:00 PM'],
        '2025-06-28': ['12:00 PM', '4:00 PM'],
      },
      2: {
        '2025-06-26': ['9:00 AM', '11:00 AM'],
        '2025-06-28': ['10:00 AM', '12:00 PM', '3:00 PM'],
        '2025-06-30': ['1:00 PM', '4:00 PM'],
      },
    };

    const times = availability[technicianId]?.[date] || [];
    setAvailableTimes(times);
  }, [technicianId, date]);

  const allTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-[#5a4d44] mb-4">Select a Time</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {allTimes.map((slot) => {
          const isAvailable = availableTimes.includes(slot);
          return (
            <button
              key={slot}
              disabled={!isAvailable}
              onClick={() => onSelect(slot)}
              className={`py-2 px-3 rounded-lg border text-sm transition
                ${
                  isAvailable
                    ? 'bg-[#f9ede9] hover:bg-[#efd7ce] text-[#5a4d44]'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
            >
              {slot}
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
