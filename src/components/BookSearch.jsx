import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'


function BookSearch({ setBeginSearch, category, setSearchBook }) {

    const [search, setSearch] = useState('')

    const handlerEnter = (event) => {
        if (event.key === 'Enter' && !category) {
            setSearchBook(`?q=${search}`)
            setBeginSearch(true)
        } else if (event.key === 'Enter' && category) {
            setSearchBook('+' + search)
            setBeginSearch(true)
        }
    }
    const handlerClick = () => {
        if (!category) {
            setSearchBook(`?q=${search}`)
            setBeginSearch(true)
        } else if (category) {
            setSearchBook('+' + search)
            setBeginSearch(true)
        }
    }

    return (
        <div className='book__search'>
            <MyInput
                type='text'
                className='input'
                placeholder='Enter book title...'
                value={search}
                onChange={(event => setSearch(event.target.value))}
                onKeyDown={handlerEnter}
            />
            < MyButton onClick={handlerClick}></MyButton>
        </div>
    )
}

export default BookSearch