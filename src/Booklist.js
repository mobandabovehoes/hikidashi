import React from 'react'
import "./Booklist.css";
import {data} from "./books"
import SpecificBook from './Book'

function Booklist() {
  return (
    <section className="booklist">
      {data.map((book, index) => {
        return (
          <SpecificBook key={book.id} {...book}>
             
          </SpecificBook>
        );
      })}
      
    </section>
  );
}

export default Booklist
