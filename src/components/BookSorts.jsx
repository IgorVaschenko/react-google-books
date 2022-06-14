import React, { useState } from 'react'
import MySelect from './UI/select/MySelect'

const BookSorts = ({ setSearchBook, setCategory, setSearchRelevant }) => {

    const [selectedSortByCategories, setSelectedSortByCategories] = useState('')
    const [selectedSortByRelevant, setSelectedSortByRelevant] = useState('')

    const sortBooksByCategory = (sort) => {
        setSelectedSortByCategories(sort)
        setCategory(sort)
        setSearchBook('')
    }

    const sortBooksByRelevant = (sort) => {
        setSelectedSortByRelevant(sort)
        setSearchRelevant(sort)
    }

    return (
        <div className='book__sort'>

            <h3>Categories </h3>
            <MySelect
                value={selectedSortByCategories}
                onChange={sort => sortBooksByCategory(sort)}
                options={[
                    { value: '?q=subject:art', name: 'ART' },
                    { value: '?q=subject:biography', name: 'BIOGRAPHY' },
                    { value: '?q=subject:computers', name: 'COMPUTERS' },
                    { value: '?q=subject:history', name: 'HISTORY' },
                    { value: '?q=subject:medical', name: 'MEDICAL' },
                    { value: '?q=subject:poetry', name: 'POETRY' },
                ]}
                defaultValue={{ value: '', name: 'all' }}
            />

            <h3>Sorting by </h3>
            <MySelect
                value={selectedSortByRelevant}
                onChange={sort => sortBooksByRelevant(sort)}
                options={[
                    { value: 'newest', name: 'newest' },
                ]}
                defaultValue={{ value: 'relevance', name: 'relevance' }}
            />
        </div>
    )
}

export default BookSorts