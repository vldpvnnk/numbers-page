export default function SkeletonCard() {
  return (
    <div className="animate-pulse space-y-2 border rounded p-4 bg-gray-100">
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      <div className="h-6 bg-gray-300 rounded w-full"></div>
    </div>
  );
}