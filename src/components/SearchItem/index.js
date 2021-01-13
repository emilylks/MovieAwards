import React from 'react';
import './index.css';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function SearchItem(props) {
  const title = props.title;
  const year = props.year;
  const nominated = props.nominated;
  const selectNomination = props.onClick;
  const poster = props.poster;

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
          style={{height: 40, width: 90, alignSelf: 'center'}}>
          Nominate
        </Button>
      </div>
    </div>
  );
}

export default SearchItem;
