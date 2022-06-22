import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

const SearchBookPage = ({ resbooks }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            name="book-data"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
      <ol className="books-grid">
        {resbooks.map((book) => console.log(book))}
        {resbooks.map((book) => (
          <li key={book.id}>
            <Book
              key={book.id}
              title={book.title}
              cover={book.imageLinks.thumbnail}
              authors={book.authors}
            ></Book>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchBookPage;
