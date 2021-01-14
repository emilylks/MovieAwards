import React from 'react';
import './index.css';
import Button from '@material-ui/core/Button';

function SearchItem(props) {
  const [title, year, poster] = [props.elem.Title, props.elem.Year, props.elem.Poster];
  const nominated = props.nominated;
  const selectNomination = props.clicked;

  return (
    <div className="searchitem-container">
      <span>
        <img src={poster} alt="movie-poster" />
      </span>
      <div className="results-content">
        <p>{title + " (" + year + ")"}</p>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{height: 40, width: 90, alignSelf: 'center'}}
          onClick={selectNomination}>
          Nominate
        </Button>
      </div>
    </div>
  );
}

export default SearchItem;
