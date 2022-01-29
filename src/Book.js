import React from 'react'
import "./books.css";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

 export default function Book({ img, title, author, note, url, question, youtube }) {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
     return (
       <div className="book">
         <img src={img} alt="thumbnail" />
         <h1>{title}</h1>
         <h4>{author}</h4>

         <Button onClick={handleOpen}>詳細</Button>

         <Modal
           open={open}
           onClose={handleClose}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description"
         >
           <Box className="box__style">
             <Typography
               className="modal-modal-title"
               variant="h6"
               component="h2"
             >
               {question}
             </Typography>
             <Typography className="modal-modal-description">{note}</Typography>
           </Box>
         </Modal>

         <Button>
           <a href={url} target="_blank" rel="noreferrer noopener">
             Amazon
           </a>
         </Button>
         <Button>
           <a href={youtube} target="_blank" rel="noreferrer noopener">
             Youtube
           </a>
         </Button>
       </div>
     );
   };
 


// const Book = ({ img, title, author, note, url, question }) => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const Modal = () => (
//     <Popup
//       trigger={
//         <Button className="button" onClick={handleOpen} open={open}>
//           詳細
//         </Button>
//       }
//       modal
//     >
//       {(close) => (
//         <div className="modal">
//           <Button className="close" open={open} onClose={handleClose}>
//             &times;
//           </Button>
//           <div className="header">{question}</div>
//           <div className="content">{note}</div>
//           <div className="actions">
//             <Button className="button" open={open} onClose={handleClose} >
//               閉じる
//             </Button>
//           </div>
//         </div>
//       )}
//     </Popup>
//   );

//   return (
//     <article
//       className="book"
//     >
//       <img src={img} alt="thumbnail" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>

//       <Modal />
//       <Button type="button">
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           Amazon
//         </a>
//       </Button>
//     </article>
//   );
// };

// function Books(id, title, img, price, rating) {
//   return (
//     <div className="books">
//       <div className="books__info">
//         <h5>{title}</h5>
//         <p className="books__price">
//           <small>￥</small>
//           <strong>{price}</strong>
//         </p>

//         <div className="books__rating">
//           {Array (rating)
//             .fill()
//             .map((_,i) =>(
//               <p>★</p>
//             ))}
//         </div>
//       </div>

//       <img src={img} alt="" />


//     </div>
//   );
// }
 
 