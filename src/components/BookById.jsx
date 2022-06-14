import React from 'react'
import cl from '../styles/BookIdPage.module.css'

const BookById = ({bookById}) => {
    return (
        <div className={cl.bookById}>
            <div className={cl.bookById__image}>
                <img src={bookById.volumeInfo.imageLinks !== undefined ? bookById.volumeInfo.imageLinks.thumbnail : ''} />
            </div>
            <div className={cl.bookById__info}>
                <div className={cl.bookById__categories}>
                    {bookById.volumeInfo.categories !== undefined ? bookById.volumeInfo.categories.join(' / ') : ''}
                </div>
                <div className={cl.bookById__title}>
                    {bookById.volumeInfo.title !== undefined ? bookById.volumeInfo.title : ''}
                </div>
                <div className={cl.bookById__authors}>
                    {bookById.volumeInfo.authors !== undefined ? bookById.volumeInfo.authors.join(' / ') : ''}
                </div>
                <div className={cl.bookById__description}>
                    {bookById.volumeInfo.description !== undefined ? bookById.volumeInfo.description : ''}
                </div>
            </div>
        </div>
    )
}

export default BookById