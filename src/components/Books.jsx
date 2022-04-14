import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Books = ({books, handleDelete}) => {
     

    return(
        <div className="blog-list">
              {books.map((book) => (
                <div className="blog-preview" key={book.id}>

                    <h2>Naziv: {book.title}</h2>
                    <p1>Pisac: {book.author}</p1>
                    <p1> <br/></p1>
                    <p1> <br/></p1><button className='delete-btn' onClick={() => handleDelete(book.id)}>Obrisi knjigu</button>
                </div>
            ))}
        </div>
      );
}
 
export default Books;