import React, { useEffect, useState } from 'react';
import '../styles/App.css'
import '../styles/Books.css'
import BookList from '../components/BookList';
import { useFetching } from '../hooks/useFetching';
import BookService from '../API/BookService';
import Loader from '../components/UI/Loader/Loader';
import BookFilter from '../components/BookFilter';
import MyButtonLoadMore from '../components/UI/button/MyButtonLoadMore';

function Books() {

  const [searchBook, setSearchBook] = useState('')
  const [category, setCategory] = useState('')
  const [searchRelevant, setSearchRelevant] = useState('relevance')
  const [beginSearch, setBeginSearch] = useState(false)
  const [books, setBooks] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [startIndex, setStartIndex] = useState('0')


  const [fetchBooks, isBooksLoading, booksError] = useFetching(async () => {
    const response = await BookService.getAll(searchBook, category, searchRelevant, startIndex)
    setBooks([...books, ...response.data.items])
    setTotalItems(response.data.totalItems)
  })

  useEffect(() => {
    document.querySelector('input').focus()
  })

  useEffect(() => {
    if (beginSearch) {
      fetchBooks()
    }
  }, [searchBook, category, searchRelevant, startIndex])

  const loadMore = () => {
    setStartIndex((+startIndex + 30))
  }

  return (
    <div className='App'>

      <BookFilter
        setSearchBook={setSearchBook}
        setSearchRelevant={setSearchRelevant}
        setCategory={setCategory}
        category={category}
        setBeginSearch={setBeginSearch}
      />

      {!totalItems
        ? <div></div>
        : <div className='totalItems'>
          <h3>Found {totalItems} books</h3>
        </div>
      }

      {booksError &&
        <h1 style={{ textAlign: 'center' }}>Server error</h1>}

      {isBooksLoading
        ? <Loader />
        : <BookList books={books} totalItems={totalItems} />
      }
   
      {books.length !== 0 &&
        <MyButtonLoadMore onClick={loadMore}>Load more</MyButtonLoadMore>
      }

    </div>
  );
}

export default Books;