import React, { useState } from 'react';
import './App.css';
import Background from './components/Background';
import MoviePic from './assets/MoviePic.png';
import SearchBar from './components/SearchBar';
import SearchItem from './components/SearchItem';

function App() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  var backgroundStyle = {
    height: "43vh",
    width: "100vw",
    flexDirection: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${MoviePic})`
  };

  function selectNomination() {

  }

  return (
    <div className="App">
      <div className="header">
        <div style={backgroundStyle}>
          <div className="title-container">
          <p className="header-title">THE SHOPPIES</p>
          </div>
        </div>
      </div>
      <SearchBar input={input} setInput={setInput}
                 results={results} setResults={setResults}
      />
      <div className="main-content">
        <div className="list-container">
          <p className="section-title">SEARCH RESULTS</p>
          <ul>
            {(results != undefined && results.length > 0) ?
              results.map((res) => <SearchItem title={res.Title} year={res.Year} nominated={false}
                                               poster={res.Poster} onClick={selectNomination} />)
              : <p>No results found</p>}
          </ul>
        </div>
        <div className="list-container">
          <p className="section-title">NOMINATIONS</p>
          <ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
