import React, { useState, useEffect } from 'react'; // Import useState and useEffect hooks
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CreateBook } from './pages/CreateBook';
import { DeleteBook } from './pages/DeleteBook';
import { ShowBook } from './pages/ShowBook';
import { EditBook } from './pages/EditBook';

// The API URL for fetching books
const API_URL = 'https://book-store-nine-sigma.vercel.app/books';

export const App = () => {
  // State to store the books
  const [books, setBooks] = useState([]);

  // Fetch books when the component mounts
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setBooks(data); // Update state with fetched books
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    getBooks(); // Call the function when component mounts
  }, []); // Empty array ensures this effect runs only once

  return (
    <div>
      {/* Adding a heading for the Book Store */}
      <h1
        style={{
          textAlign: 'center',
          margin: '20px 0',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Book Store
      </h1>

      {/* Passing books data to Home page */}
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </div>
  );
};

export default App;
