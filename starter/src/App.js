import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBookPage from './SearchBookPage';
import { Route, Routes } from 'react-router-dom';
import BookShelf from './BookShelf';
import * as BooksAPI from './utils/BooksAPI';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await BooksAPI.getAll();
      //     console.log(response);
      setBooks(response);
    };
    getBooks();
  }, []);

  const handleBookUpdate = (book, changedOption) => {
    const updateBooks = async () => {
      await BooksAPI.update(book, changedOption);
      const response = await BooksAPI.getAll();
      setBooks(response);
    };
    //problem with none as shelf value
    if (changedOption !== 'none') updateBooks();
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BookShelf books={books} onBookUpdate={handleBookUpdate}></BookShelf>
        }
      ></Route>
      <Route
        exact
        path="/search"
        element={
          <SearchBookPage
            resbooks={books}
            onBookUpdate={handleBookUpdate}
          ></SearchBookPage>
        }
      ></Route>
    </Routes>
  );
};

export default App;
