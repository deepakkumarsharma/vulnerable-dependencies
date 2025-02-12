export const filteredDependencies = (dependencies: Record<string, string>) => {
  return Object.fromEntries(
    Object.entries(dependencies).map(([name, version]) => [
      name,
      version.replace(/[\^~]/g, ""),
    ])
  );
};
