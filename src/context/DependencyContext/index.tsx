import { useMemo, useState } from "react";
import { DependencyContext } from "./DependencyContext";

type Props = {
  children: React.ReactNode;
};

const DependencyContextProvider = ({ children }: Props) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dependencies, setDependencies] = useState<Record<string, string>>({});
  const [devDependencies, setDevDependencies] = useState<
    Record<string, string>
  >({});

  console.log({ isLoading, dependencies, devDependencies });

  const value = useMemo(() => {
    return {
      error,
      isLoading,
      dependencies,
      devDependencies,
      setError,
      setIsLoading,
      setDependencies,
      setDevDependencies,
    };
  }, [
    error,
    isLoading,
    dependencies,
    devDependencies,
    setError,
    setIsLoading,
    setDependencies,
    setDevDependencies,
  ]);

  return (
    <DependencyContext.Provider value={value}>
      {children}
    </DependencyContext.Provider>
  );
};

export default DependencyContextProvider;
