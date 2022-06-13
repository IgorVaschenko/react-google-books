import React, { useState } from 'react'

function BookSearch({handlerSearch, setSearchBook }) {

    const [search, setSearch] = useState('')

    const handlerEnter = (event) => {
        if (event.key === 'Enter') {
            setSearchBook(search)
            handlerSearch()
        }
    }

    return (
        <div className='book__search'>
            <input
                type='text'
                className='input'
                placeholder='Enter book title...'
                value={search}
                onChange={(event => setSearch(event.target.value))}
                onKeyDown={handlerEnter}
            />
            <button onClick={() => setSearchBook(search)}>search</button>
        </div>
    )
}

export default BookSearch