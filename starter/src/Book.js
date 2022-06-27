import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = ({ bookData, onBookUpdate }) => {
  const handleBookShelfUpdate = (option) => {
    onBookUpdate(bookData, option);
  };

  const getThumbnail = () => {
    let thumbnail;
    bookData?.imageLinks?.thumbnail
      ? (thumbnail = `url(${bookData.imageLinks.thumbnail})`)
      : (thumbnail = ``);
    return thumbnail;
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: getThumbnail(),
          }}
        ></div>
        <BookShelfChanger
          shelf={bookData.shelf}
          onBookShelfUpdate={handleBookShelfUpdate}
        ></BookShelfChanger>
      </div>
      <div className="book-title">{bookData.title}</div>
      <div className="book-authors">{bookData.authors}</div>
    </div>
  );
};

export default Book;
