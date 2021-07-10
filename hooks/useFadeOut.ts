import { useState, useEffect } from 'react';

type Timeout = ReturnType<typeof setTimeout>;
const useFadeOut = (
  callback: any,
  delay: number = 500
): [boolean, () => void] => {
  const [timeoutId, setTimeoutId] = useState<Timeout>();
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return [
    isFadingOut,
    () => {
      setIsFadingOut(true);
      setTimeoutId(setTimeout(callback, delay));
    },
  ];
};

export default useFadeOut;
