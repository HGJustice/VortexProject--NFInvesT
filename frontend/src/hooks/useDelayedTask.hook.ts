import { useCallback, useEffect, useMemo, useRef } from 'react';

const DEFAULT_DELAY_MS = 1000;
export const useDelayedTask = () => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const start = useCallback(
    (cb: () => void, ms = DEFAULT_DELAY_MS) => {
      cleanup();
      timeoutRef.current = setTimeout(() => {
        cb();
      }, ms);
    },
    [cleanup],
  );

  useEffect(
    () => () => {
      cleanup();
    },
    [cleanup],
  );

  const result = useMemo(() => ({ start, cleanup }), [cleanup, start]);

  return result;
};
