import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
{/* <!-- footer --> */}
  <section className="footer-w3layouts-bottem py-lg-3 py-md-2 py-sm-3 py-2">
    <div className="container py-lg-4 py-md-4 py-sm-3 py-3">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 footer-bottom-txt">
          <h5> <a href="index.html">Dwell</a></h5>
          <p className="pt-lg-4 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do </p></div>
        <div className="col-lg-6 col-md-6 col-sm-6 footer-bottom-txt text-center">
          <div className="footer-top">
            <p><span>Address</span> : Shubhash Society, 
              <br/>Near Apna Bazar Road, Surendrangar, Gujarat.</p>
            <p className="pt-2"> <span> Phone</span> :+91 948-442-3623</p>
            <p className="pt-2">
              <span>Email</span> :
              <Link to="mailto:info@example.com">hraj29593@gmail.com</Link> </p>
          </div>
          <div className="team-icons mt-lg-4 mt-3">
            <ul>
              <li><Link to="#" className="facebook">
           <span className="fa fa-facebook"></span> </Link> </li>
              <li><Link to="#" className="twitter">
                  <span className="fa fa-twitter"></span> </Link></li>
              <li><Link to="#" className="rss">
                  <span className="fa fa-rss"></span></Link></li>
            </ul></div>
        </div></div>
      {/* <!-- move icon --> */}
      <div className="text-center mt-lg-5 mt-md-4 mt-3">
        <Link to="#home" className="move-top text-center mt-3">
   <span className="fa fa-arrow-up" aria-hidden="true"></span> </Link>
      </div>
      {/* <!--//move icon --> */}
</div>
  </section>
  {/* <!-- footer-copy-right --> */}
<footer className="bottem-wthree-footer text-center py-md-4 py-3">
  <div className="bottom-copies text-center">
    <div className="container">
      <p className="copy-footer-29">© 2022 REALSTASTE. All rights reserved | Designed by <a
          href="https://w3layouts.com">SHAH HARSH</a></p>
    </div>
  </div>
  </footer>
    </>
  )
}
