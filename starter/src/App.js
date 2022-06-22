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
      setBooks(response);
    };

    getBooks();
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<BookShelf books={books}></BookShelf>}
      ></Route>
      <Route
        exact
        path="/search"
        element={<SearchBookPage resbooks={books}></SearchBookPage>}
      ></Route>
    </Routes>
  );
};

export default App;
