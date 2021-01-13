import React from 'react';

function SearchItem(props) {
  const title = props.title;
  const year = props.year;
  const nominated = props.nominated;
  const selectNomination = props.selectNomination;

  return (
    <div>
      <p>{title + " " + year}</p>
    </div>
  );
}

export default SearchItem;
