import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './components/Create';
import BookDetails from './components/BookDetails';
import React, {Component} from 'react';
import { useState, useEffect } from "react";


function App() {

  const [books, setBooks] = useState([
    {title: 'Na Drini cuprija', description: 'Nobelova nagrada za knjizevnost', author: 'Ivo Andric', id: 1},
    {title: 'Djulici', description: 'Zbirka pesama',author: 'Jovan Jovanovic Zmaj', id: 2},
    {title: 'Dervis i smrt', description: 'Sjajan roman', author: 'Mesa Selimovic', id: 3}
]);

const handleDelete = (id) => {
    const newBooks = books.filter(book => book.id !== id);
    setBooks(newBooks);
}
 const updateBooks = (book) =>{
   setBooks([...books, book]);
 }
 
  return (

    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
        <Route exact path="/">
            <Home books = {books} handleDelete={handleDelete}/>
        </Route>
        <Route path="/create">
            <Create updateBooks = {updateBooks}/>
        </Route>
        <Route path="/book/:id">
            <BookDetails/>
        </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
