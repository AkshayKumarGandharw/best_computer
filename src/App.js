
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topnavbar from './Componets/TopNavbar/Topnavbar';
import Topheader from './Componets/TopHeader/Topheader';
import Pholoslider from './Componets/Home/Carousel/Pholoslider';
import Notice from './Componets/Home/Notice/Notice';
import Course from './Componets/Home/Course/Course';
import Home from './Componets/Home/Home';
import Footer from './Componets/Footer/Footer';
import Acc_and_tax from './Componets/Course/Acc_and_tax';
import Share_Market from './Componets/Course/Share_market';
import Computer_basic from './Componets/Course/Computer_basic';
import Pgdca_and_dca from './Componets/Course/Pgdca_and_dca';
import Spoken_english from './Componets/Course/Spoken_english';
import Video_editing from './Componets/Course/Video_editing';
import Website_design from './Componets/Course/Website_design';
import Acc_and_tax_solutions from './Componets/Course/Acc_and_tax_solutions';
import Digital_marketing from './Componets/Course/Digital_marketing';
import Graphic_design from './Componets/Course/Graphic_design';
import Acc_tax_solu_syllabus from './Componets/Download/Acc_tax_solu_syllabus';
import Acc_tax_syllabus from './Componets/Download/Acc_tax_syllabus';
import Graphic_design_syllbus from './Componets/Download/Graphic_design_syllabus';
import Website_design_syllabus from './Componets/Download/Website_design_syllabus';
import Pgdca_and_dca_syllabus from './Componets/Download/Pgdca_and_dca_syllabus';
import Spoken_english_syllabus from './Componets/Download/Spoken_english_syllabus';
import Digital_marketing_syllabus from './Componets/Download/Digital_marketing_syllabus';
import Share_market_syllabus from './Componets/Download/Share_market_syllabus';
import Computer_basic_syllabus from './Componets/Download/Computer_basic_syllabus';
import Video_editing_syllabus from './Componets/Download/Video_editing_syllabus';


function App() {
  return (
   <>
   
    <BrowserRouter>
    <Topheader/>
    <Topnavbar/>
      <Routes>
        {/* ......Home Menu......... */}
        <Route path='/' element={<Home/>}/>

        {/* ......Education Menu................. */}
        <Route path='/accandtax' element={<Acc_and_tax/>}/>
        <Route path='/sharemarket' element={<Share_Market/>}/>
        <Route path='/computerbasic' element={<Computer_basic/>}/>
        <Route path='/pgdca&dca' element={<Pgdca_and_dca/>}/>
        <Route path='/spokenenglish' element={<Spoken_english/>}/>
        <Route path='/websitedesign' element={<Website_design/>}/>
        <Route path='/vedioediting' element={<Video_editing/>}/>
        <Route path='/digitalmarketing' element={<Digital_marketing/>}/>
        <Route path='/accandtaxsolution' element={<Acc_and_tax_solutions/>}/>
        <Route path='/graphicdesign' element={<Graphic_design/>}/>

        {/* .......Download Menu............ */}
        <Route path='/accandtax-syllabus' element={<Acc_tax_syllabus/>}/>
        <Route path='/accandtaxsolutions-syllabus' element={<Acc_tax_solu_syllabus/>}/>
        <Route path='/graphicdesign-syllabus' element={<Graphic_design_syllbus/>}/>
        <Route path='/pgdca&dca-syllabus' element={<Pgdca_and_dca_syllabus/>}/>
        <Route path='/websitedesign-syllabus' element={<Website_design_syllabus/>}/>
        <Route path='/videoediting-syllabus' element={<Video_editing_syllabus/>}/>
        <Route path='/spokenenglish-syllabus' element={<Spoken_english_syllabus/>}/>
        <Route path='/sharemarket-syllabus' element={<Share_market_syllabus/>}/>
        <Route path='/digitalmarketing-syllabus' element={<Digital_marketing_syllabus/>}/>
        <Route path='/computerbasic-syllabus' element={<Computer_basic_syllabus/>}/>


        
        

       
      </Routes>
      <Footer/>
    </BrowserRouter>
   
   </>
  );
}

export default App;
