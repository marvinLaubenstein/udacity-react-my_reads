import React from 'react';
import Book from './Book';

const BookShelfTray = ({
  trayTitle,
  bookShelfCategory,
  books,
  onBookShelfUpdate,
}) => {
  return (
    <div className="bookshelf-tray">
      <h2 className="bookshelf-title">{trayTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === bookShelfCategory)
            .map((currentlyReadingBook) => (
              <li key={currentlyReadingBook.id}>
                <Book
                  key={currentlyReadingBook.id}
                  bookData={currentlyReadingBook}
                  onBookUpdate={onBookShelfUpdate}
                ></Book>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelfTray;
