import React, { useState } from 'react';
import './index.css';

function SearchBar(props) {
  const input = props.input;
  const setInput = props.setInput;
  const results = props.results;
  const setResults = props.setResults;

  function readSearch(event) {
    var target = event.target.value;
    console.log(target);
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

  function readInput(target) {
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
    <form onSubmit={e => { e.preventDefault(); }}>
      <input type="text"
             placeholder="Search movie titles"
             id="bar-style"
             onChange={readSearch}
      />
    </form>
  );
}

export default SearchBar;
