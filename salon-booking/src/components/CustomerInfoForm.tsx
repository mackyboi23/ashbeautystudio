import { useState } from 'react';

export default function CustomerInfoForm({
  onSubmit,
  onBack,
}: {
  onSubmit: (data: {
    name: string;
    email: string;
    phone: string;
    social: string;
  }) => void;
  onBack: () => void;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [social, setSocial] = useState('');
  const [agree, setAgree] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    /^\d{11}$/.test(phone); // Must be exactly 11 digits

  const handleSubmit = () => {
    if (!name || !email || !phone || !social || !agree) {
      alert('Please fill all fields and agree to the terms.');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!validatePhone(phone)) {
      alert('Phone number must be exactly 11 digits.');
      return;
    }

    onSubmit({ name, email, phone, social });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-[#5a4d44]">Enter Your Information</h2>

      <input
        className="w-full p-2 border rounded"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Mobile Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="FB or IG Username"
        value={social}
        onChange={(e) => setSocial(e.target.value)}
      />

      <label className="flex items-start gap-2 text-sm text-[#5a4d44]">
        <input type="checkbox" onChange={(e) => setAgree(e.target.checked)} />
        I agree to the terms and conditions.
      </label>

      <div className="flex justify-between gap-4">
        <button
          onClick={onBack}
          className="w-1/2 py-2 bg-gray-200 text-[#5a4d44] rounded hover:bg-gray-300"
        >
          Back
        </button>
        <button
          className="w-1/2 py-2 bg-[#d8b4a0] hover:bg-[#c89a88] text-white font-medium rounded"
          onClick={handleSubmit}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
