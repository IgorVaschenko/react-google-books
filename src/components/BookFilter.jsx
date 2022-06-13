import React from 'react'
import BookSorts from './BookSorts'
import BookSearch from './BookSearch'

const BookFilter = ({ handlerSearch, setSearchBook, setCategory, setSearchRelevant }) => {
    return (
        <div className='book__filter'>
            <h1>Search for books</h1>

            <BookSearch
                handlerSearch={handlerSearch}
                setSearchBook={setSearchBook}
            />

            <BookSorts
                setSearchRelevant={setSearchRelevant}
                setCategory={setCategory}
            />
        </div>
    )
}

export default BookFilter