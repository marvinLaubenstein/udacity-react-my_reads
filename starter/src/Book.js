import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = ({ bookData, onBookOptionChange }) => {
  const handleOptionChange = (option) => {
    onBookOptionChange(bookData, option);
    console.log('Option in book: ' + option);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${bookData.imageLinks.thumbnail})`,
          }}
        ></div>
        <BookShelfChanger
          shelf={bookData.shelf}
          onOptionChange={handleOptionChange}
        ></BookShelfChanger>
      </div>
      <div className="book-title">{bookData.title}</div>
      <div className="book-authors">{bookData.authors}</div>
    </div>
  );
};

export default Book;
