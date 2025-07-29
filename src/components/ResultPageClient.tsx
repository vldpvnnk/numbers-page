'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { fetchNumberFact } from "@/lib/fetchNumberFact";
import ResultCard from "@/components/ResultCard";
import ErrorMessage from "@/components/ErrorMessage";
import SkeletonCard from "@/components/SkeletonCard";
import { saveToHistory, getHistory, HistoryItem, clearHistory } from "@/lib/history";

export default function ResultPageClient() {
  const params = useSearchParams();
  const type = params.get("type") as "math" | "trivia" | "date";
  const value = params.get("value") || '';
  const isRandom = params.get("random") === 'true';

  const [fact, setFact] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
const [history, setHistory] = useState<HistoryItem[]>([]);
const hasFetchedRef = useRef(false);

useEffect(() => {
  if (hasFetchedRef.current) return;
  hasFetchedRef.current = true;

  if (!type || (!value && !isRandom)) {
    setError("Неверные параметры запроса");
    return;
  }

  const queryValue = isRandom ? 'random' : value;

  fetchNumberFact(queryValue, type)
    .then((text) => {
      setFact(text);
      const newItem = { type, value, isRandom, fact: text };
      saveToHistory(newItem);
      setHistory(getHistory());
    })
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
}, [type, value, isRandom]);

const handleClear = () => {
  clearHistory();
  setHistory([]);
};

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Результат</h1>
      {error && <ErrorMessage message={error} />}
      {loading && <SkeletonCard />}
      {!loading && fact && (
        <ResultCard type={type} value={value} isRandom={isRandom} fact={fact} />
      )}

      <div className="mt-8">
        <h2 className="text-xl font-medium mb-2">История запросов</h2>

        <div className="flex items-center justify-between mb-2">
          <button
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            ← На главную
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Очистить историю
          </button>
        </div>

        {history.length === 0 ? (
          <p className="text-gray-500">История пуста.</p>
        ) : (
          <ul className="space-y-2">
            {history.map((item, idx) => (
              <li key={idx} className="bg-white border p-2 rounded shadow">
                <p><strong>Тип:</strong> {item.type}</p>
                <p><strong>Значение:</strong> {item.isRandom ? 'Случайное' : item.value}</p>
                <p><strong>Факт:</strong> {item.fact}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}