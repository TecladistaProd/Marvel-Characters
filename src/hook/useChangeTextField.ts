import { ChangeEvent, useCallback, useState } from "react";

type THandleChange = (event: ChangeEvent<HTMLInputElement>) => void;

type TUseChangeTextFieldR = [string, THandleChange];

function useChangeTextField(value: string): TUseChangeTextFieldR {
  const [hVal, setHVal] = useState(value);

  const handleChange = useCallback<THandleChange>(({ target: { value: val } }) => {
    setHVal(val || '');
  }, []);

  return [hVal, handleChange];
}

export default useChangeTextField;