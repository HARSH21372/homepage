import React from 'react'
import { Link } from 'react-router-dom'
export default function Team() {
  return (
    <>
     {/* // <!-- team --> */}
  <section className="team py-lg-4 py-md-3 py-sm-3 py-3" id="team">
    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
      <h3 className="title mb-md-4 mb-sm-3 mb-3 ">Our Team</h3>
      <div className="row">
        <div className="col-lg-4 my-3 team-by-team">
          <div className="wthree-team-work ">
            <img src="images/t2.jpg" alt="news image" className="img-fluid"/>
            <h4 className="mt-3 mb-2">Kayla Deo</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non Lorem ipsum
              dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet</p>
            <div className="team-icons mt-lg-4 mt-3">
              <ul>
                <li><a href="#" className="facebook">
                  <span className="fa fa-facebook"></span> </a></li>
                <li><a href="#" className="twitter">
                    <span className="fa fa-twitter"></span> </a> </li>
                <li><a href="#" className="rss">
                    <span className="fa fa-rss"></span> </a></li>
              </ul>
            </div> </div> </div>
        <div className="col-lg-4 my-3 team-by-team">
          <div className="wthree-team-work ">
            <img src="images/t1.jpg" alt="news image" className="img-fluid"/>
            <h4 className="mt-3 mb-2">Jonn Jozz</h4>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non Lorem ipsum
              dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet</p>
            <div className="team-icons mt-lg-4 mt-3">
              <ul>
                 <li><a href="#" className="facebook">
                    <span className="fa fa-facebook"></span></a></li>
                <li><a href="#" className="twitter">
                    <span className="fa fa-twitter"></span> </a></li>
                <li><a href="#" className="rss">
                    <span className="fa fa-rss"></span></a></li>
              </ul>
            </div>
          </div>
</div>
        <div className="col-lg-4 my-3 team-by-team">
          <div className="wthree-team-work ">
            <img src="images/t3.jpg" alt="news image" className="img-fluid"/>
<h4 className="mt-3 mb-2">Emily Sam</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non Lorem ipsum
              dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet</p>
            <div className="team-icons mt-lg-4 mt-3">
              <ul>
                <li><a href="#" className="facebook">
                    <span className="fa fa-facebook"></span> </a></li>
                <li> <a href="#" className="twitter">
                    <span className="fa fa-twitter"></span></a></li>
                <li><a href="#" className="rss">
                    <span className="fa fa-rss"></span></a></li>
              </ul></div></div>
 </div>
      </div>
    </div>
  </section>
  {/* <!--//team --> */}
   </>
  )
}
