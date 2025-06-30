import React, { useEffect } from 'react'
interface UseDebounceProps {
  value: string;
  delay: number;
}
const useDebounce = ({value, delay}:UseDebounceProps) => {
  const [search, setSearch] = React.useState(value);
useEffect(() => {  
    const handler = setTimeout(() => {
      setSearch(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return search;
}

export default useDebounce