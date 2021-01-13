import React, { useState } from 'react';
import './index.css';

function SearchBar(props) {
  const input = props.input;
  const setInput = props.setInput;
  const results = props.results;
  const setResults = props.setResults;

  function readSearch(event) {
    var target = event.target.value;
    setInput(target);
    fetch(`http://www.omdbapi.com/?s=${target}&type=movie&apikey=40f4fcc9&`, {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.Search);
      setResults(res.Search);
    });
  }

  return (
    <form>
      <input type="text" placeholder="Search movie titles"
             className="bar-style" onChange={readSearch}/>
    </form>
  );
}

export default SearchBar;
