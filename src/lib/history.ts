export interface HistoryItem {
  type: string;
  value: string;
  isRandom: boolean;
  fact: string;
}

const KEY = 'fact_history';

export function saveToHistory(item: HistoryItem) {
  const existing = getHistory();
  const updated = [item, ...existing].slice(0, 10);
  localStorage.setItem(KEY, JSON.stringify(updated));
}

export function getHistory(): HistoryItem[] {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export function clearHistory() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(KEY);
  }
}
