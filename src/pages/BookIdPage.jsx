import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import BookService from '../API/BookService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import BookFilter from '../components/BookFilter';
import BookById from '../components/BookById';

const BookIdPage = () => {
    const params = useParams()
    const router = useNavigate()
    const [bookById, setBookById] = useState()
    const [fetchById, isIdLoading, isIdError] = useFetching(async id => {
        const response = await BookService.getById(id)
        setBookById(response.data)
    })

    useEffect(() => {
        fetchById(params.id)
    }, [])

    return (
        <div>
            <div onClick={() => router(`/books`)}>
                <BookFilter />
            </div>

            {isIdError &&
                <h1 style={{ textAlign: 'center' }}>Server error</h1>}

            {isIdLoading || bookById === undefined
                ? <Loader />
                : <BookById bookById={bookById} />
            }
        </div>
    )
}

export default BookIdPage