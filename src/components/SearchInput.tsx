import { useState } from "react";
import useSearchMovies from "../hooks/useSearchMovies";

function SearchInput() {
  const [inputValue, setInputValue] = useState<string>("");

  const { handleSearchMovies } = useSearchMovies();

  function handleQuerySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputValue.trim() === "") {
      // Optionally, set some error state here to notify the user
      // console.log("Search query cannot be empty."); // debug
      
      return; // Exit early if the input value is empty
    }

    handleSearchMovies(inputValue.trim()); // Trim to remove any leading/trailing whitespaces
  }

  return (
    <form className="search-form" onSubmit={handleQuerySubmit}>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn-search" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchInput;
