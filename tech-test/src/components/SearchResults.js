/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p className="no-results">No results</p>;
  } else {
    return (
      <div className="search-results">
        {results.map((image) => (
          <img  className="card-image" src={image} alt="spaceImage" />
        ))}

      </div>
      
    );
  }
};

export default SearchResults;
