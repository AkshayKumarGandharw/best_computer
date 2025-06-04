    import React from 'react';
import { Carousel } from 'react-bootstrap';
import Pholoslider from './Carousel/Pholoslider';
import Notice from './Notice/Notice';
import Course from './Course/Course';
import Status from './Status/Status';
import Gallery from './Gallery/Gallery';
import Bulk_Message from './BulkMessage/Bulk_Message';
import Contact from './Contact/Contact';

    
    function Home() {
      return (
        <>
       <Pholoslider/>
       <Notice/>
       <Course/>
       <Gallery/>
       <Status/>
       <Contact/>
        </>
      )
    }
    
    export default Home;