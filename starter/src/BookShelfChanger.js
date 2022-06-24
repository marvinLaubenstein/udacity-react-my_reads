import React from 'react';
import { useState } from 'react';

/**TODO: sign selected value */

const BookShelfChanger = ({ shelf, onOptionChange }) => {
  const [selected, setSelected] = useState('');

  useState(() => {
    shelf === undefined ? setSelected('none') : setSelected(shelf);
  });

  const handleChange = (event) => {
    setSelected(event.target.value);
    onOptionChange(event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange} value={selected}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
