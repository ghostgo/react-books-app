import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import BookSearch from '../bookSearch/BookSearch';
import BookInfo from '../bookInfo/BookInfo'
import React from 'react';

function App() {
  const [booksArray, setBooksArray] = useState([]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:searchid" element={<BookSearch booksArray={booksArray} setBooksArray={setBooksArray} />}/>  
        <Route path="/" element={<BookSearch booksArray={booksArray} setBooksArray={setBooksArray}/>}/> 
        <Route path="/book/:bookid" element={<BookInfo booksArray={booksArray}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
