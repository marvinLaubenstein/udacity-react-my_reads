import React from 'react';
import Book from './Book';

const BookShelfTray = ({
  trayTitle,
  bookShelfCategory,
  books,
  onBookOptionChange,
}) => {
  return (
    <div className="bookshelf-tray">
      <h2 className="bookshelf-title">{trayTitle}</h2>
      <div className="bookshelf-books">
        {books.map((book) => console.log(book))}
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === bookShelfCategory)
            .map((currentlyReadingBook) => (
              <li key={currentlyReadingBook.id}>
                <Book
                  key={currentlyReadingBook.id}
                  bookData={currentlyReadingBook}
                  onBookOptionChange={onBookOptionChange}
                ></Book>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelfTray;
