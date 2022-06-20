import React from 'react';
import { useState } from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = ({ title, cover, authors }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${cover})`,
          }}
        ></div>
        <BookShelfChanger></BookShelfChanger>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

export default Book;
