import React, { useState,useEffect } from 'react';
import './card.css';
import ProductDetails from './productdetails';
import Button from './button';
 function Card(data){
  const [bookDetails, setBookDetails] = useState({
    author_name: '',
    title: '',
    first_publish_year: '',
    publisher: '',
    subject: '',
    language: ''
  });
   useEffect(()=>{
    if (data && data.data) {
      // Update state with book details
      setBookDetails({
        author_name: data.data.author_name ? data.data.author_name.toString() : 'Unknown Author',
        title: data.data.title ? data.data.title.toString() : 'Untitled',
        first_publish_year: data.data.first_publish_year ? data.data.first_publish_year.toString() : 'N/A',
        publisher: data.data.publisher ? ( data.data.publisher.toString()) : 'Unknown Publisher',
        subject: data.data.subject ? data.data.subject.toString() : 'No Subject',
        language: data.data.language ? data.data.language.toString() : 'Unknown Language'
      });
    }
   },[data]);
   

  return (
    <div className = "mainbox ">
      {/* image */}
           <div className = " image flex  flex-row color-richyellow-200 justify-content-center ">
        <img src="https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?cs=srgb&dl=book-education-knowledge-2099691.jpg&fm=jpg" alt = "book image"/>
          </div>
        {/* sidetext */}
        <div className="sidebox">
          <p className="p1"><b>{bookDetails.title}</b></p>
          <p className="p2"><b>BY: </b>{bookDetails.author_name}</p>
          <p className="p3"><b>First Publishing Year:</b> {bookDetails.first_publish_year}</p>
          <p className="p4"> <b>Publisher: </b>{bookDetails.publisher}</p>
          <p className="p5"><b> Type:</b> {bookDetails.subject}</p>
          <p className="p6"><b> Language:</b> {bookDetails.language}</p>
          <Button/>
          {/* <div className="detail">
           <ProductDetails/>
            </div> */}
          
          </div>
    </div>
  );
};
export default Card;