import React from 'react';
import './index.css';
import DeleteIcon from '@material-ui/icons/Delete';

function NominationItem(props) {
  const [title, year, poster] = [props.elem.Title, props.elem.Year, props.elem.Poster];
  const deleteNomination = props.clicked;

  return (
    <div className="nomitem-container">
      <span>
        <img src={poster} alt="movie-poster" />
      </span>
      <div className="nom-content">
        <p>{title + " (" + year + ")"}</p>
        <DeleteIcon size="small" style={{color: "#f50057", alignSelf: 'center'}}
                    onClick={deleteNomination} />
      </div>
    </div>
  );
}

export default NominationItem;
