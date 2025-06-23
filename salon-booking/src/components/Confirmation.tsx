type Technician = { id: number; name: string };
type Service = { id: number; name: string };
type Customer = { name: string; email: string; phone: string; social: string };

export default function Confirmation({
  technician,
  service,
  customer,
  date,
  time,
  onConfirm,
  onBack,
}: {
  technician: Technician;
  service: Service;
  customer: Customer;
  date: string;
  time: string;
  onConfirm: () => void;
  onBack: () => void;
}) {
  return (
    <div className="space-y-2 text-[#5a4d44]">
      <h2 className="text-lg font-semibold">Confirm Your Appointment</h2>
      <p><strong>Service:</strong> {service.name}</p>
      <p><strong>Technician:</strong> {technician.name}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <hr className="my-2 border-[#e8dedb]" />
      <p><strong>Name:</strong> {customer.name}</p>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Phone:</strong> {customer.phone}</p>
      <p><strong>Social:</strong> {customer.social}</p>

      <div className="flex justify-between gap-4 mt-4">
        <button
          onClick={onBack}
          className="w-1/2 py-2 bg-gray-200 text-[#5a4d44] rounded hover:bg-gray-300"
        >
          Back
        </button>
        <button
          onClick={onConfirm}
          className="w-1/2 py-2 bg-[#d8b4a0] hover:bg-[#c89a88] text-white font-medium rounded"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
