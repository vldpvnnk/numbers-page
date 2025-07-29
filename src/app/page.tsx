'use client';

import NumberForm from "@/components/NumberForm";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-white">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Узнай интересный факт о числе</h1>
      <NumberForm />
    </main>
  );
}