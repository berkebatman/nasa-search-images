import React, { useState } from "react";
import "./Search.css";
import getImages from "../requests/getImages.js"

const SearchBar = ({ setSearchResults }) => {
   const [value, setValue] = useState("");
   
   const  submitButtonHandler = async (event) => {
      event.preventDefault();
      setSearchResults(await getImages(value));
   }

   return (
         <> 
         <form className="form" onSubmit={submitButtonHandler}>
         <input className="InputBar" type="text" onChange={(e) => setValue(e.target.value)} placeholder="Search NASA's image library..." />
         <button className="button" type="submit"  > Search </button>
         </form>
         </>
   )
}

export default SearchBar;