/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p className="no-results">No results. Please refine your search.</p>;
  } else {
    return (
      <div className="image-container">
        {results.map((image) => (
          <img  className="card-image" src={image} alt="spaceImage" />
        ))}
      </div>
    );
  }
};

export default SearchResults;
