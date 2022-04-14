import { useState, useEffect } from "react";
import Books from "./Books";
import React, {Component} from 'react';

const Home = () => {
    
    const [books, setBooks] = useState([
        {title: 'Na Drini cuprija', description: 'Nobelova nagrada za knjizevnost', author: 'Ivo Andric', id: 1},
        {title: 'Djulici', description: 'Zbirka pesama',author: 'Jovan Jovanovic Zmaj', id: 2},
        {title: 'Dervis i smrt', description: 'Sjajan roman', author: 'Mesa Selimovic', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBooks = books.filter(book => book.id !== id);
        setBooks(newBooks);
    }


    return ( 
        <div className="home">
          <Books books = {books} handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;