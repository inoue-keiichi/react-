import {
  type SyntheticEvent,
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import { getPrimes } from '../utils/prime';

export const useTimer = (maxCount: number): [number, boolean, () => void] => {
  const [timeLeft, setTimeLeft] = useState(maxCount);
  const primes = useMemo(() => getPrimes(maxCount), [maxCount]);
  const intervalId = useRef<ReturnType<typeof setInterval>>();
  const tick = useCallback(() => setTimeLeft((t) => t - 1), []);
  const reset = useCallback(
    (event?: SyntheticEvent) => {
      event?.stopPropagation();

      if (intervalId.current !== undefined) {
        clearInterval(intervalId.current);
      }
      setTimeLeft(maxCount);
      intervalId.current = setInterval(tick, 1000);
    },
    [maxCount, tick]
  );

  useEffect(() => {
    reset();

    return () => clearInterval(intervalId.current);
  }, [reset]);

  useEffect(() => {
    console.log(timeLeft);
    if (timeLeft === 0) reset();
  }, [timeLeft, maxCount]); // eslint-disable-line react-hooks/exhaustive-deps

  return [timeLeft, primes.includes(timeLeft), reset];
};
