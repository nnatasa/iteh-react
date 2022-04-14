import React, {Component} from 'react';

import { useState } from "react";

const Create = ({updateBooks}) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('Ivo Andric');
  const [id, setId] = useState(4);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const a = id + 1;
    setId(a);
    const book = {title, description, author, id};
    //console.log(book);
    //() => updateBooks(book);
  }
  return (
    <div className="create">
      <h2>Dodaj novu knjigu</h2>
      <form>
        <label>Naziv knjige:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Opis:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Pisac:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
        <option value="Jovan Jovanovic Zmaj">Jovan Jovanovic Zmaj</option>
          <option value="Ivo Andric">Ivo Andric</option>
          <option value="Mesa Selimovic">Mesa Selimovic</option>
        </select>
        <button>Dodaj</button>
      </form>
    </div>
  );
}
 
export default Create;