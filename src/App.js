import React, { useState } from 'react';
import './App.css';
import Background from './components/Background';
import MoviePic from './assets/MoviePic.png';
import SearchBar from './components/SearchBar';
import SearchItem from './components/SearchItem';
import NominationItem from './components/NominationItem';

function App() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  var backgroundStyle = {
    height: "43vh",
    width: "100vw",
    flexDirection: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${MoviePic})`
  };

  function selectNomination(elem) {
    console.log(elem);
    // add the element to the end of the nominations list
    setNominations([...nominations, elem]);
  }

  function deleteNomination(elem) {
    setNominations(() => {
      return nominations.filter((e) => e.Title != elem.Title);
    });
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
          <ul className="list-container">
            {(results != undefined && results.length > 0) ?
              results.map((res) => <SearchItem elem={res}
                                               nominated={nominations.includes(res)}
                                               clicked={() => selectNomination(res)} />)
              : <p>No results found</p>}
          </ul>
        </div>
        <div className="list-container">
          <p className="section-title">NOMINATIONS</p>
          <ul className="list-container">
          {(nominations != undefined && nominations.length > 0) ?
            nominations.map((nom) => <NominationItem elem={nom}
                                                     clicked={() => deleteNomination(nom)}/>)
            : <p>No nominations yet</p>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
