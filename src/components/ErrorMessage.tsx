interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <div className="text-red-600 font-medium bg-red-50 p-2 border border-red-200 rounded">Ошибка: {message}</div>;
}