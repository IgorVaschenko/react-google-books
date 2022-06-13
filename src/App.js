import React, { useEffect, useState } from 'react';
import './styles/App.css'
import BookList from './components/BookList';
import { useFetching } from './hooks/useFetching';
import BookService from './API/BookService';
import Loader from './components/UI/Loader/Loader';
import BookFilter from './components/BookFilter';

function App() {

  const [searchBook, setSearchBook] = useState('q')
  const [category, setCategory] = useState('')
  const [searchRelevant, setSearchRelevant] = useState('relevance')
  const apiKey = "AIzaSyCUWqSnBmC1z2elzqv-qnd9YFG345y9CsA"

  const [books, setBooks] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [startIndex, setStartIndex] = useState('0')


  const [fetchBooks, isBooksLoading, booksError] = useFetching(async () => {
    const response = await BookService.getAll(searchBook, category, apiKey, searchRelevant, startIndex)
    console.log(response)
    setBooks([...books, ...response.data.items])

    setTotalItems(response.data.totalItems)
  })

  const handlerSearch = useEffect(() => {
    fetchBooks()
  }, [searchBook ,category, searchRelevant, startIndex])

  const loadMore = () => {
    setStartIndex((+startIndex + 30))
    console.log(startIndex);
  }

  return (
    <div className='App'>

      <BookFilter
        handlerSearch={handlerSearch}
        setSearchBook={setSearchBook}
        setSearchRelevant={setSearchRelevant}
        setCategory={setCategory}
      />

      <hr />

      {!totalItems
        ? <div>Books not Found</div>
        : <div className='totalItems'>
          <h4>Found {totalItems} books</h4>
        </div>
      }

      {booksError &&
        <h1 style={{ textAlign: 'center' }}>Server error</h1>}

      {isBooksLoading
        ? <Loader />
        : <BookList books={books} totalItems={totalItems} />
      }

      <hr />

      <button onClick={loadMore}>Load more</button>

    </div>
  );
}

export default App;


