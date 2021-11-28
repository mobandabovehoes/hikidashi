import React from "react";
import "./Booklist.css";
import { nakata__data } from "./books";
import SpecificBook from "./Book";

function Booklistnakata() {
  return (
    <section className="booklist">
      {nakata__data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

export default Booklistnakata
