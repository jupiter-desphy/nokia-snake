import { useEffect, useRef } from 'react'

// import { useIsomorphicLayoutEffect } from 'usehooks-ts'

export default function UseInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback if it changes.
  // useIsomorphicLayoutEffect(() => {
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
    return () => clearInterval(id);
    }
  }, [delay]);
}
