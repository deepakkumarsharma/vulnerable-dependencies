import Header from "./components/Header";
import FileUploader from "./components/FileUploader";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="mt-10 flex justify-center">
          <FileUploader />
        </div>
      </div>
    </div>
  );
};

export default App;
