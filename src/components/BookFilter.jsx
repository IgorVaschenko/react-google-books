import React from 'react'
import BookSorts from './BookSorts'
import BookSearch from './BookSearch'

const BookFilter = ({ setBeginSearch, category, setSearchBook, setCategory, setSearchRelevant }) => {
    return (
        <div className='book__filter'>
            <h1 style={{ textAlign: 'center', paddingTop: 50 }}>Search for books</h1>

            <BookSearch
                setSearchBook={setSearchBook}
                category={category}
                setBeginSearch={setBeginSearch}
            />

            <BookSorts
                setSearchRelevant={setSearchRelevant}
                setCategory={setCategory}
                setSearchBook={setSearchBook}
            />
        </div>
    )
}

export default BookFilter