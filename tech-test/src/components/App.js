/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import preloadedImages from "../data/preloadedImages.js"

function App() {
  const [searchResults, setSearchResults] = useState(preloadedImages);

  console.log(searchResults, "searchresults")
  console.log(setSearchResults, "setSearchResults")

  return (
    <div className="App">
      <img
        className="NasaImage"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
      />
      <SearchBar setSearchResults={setSearchResults} />
      <div className="search-results">
        <SearchResults results={searchResults} />
      </div>
    </div>
  );
}

export default App;
