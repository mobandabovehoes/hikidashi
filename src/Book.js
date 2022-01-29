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
             買う・見る
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
 
