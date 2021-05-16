/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import '../styles/App.css';
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState()
  
  return (
    <div className="App">
      <img className="NasaImage" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" />
      <SearchBar setSearchResults={setSearchResults}/>
      <SearchResults results={searchResults}/>
    </div>
  );
}

export default App;
