import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookItem = ({ book }) => {

  const router = useNavigate()

  return (
    <div className='book' onClick={() => router(`/books/${book.id}`)}>
      <div className='book__img'>
        <img
          src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''}
        />
      </div>
      <div className='book__categories'>
        {book.volumeInfo.categories !== undefined ? book.volumeInfo.categories[0] : ''}
      </div>
      <div className='book__title'>
        {book.volumeInfo.title !== undefined ? book.volumeInfo.title : ''}
      </div>
      <div className='book__authors'>
        {book.volumeInfo.authors !== undefined ? book.volumeInfo.authors : ''}
      </div>
    </div>
  );
}

export default BookItem;