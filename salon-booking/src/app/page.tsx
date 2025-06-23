'use client';
import { useState } from 'react';

import TypeSelector from '@/components/TypeSelector';
import TechnicianSelector from '@/components/TechnicianSelector';
import DateSelector from '@/components/DateSelector';
import TimeSelector from '@/components/TimeSelector';
import ServiceSelector, { Service } from '@/components/ServiceSelector';
import CustomerInfoForm from '@/components/CustomerInfoForm';
import Confirmation from '@/components/Confirmation';

type Technician = { id: number; name: string };
type Customer = { name: string; email: string; phone: string; social: string };

const technicians: Technician[] = [
  { id: 1, name: 'Jane' },
  { id: 2, name: 'Alex' },
];

const services: Service[] = [
  { id: 1, name: 'Classic Acrylic', type: 'nail' },
  { id: 2, name: 'Gel Extension', type: 'nail' },
  { id: 3, name: '3D Nail Art', type: 'nail' },
  { id: 4, name: 'Natural Lashes', type: 'lashes' },
  { id: 5, name: 'Volume Lashes', type: 'lashes' },
  { id: 6, name: 'Hybrid Lashes', type: 'lashes' },
];

export default function Home() {
  const [step, setStep] = useState(1);

  const [selectedType, setSelectedType] = useState<'nail' | 'lashes' | null>(null);
  const [technician, setTechnician] = useState<Technician | null>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState<Service | null>(null);
  const [customer, setCustomer] = useState<Customer>({
    name: '',
    email: '',
    phone: '',
    social: '',
  });

  const filteredServices = services.filter((s) => s.type === selectedType);

  return (
    <main className="min-h-screen bg-[#fef7f4] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 space-y-6 border border-[#e8dedb]">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#5a4d44]">
          Ash Beauty Studio
        </h1>

        {step === 1 && (
          <TypeSelector
            onSelect={(type) => {
              setSelectedType(type);
              setStep(2);
            }}
          />
        )}

        {step === 2 && selectedType && (
          <TechnicianSelector
            technicians={technicians}
            onSelect={(tech) => {
              setTechnician(tech);
              setStep(3);
            }}
            onBack={() => setStep(1)}
          />
        )}

        {step === 3 && technician && (
          <DateSelector
            technicianId={technician.id}
            onSelect={(selectedDate) => {
              setDate(selectedDate);
              setStep(4);
            }}
            onBack={() => setStep(2)}
          />
        )}

        {step === 4 && (
          <TimeSelector
            technicianId={technician!.id}
            date={date}
            onSelect={(selectedTime) => {
              setTime(selectedTime);
              setStep(5);
            }}
            onBack={() => setStep(3)}
          />
        )}

        {step === 5 && (
          <ServiceSelector
            services={filteredServices}
            onSelect={(selectedService) => {
              setService(selectedService);
              setStep(6);
            }}
            onBack={() => setStep(4)}
          />
        )}

        {step === 6 && (
          <CustomerInfoForm
            onSubmit={(info) => {
              setCustomer(info);
              setStep(7);
            }}
            onBack={() => setStep(5)}
          />
        )}

        {step === 7 && technician && service && (
          <Confirmation
            technician={technician}
            service={service}
            customer={customer}
            date={date}
            time={time}
            onConfirm={() => alert('Booking confirmed!')}
            onBack={() => setStep(6)}
          />
        )}
      </div>
    </main>
  );
}
