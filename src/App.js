import React from 'react'
import Home from './page/home/Home';
import About from './page/home/about/about';
import Service from './page/home/service/service';
import Gallery from './page/home/gallery/gallery';
import Team from './page/home/team/team';
import Blog from './page/home/blog/blog';
import Contact from './page/home/contact/contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

 function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/service' element={<Service/>}/>
<Route path='/gallery' element={<Gallery/>}/>
<Route path='/team' element={<Team/>}/>
<Route path='/blog' element={<Blog/>}/>
<Route path='/contact' element={<Contact/>}/>
   </Routes>
   
    <Footer/>
    </BrowserRouter>
    </>
  )
}


export default App;
