import { useMemo, useState } from "react";
import { DependencyContext } from "./DependencyContext";

type Props = {
  children: React.ReactNode;
};

const DependencyContextProvider = ({ children }: Props) => {
  const [error, setError] = useState<string | null>(null);
  const [dependencies, setDependencies] = useState<Record<string, string>>({});
  const [devDependencies, setDevDependencies] = useState<
    Record<string, string>
  >({});

  const value = useMemo(() => {
    return {
      error,
      dependencies,
      devDependencies,
      setError,
      setDependencies,
      setDevDependencies,
    };
  }, [
    error,
    dependencies,
    devDependencies,
    setError,
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
