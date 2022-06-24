import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Book from './Book';
import * as BooksAPI from './utils/BooksAPI';

/** TODO: -search directly from API */

const SearchBookPage = ({ books, onBookUpdate }) => {
  const [query, setQuery] = useState('');
  const [resbooks, setResBooks] = useState('');

  const updateQuery = (queryValue) => {
    setQuery(queryValue);
  };

  useEffect(() => {
    console.log('here', query);
    const getBooks = async () => {
      const response = await BooksAPI.search(String(query));
      response.error !== 'empty query'
        ? compareWithShelfBooks(response)
        : setResBooks('');
    };
    query !== '' ? getBooks() : setResBooks('');
  }, [query]);

  const compareWithShelfBooks = (responseBooks) => {
    const bookUpdates = Object.fromEntries(
      books.map((temp) => [temp.id, temp])
    );
    const updatedBooks = responseBooks.map(
      (temp) => bookUpdates[temp.id] || temp
    );
    console.log(updatedBooks);
    setResBooks(updatedBooks);
  };

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
        {resbooks ? (
          resbooks.map((book) => (
            <li key={book.id}>
              <Book
                key={book.id}
                bookData={book}
                onBookOptionChange={onBookUpdate}
              ></Book>
            </li>
          ))
        ) : (
          <div>
            <p>No Books found</p>
          </div>
        )}
      </ol>
    </div>
  );
};

export default SearchBookPage;
