export interface DependencyContextType {
  isLoading: boolean;
  error: string | null;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  setError: (error: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  setDependencies: (dependencies: Record<string, string>) => void;
  setDevDependencies: (devDependencies: Record<string, string>) => void;
}
