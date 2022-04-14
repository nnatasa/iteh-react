import React, {Component} from 'react';

import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('mario');

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {title, description, author};
  }
  return (
    <div className="create">
      <h2>Dodaj novu knjigu</h2>
      <form onSubmit={handleSubmit}>
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
        <option value="jjzmaj">Jovan Jovanovic Zmaj</option>
          <option value="ivoandric">Ivo Andric</option>
          <option value="mesaselimovic">Mesa Selimovic</option>
        </select>
        <button type="btn">Dodaj</button>
      </form>
    </div>
  );
}
 
export default Create;