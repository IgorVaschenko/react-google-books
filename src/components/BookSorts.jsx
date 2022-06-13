import React, { useState } from 'react'
import MySelect from './UI/select/MySelect'

const BookSorts = ({setCategory, setSearchRelevant}) => {

    const [selectedSortByCategories, setSelectedSortByCategories] = useState('')
    const [selectedSortByRelevant, setSelectedSortByRelevant] = useState('')

    const sortBooksByCategory = (sort) => {
        setSelectedSortByCategories(sort)
        setCategory(sort)
    }

    const sortBooksByRelevant = (sort) => {
        setSelectedSortByRelevant(sort)
        setSearchRelevant(sort)
    }

    return (
        <div className='book__sort'>

            <MySelect
                value={selectedSortByCategories}
                onChange={sort => sortBooksByCategory(sort)}
                options={[
                    { value: 'subject:art+', name: 'art' },
                    { value: 'subject:biography+', name: 'biography' },
                    { value: 'subject:computers+', name: 'computers' },
                    { value: 'subject:history+', name: 'history' },
                    { value: 'subject:medical+', name: 'medical' },
                    { value: 'subject:poetry+', name: 'poetry' },
                ]}
                defaultValue={{ value: '', name: 'all' }}
            />

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