import type { DebounceOptions } from "@/hooks/use-debounce-fn";
import { useDebounceFn } from "@/hooks/use-debounce-fn";
import { useEffect, useState } from "react";

export function useDebounce<T>(
  value: T,
  debounceMs?: number,
  options?: DebounceOptions
) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  const { run } = useDebounceFn(
    () => {
      setDebouncedValue(value);
    },
    debounceMs,
    options
  );

  useEffect(() => run(), [run]);

  return debouncedValue;
}
