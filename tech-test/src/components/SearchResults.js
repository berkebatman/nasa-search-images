/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./SearchResults.css";

const SearchResults = ({ results }) => {
   if (!results.length) {
      return <p>No results</p>
    } else {
   return ( 
  <>
  {results.map((image) => (
          <img className="card-image" src={image} alt="spaceImage" />
        ))}
  </>
  )
   }
};


export default SearchResults;
