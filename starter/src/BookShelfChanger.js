import React from 'react';
import { useState } from 'react';

/**TODO: sign selected value */

const BookShelfChanger = ({ shelf, onBookShelfUpdate }) => {
  const [selected, setSelected] = useState('');
  const isShelfUndefined = shelf === undefined;

  useState(() => {
    isShelfUndefined ? setSelected('none') : setSelected(shelf);
  });

  const handleChange = (event) => {
    setSelected(event.target.value);
    onBookShelfUpdate(event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange} value={selected}>
        <option disabled>{isShelfUndefined ? 'Add to' : 'Move to...'}</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
