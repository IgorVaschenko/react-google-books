import React from 'react';

const BookItem = ({book}) => {
    return ( 
        <div className='book'>
        <div className='book__content'>
          <div>
            <img src={book.volumeInfo.imageLinks.smallThumbnail} />
          </div>
          <a href='categories'>{book.volumeInfo.categories}</a>
          <p>id={book.id}</p>

          <h2>
            {book.volumeInfo.title}
          </h2>
          <h4>{book.volumeInfo.authors}</h4>
        </div>
      </div>
     );
}
 
export default BookItem;