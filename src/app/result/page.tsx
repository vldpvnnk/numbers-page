import { Suspense } from "react";
import ResultPageClient from "@/components/ResultPageClient";

export default function ResultPageWrapper() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <ResultPageClient />
    </Suspense>
  );
}