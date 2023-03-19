import { type SyntheticEvent, useEffect, useState } from 'react';
import { getPrimes } from '../utils/prime';

export const useTimer = (maxCount: number): [number, boolean, () => void] => {
  const [timeLeft, setTimeLeft] = useState(maxCount);
  const tick = () => {
    setTimeLeft((t) => t - 1);
  };
  const reset = (event?: SyntheticEvent) => {
    event?.stopPropagation();
    setTimeLeft(maxCount);
  };
  const primes = getPrimes(maxCount);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    console.log(timeLeft);
    if (timeLeft === 0) reset();
  }, [timeLeft, maxCount]); // eslint-disable-line react-hooks/exhaustive-deps

  return [timeLeft, primes.includes(timeLeft), reset];
};
