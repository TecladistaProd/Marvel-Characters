import { useMemo } from "react";
import { useLocation } from "react-router-dom";

function useURLQuery() {
  const location = useLocation();

  return useMemo(() => {
    const queryString = location.search.replace(/^\?/, "");
    const pairs = queryString.split("&");
    const obj: Record<string, string> = {};
    for (const pair of pairs) {
      const [key, value] = pair.split("=");
      const decodedKey = decodeURIComponent(key);
      const decodedValue = decodeURIComponent(value);
      obj[decodedKey] = decodedValue;
    }
    return obj;
  }, [location.search]); 
}

export default useURLQuery;