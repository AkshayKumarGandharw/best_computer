  import React from 'react';
  import '../Home/Home';
  import Comman from '../Comman/Comman';
import Contact from '../Home/Contact/Contact';


  function Contactus(){
    return(
        <>
        <Comman props={{title: "Contact", subtitle: "Contact Us" }}/>
        <Contact/>
        
        </>
    )
  }

  export default Contactus;