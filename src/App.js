import React, { useState } from 'react';
import axios from "axios";
import { jsonBooks } from './booksJson'
import './styles/App.css'

import BookList from './components/BookList';

function App() {

  const booka = JSON.parse(jsonBooks)

  const apiKey = "AIzaSyCUWqSnBmC1z2elzqv-qnd9YFG345y9CsA"
  const search = "subject:art+biography+computers+history+medical+poetry"

  const [books, setBooks] = useState([])

  async function fetchBooks() {
    const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=" + apiKey + "&maxResults=30")
    setBooks(response.data.items)
    console.log(response)
  }

  return (
    <div className='App'>

      <div className='searchAndDort'>
        <h1>Search for books</h1>

        <div className='search'>
          <input className='input' />
          <button>search</button>
        </div>

        <div className='sort'>
          <select>
            <option selected>all</option>
            <option>art</option>
            <option>biography</option>
            <option>computers</option>
            <option>history</option>
            <option>medical</option>
            <option>poetry</option>
          </select>

          <select>
            <option selected>relevance</option>
            <option>newest</option>
          </select>
        </div>
      </div>

      <hr />

      <button onClick={fetchBooks}>Click</button>

      <BookList books={books} />

    </div>
  );
}

export default App;


