
import React from 'react';
import '../styles/contact.css';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

import Contactform from './Contactform'

function Contact() {

    return (
      <>
        <div className="header-contact">

            
            <div className="container-fuild py-5 inner-header flex"  >
           
            <h1 >Share your REPO !!</h1>
            <h1>Get connected to our insights</h1>
            </div>

           
            </div>
            <Contactform/>
            <Footer/>
      
      
      
      </>

    );
}
export default Contact;