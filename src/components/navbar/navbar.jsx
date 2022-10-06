import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (   <>
  <div class="banner-left-side " id="home">
<div class=" banner-two-img">
  <div class="logo">
    <h1> <a href="index.html">Dwell</a></h1> </div>
  {/* <!-- social-icons --> */}
  <div class="social-icons"> <ul>
      <li><a href="#" class="facebook"><span class="fa fa-facebook"></span></a></li>
      <li><a href="#" class="twitter"><span class="fa fa-twitter"></span></a></li>
      <li><a href="#" class="rss"><span class="fa fa-rss"></span></a> </li></ul> </div>
          <nav>
    <ul id="menu">
     <li> <input id="check02" type="checkbox" name="menu" />
        <label for="check02">
          <span class="fa fa-bars" aria-hidden="true"></span></label>
        <ul class="submenu">
          <li><Link to="/" class="active">Home</Link></li>
          <li><Link to="/About">About Me</Link></li>
          <li><Link to="/service">Services</Link> </li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li> <Link to="/team">Team</Link></li>
          <li> <Link to="/blog">Blog</Link> </li>
          <li> <Link to="/contact">Contact Me</Link></li>
        </ul></li> </ul></nav>
{/* <!-- //menu --> */}
</div><div class="container">
  <div class="banner-right-txt ">
    <h4>The best way to find
      <br/>your home</h4>
    <div class="view-buttn mt-lg-5 mt-md-4 mt-sm-4 mt-3">
      <a href="#contact" class="btn">Contact Us</a>
    </div></div></div></div>
  </>
  )   }
