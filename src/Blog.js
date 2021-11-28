 import React from 'react'
 import Iframe from 'react-iframe';
 import "./Blog.css";

 function Blog() {
   return (
     <div className="blog">
       <div className="blog__title">
         <h1>個人的なブログ書くよ。。。</h1>
       </div>

       <Iframe
         className="note-embed"
         url="https://note.com/embed/notes/nc899cc94060d"
       />

       <Iframe
         className="note-embed"
         url="https://note.com/embed/notes/nc899cc94060d"
       />

       <Iframe
         className="note-embed"
         url="https://note.com/embed/notes/nc899cc94060d"
       />

       <Iframe
         className="note-embed"
         url="https://note.com/embed/notes/nc899cc94060d"
       />
     </div>
   );
 }
 
 export default Blog
 