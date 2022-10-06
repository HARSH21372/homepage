import React from 'react'
export default function About() {
  return (
    <>
{/* <!-- banner --> */}
    <section className="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
      <div className="row">
        <div className="col-lg-6 about-two-grids">
          <h3 className="title mb-md-4 mb-sm-3 mb-3">Few Words About Us</h3>
          <div className="about-para-txt">
            <h6>sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt
              ut labore et consectetur adipiscing sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing</h6> </div>
          <div className="about-para-txt mt-md-4 mt-sm-3 mt-3">
            <p>sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt
              ut labore et consectetur adipiscing sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing</p>
            <h6 className="mt-2">sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt
              ut labore et consectetur adipiscing sed do eiusmod</h6>
          </div>
        </div>
        <div className="col-lg-6 about-imgs-txt position-relative">
          <img src="images/ab1.jpg" alt="news image" className="img-fluid"/>
          <div className=" about-imgs-two">
            <img src="images/ab2.jpg" alt="news image" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- //about -->*/}

   </>
  )
}


