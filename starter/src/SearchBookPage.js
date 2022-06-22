import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Book from './Book';

const SearchBookPage = ({ resbooks }) => {
  const [query, setQuery] = useState('');

  const updateQuery = (queryValue) => {
    setQuery(queryValue);
  };

  const queryBooks =
    query === ''
      ? null
      : resbooks.filter((book) => checkBookIncludingQuery(book));

  function checkBookIncludingQuery(book) {
    let isTitleMatching = book.title
      .toLowerCase()
      .includes(query.toLowerCase());

    let isAuthorsMatching = false;
    book.authors.map((author) =>
      author.toLowerCase().includes(query.toLowerCase())
        ? (isAuthorsMatching = true)
        : ''
    );

    let isISBNMatching = false;
    book.industryIdentifiers.map((industryIdentifier) =>
      industryIdentifier.identifier.includes(query.toLowerCase())
        ? (isAuthorsMatching = true)
        : ''
    );
    return isTitleMatching || isAuthorsMatching || isISBNMatching;
  }

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
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
      <ol className="books-grid">
        {queryBooks !== null ? queryBooks.map((book) => console.log(book)) : ''}
        {queryBooks !== null
          ? queryBooks.map((book) => (
              <li key={book.id}>
                <Book
                  key={book.id}
                  title={book.title}
                  cover={book.imageLinks.thumbnail}
                  authors={book.authors}
                ></Book>
              </li>
            ))
          : ''}
      </ol>
    </div>
  );
};

export default SearchBookPage;
