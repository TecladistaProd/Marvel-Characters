import { useMemo } from "react";
import { useLocation } from "react-router-dom";

function useURLQuery() {
  const location = useLocation();

  return useMemo(() => {
    // Remover o caractere '?' do início da string
    const queryString = location.search.replace(/^\?/, "");
    // Dividir a string em pares de chave e valor
    const pairs = queryString.split("&");
    // Criar um objeto vazio
    const obj: Record<string, string> = {};
    // Iterar sobre os pares
    for (const pair of pairs) {
      // Dividir cada par em chave e valor
      const [key, value] = pair.split("=");
      // Decodificar a chave e o valor
      const decodedKey = decodeURIComponent(key);
      const decodedValue = decodeURIComponent(value);
      // Atribuir o valor ao objeto
      obj[decodedKey] = decodedValue;
    }
    // Retornar o objeto final
    return obj;
  }, [location.search]); 
}

export default useURLQuery;