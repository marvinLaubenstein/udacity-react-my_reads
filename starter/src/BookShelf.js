import React from 'react';
import { Link } from 'react-router-dom';
import BookShelfTray from './BookShelfTray';

const BookShelf = ({ books, onBookUpdate }) => {
  const handleBookShelfUpdate = (bookData, option) => {
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
            onBookShelfUpdate={handleBookShelfUpdate}
          ></BookShelfTray>
          <BookShelfTray
            trayTitle={'Want to Read'}
            bookShelfCategory={'wantToRead'}
            books={books}
            onBookShelfUpdate={handleBookShelfUpdate}
          ></BookShelfTray>
          <BookShelfTray
            trayTitle={'Read'}
            bookShelfCategory={'read'}
            books={books}
            onBookShelfUpdate={handleBookShelfUpdate}
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
