import SearchBar from "./components/SearchBar";
import searchImages from "./api";

export default function App() {
  // we can use async await here in handleSubmit as a good practice
  // but handle no need as nothing in parent component need time to reload
  const handleSubmit = (term) => {
    searchImages(term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}
