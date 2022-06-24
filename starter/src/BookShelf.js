import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import BookShelfTray from './BookShelfTray';

/** TODO: -Note the size of the book cover*/

const BookShelf = ({ books, onBookUpdate }) => {
  const handleBookOptionChange = (bookData, option) => {
    console.log(
      'Option in booksearch: ' + option + ' (' + bookData.title + ') '
    );
    onBookUpdate(bookData, option);
  };
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div className="bookshelf">
          <BookShelfTray
            trayTitle={'Currently Reading'}
            bookShelfCategory={'currentlyReading'}
            books={books}
            onBookOptionChange={handleBookOptionChange}
          ></BookShelfTray>
          <BookShelfTray
            trayTitle={'Want to Read'}
            bookShelfCategory={'wantToRead'}
            books={books}
            onBookOptionChange={handleBookOptionChange}
          ></BookShelfTray>
          <BookShelfTray
            trayTitle={'Read'}
            bookShelfCategory={'read'}
            books={books}
            onBookOptionChange={handleBookOptionChange}
          ></BookShelfTray>
        </div>
      </div>
      <div className="open-search">
        <Link className="open-search" to="/search">
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default BookShelf;
