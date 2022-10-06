import React from 'react'
export default function Gallery() {
  return (
    <>
    {/* <!--Gallery--> */}
  <section className="gallery py-lg-4 py-md-3 py-sm-3 py-3" id="gallery">
    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
      <h3 className="title mb-md-4 mb-sm-3 mb-3 text-right">Our Gallery</h3>
      <div className="row gallery-info">
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
          <div className="gallery-grids">
            <a href="#gal1"> <img src="images/ab1.jpg" alt="news image" className="img-fluid"/> </a></div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
          <div className="gallery-grids">
      <a href="#gal2"><img src="images/blog1.jpg" alt="news image" className="img-fluid"/> </a></div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
          <div className="gallery-grids">
            <a href="#gal3"><img src="images/blog2.jpg" alt="news image" className="img-fluid"/> </a> </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
          <div className="gallery-grids">
            <a href="#gal4"> <img src="images/ab3.jpg" alt="news image" className="img-fluid"/> </a> </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
          <div className="gallery-grids">
            <a href="#gal5"><img src="images/ab1.jpg" alt="news image" className="img-fluid"/> </a></div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
          <div className="gallery-grids">
            <a href="#gal6"> <img src="images/blog1.jpg" alt="news image" className="img-fluid"/></a></div>
        </div> </div></div>
      </section>
       </>
  )
}
