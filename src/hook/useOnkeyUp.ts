import { stringArrMan } from "@/utils/manipulation";
import { useCallback, KeyboardEvent } from "react";

type TData = Array<{
  keys: string | string[];
  callback: () => void
}>;

function useOnKeyUp(data: TData) {

  const handleChange = useCallback(({ key }: KeyboardEvent<HTMLInputElement>) => {
    const item = data.find(i => key.match(stringArrMan(i.keys)));
    console.log(data, item, key);
    item?.callback();
  }, [data]);

  return handleChange;
}

export default useOnKeyUp;