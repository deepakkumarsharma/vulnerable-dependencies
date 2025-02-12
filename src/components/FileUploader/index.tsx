// File uploader component to upload a package.json file

import { Paperclip } from "lucide-react";
import { useDependenciesContext } from "../../context/DependencyContext/useDependenciesContext";

const FileUploader = () => {
  const { setError, setIsLoading, setDependencies, setDevDependencies } =
    useDependenciesContext();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const file = event.target.files?.[0];
    if (!file) return;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result;

        if (!content) return;
        try {
          setIsLoading(true);
          const { dependencies, devDependencies } = JSON.parse(
            content as string
          );
          setDependencies(dependencies);
          setDevDependencies(devDependencies);
        } catch (error) {
          setIsLoading(false);
          setError("Invalid package.json file");
          console.error("Invalid package.json file", error);
        } finally {
          setIsLoading(false);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="border  border-gray-300 rounded-md p-2">
      <div className="flex items-center gap-4 cursor-pointer">
        <Paperclip className="w-4 h-4" />
        <input
          type="file"
          accept=".json"
          className="cursor-pointer"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default FileUploader;
