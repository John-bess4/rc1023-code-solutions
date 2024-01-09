import { useCallback, useEffect, useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);
  const getData = useCallback(function getData() {
    return { foo: 'bar' };
  }, []);

  useEffect(
    function fetchDataAndIncrement() {
      getData();

      setCounter((prev) => prev + 1);
    },
    [getData]
  );

  return <div>Fetching {counter} times</div>;
}
