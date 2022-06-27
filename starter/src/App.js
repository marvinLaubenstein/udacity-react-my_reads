import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBookPage from './SearchBookPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BookShelf from './BookShelf';
import * as BooksAPI from './utils/BooksAPI';

const App = () => {
  let navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await BooksAPI.getAll();
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
    updateBooks();
    navigate('/');
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
            books={books}
            onBookUpdate={handleBookUpdate}
          ></SearchBookPage>
        }
      ></Route>
    </Routes>
  );
};

export default App;
