import { useToast } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";

interface IUseApiCall<TResult> {
  value: TResult | null;
  isLoading: boolean;
  error: Error | null;

  execute: () => void;
  update: (value?: TResult) => void;
}

export function useApiCall<TResult>(
  callback: () => Promise<TResult>
): IUseApiCall<TResult> {
  const [value, setValue] = useState<TResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const toast = useToast();

  const execute = useCallback(async () => {
    try {
      setIsLoading(true);
      const value = await callback();
      if (value == null) throw new Error("Entrry not found");
      setValue(value);
      setError(null);
    } catch (err: any) {
      setError(err);
      setValue(null);
      toast({
        title: "Api error",
        description: "Someting went wrong, please retry",
        status: "error",
        duration: 30000,
        isClosable: true,
      });
    }
    setIsLoading(false);
  }, [callback]);

  const update = useCallback((value) => {
    setValue(value);
  }, []);

  // eslint-disable-next-line
  useEffect(() => void execute(), []);

  return {
    value,
    isLoading,
    error,

    execute,
    update,
  };
}
