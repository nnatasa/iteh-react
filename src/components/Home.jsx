import { useState, useEffect } from "react";
import Books from "./Books";
import React, {Component} from 'react';

const Home = ({books, handleDelete}) => {
    


    return ( 
        <div className="home">
          <Books books = {books} handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;