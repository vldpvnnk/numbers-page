interface ResultCardProps {
  type: string;
  value: string;
  isRandom: boolean;
  fact: string;
}

export default function ResultCard({ type, value, isRandom, fact }: ResultCardProps) {
  return (
    <div className="border rounded p-4 bg-green-50 shadow-sm">
      <p className="mb-2">
        <strong>Тип:</strong> {type}
      </p>
      <p className="mb-2">
        <strong>Значение:</strong> {isRandom ? 'Случайное' : value}
      </p>
      <p className="font-semibold">
        📘 {fact}
      </p>
    </div>
  );
}