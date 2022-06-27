import React from 'react';
import { Link } from 'react-router-dom';
import BookShelfTray from './BookShelfTray';

const BookShelf = ({ books, onBookUpdate }) => {
  const handleBookShelfUpdate = (bookData, option) => {
    onBookUpdate(bookData, option);
  };
  const shelfTrays = [
    {
      title: 'Currently Reading',
      category: 'currentlyReading',
      id: 'currentlyReadingShelfTray',
    },
    {
      title: 'Want to Read',
      category: 'wantToRead',
      id: 'wantToReadShelfTray',
    },
    { title: 'Read', category: 'read', id: 'readShelfTray' },
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div className="bookshelf">
          {shelfTrays.map((shelfTray) => {
            return (
              <BookShelfTray
                key={shelfTray.id}
                trayTitle={shelfTray.title}
                bookShelfCategory={shelfTray.category}
                books={books}
                onBookShelfUpdate={handleBookShelfUpdate}
              ></BookShelfTray>
            );
          })}
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
