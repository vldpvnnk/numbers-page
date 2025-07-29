'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NumberForm() {
  const [type, setType] = useState<'math' | 'trivia' | 'date'>('math');
  const [value, setValue] = useState('');
  const [isRandom, setIsRandom] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isRandom) {
      if (type === 'date') {
        if (!/^\d{1,2}\/\d{1,2}$/.test(value)) {
          setError('Введите дату в формате ММ/ДД');
          return;
        }
      } else if (!/^\d+$/.test(value)) {
        setError('Число должно быть в виде цифры');
        return;
      }
    }

    const query = new URLSearchParams({
      type,
      value,
      random: isRandom.toString(),
    }).toString();
    router.push(`/result?${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md bg-white p-6 shadow rounded">
      <label className="flex flex-col">
        <span className="font-medium">Тип информации:</span>
        <select value={type} onChange={(e) => setType(e.target.value as "math" | "trivia" | "date")} className="border p-2 rounded">
          <option value="math">Математика</option>
          <option value="trivia">Факт</option>
          <option value="date">Дата</option>
        </select>
      </label>

      <label className="flex items-center gap-2">
        <input type="checkbox" checked={isRandom} onChange={(e) => setIsRandom(e.target.checked)} />
        Случайное значение
      </label>

      {!isRandom && (
        <label className="flex flex-col">
          <span className="font-medium">
            {type === 'date' ? 'Дата (ММ/ДД):' : 'Число:'}
          </span>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border p-2 rounded"
          />
        </label>
      )}

      {error && <span className="text-red-500 font-medium">{error}</span>}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Получить факт
      </button>
    </form>
  );
}
