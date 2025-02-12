export interface DependencyContextType {
  error: string | null;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  setError: (error: string) => void;
  setDependencies: (dependencies: Record<string, string>) => void;
  setDevDependencies: (devDependencies: Record<string, string>) => void;
}
