import { useCallback, KeyboardEvent } from "react";

type TData = Array<{
  keys: string | string[];
  callback: () => void
}>;

function useOnKeyUp(data: TData) {

  const handleChange = useCallback(({ key }: KeyboardEvent<HTMLInputElement>) => {
    const item = data.find(i => i.keys.includes(key));
    console.log(data, item, key);
    item?.callback();
  }, [data]);

  return handleChange;
}

export default useOnKeyUp;