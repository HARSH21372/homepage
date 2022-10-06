import React from 'react';
import { Link } from 'react-router-dom'
import About from './about/about';
import Service from './service/service';
import Gallery from './gallery/gallery';
import Team from './team/team';
import Blog from './blog/blog';
import Contact from './contact/contact';



function Home() {
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
              dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing</h6>
          </div>
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


{/* <!-- service --> */} 
<section className="service py-lg-4 py-md-3 py-sm-3 py-3" id="service">
    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
      <h3 className="title mb-md-4 mb-sm-3 mb-3 text-right">Related To Work</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree my-3">
          <div className="ser-fashion-grid ">
            <div className="row pb-3">
              <div className="about-icon col-lg-3 text-center">
                <span className="fa fa-clock-o" aria-hidden="true"></span>
              </div>
              <div className="ser-sevice-grid col-lg-9">
                <h4>Quick Deals</h4>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree my-3">
          <div className="ser-fashion-grid ">
            <div className="row pb-3">
              <div className="about-icon col-lg-3 text-center">
                <span className="fa fa-thumbs-o-up" aria-hidden="true"></span>
              </div>
              <div className="ser-sevice-grid col-lg-9">
                <h4>Experience</h4>
              </div>
            </div>
            <p/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur<p/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree my-3">
          <div className="ser-fashion-grid">
            <div className="row pb-3">
              <div className="about-icon col-lg-3 text-center">
                <span className="fa fa-building" aria-hidden="true"></span>
              </div>
              <div className="ser-sevice-grid col-lg-9">
                <h4>Construction</h4>
              </div>
            </div>
            <p/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur<p/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree my-3">
          <div className="ser-fashion-grid ">
            <div className="row pb-3">
              <div className="about-icon col-lg-3 text-center">
                <span className="fa fa-simle-o" aria-hidden="true"></span>
              </div>
              <div className="ser-sevice-grid col-lg-9">
                <h4>Happy Clients</h4>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree my-3">
          <div className="ser-fashion-grid ">
            <div className="row pb-3">
              <div className="about-icon col-lg-3 text-center">
                <span className="fa fa-money" aria-hidden="true"></span>
              </div>
              <div className="ser-sevice-grid col-lg-9">
                <h4>Property Sale</h4>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree my-3">
          <div className="ser-fashion-grid ">
            <div className="row pb-3">
              <div className="about-icon col-lg-3 text-center">
                <span className="fa fa-laptop" aria-hidden="true"></span>
              </div>
              <div className="ser-sevice-grid col-lg-9">
                <h4>Online Sale</h4>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!--Our Advantages--> */}
  <section className="about-two py-lg-4 py-md-3 py-sm-3 py-3">
    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
      <h3 className="title mb-md-4 mb-sm-3 mb-3">Our Advantages</h3>
      <div className="about-para-txt">
        <h6>sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt
          ut labore et consectetur adipiscing sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing</h6>
      </div>
      <div className="row my-md-4 my-3">
        <div className="col-lg-6">
          <img src="images/ab3.jpg" alt="news image" className="img-fluid"/>

        </div>
        <div className="col-lg-6 w3layouts-using-txt">
          <p>sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt
            ut labore et consectetur adipiscing sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing</p>
          <h6 className="mt-lg-4 mt-3"> Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing sed do eiusmod tempor
            incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et consectetur
            adipiscing</h6>
        </div>
      </div>
    </div>
  </section>

  {/* <!--//Our Advantages --> */}
  {/* <!--we are ready --> */}
  <section className="banner-image-two py-lg-4 py-md-3 py-sm-3 py-3 text-center">
    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
      <h2>We Are Ready To Work With You</h2>
      <p className="mt-2">sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt
        ut labore et consectetur adipiscing sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum</p>
      <div className="view-buttn mt-md-4 mt-sm-4 mt-3">
        <a href="#contact" className="btn">Contact Us</a>
      </div>
    </div>
  </section>
  {/* <!--we are ready--> */}

   {/* <!--Gallery--> */}
   <section className="gallery py-lg-4 py-md-3 py-sm-3 py-3" id="gallery">
    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
      <h3 className="title mb-md-4 mb-sm-3 mb-3 text-right">Our Gallery</h3>
      <div className="row gallery-info">
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
          <div className="gallery-grids">
            <a href="#gal1">
              <img src="images/ab1.jpg" alt="news image" className="img-fluid"/>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
          <div className="gallery-grids">
            <a href="#gal2">
              <img src="images/blog1.jpg" alt="news image" className="img-fluid"/>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
          <div className="gallery-grids">
            <a href="#gal3">
              <img src="images/blog2.jpg" alt="news image" className="img-fluid"/>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
          <div className="gallery-grids">
            <a href="#gal4">
              <img src="images/ab3.jpg" alt="news image" className="img-fluid"/>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
          <div className="gallery-grids">
            <a href="#gal5">
              <img src="images/ab1.jpg" alt="news image" className="img-fluid"/>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
          <div className="gallery-grids">
            <a href="#gal6">
              <img src="images/blog1.jpg" alt="news image" className="img-fluid"/>
            </a>
          </div>
        </div>
        </div>
      </div>
      </section>

      
  {/* // <!--//Gallery--> */}
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
                <li>
                  <a href="#" className="facebook">
                    <span className="fa fa-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <span className="fa fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="rss">
                    <span className="fa fa-rss"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="col-lg-4 my-3 team-by-team">
          <div className="wthree-team-work ">
            <img src="images/t1.jpg" alt="news image" className="img-fluid"/>
            <h4 className="mt-3 mb-2">Jonn Jozz</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non Lorem ipsum
              dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet</p>
            <div className="team-icons mt-lg-4 mt-3">
              <ul>
                <li>
                  <a href="#" className="facebook">
                    <span className="fa fa-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <span className="fa fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="rss">
                    <span className="fa fa-rss"></span>
                  </a>
                </li>
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
                <li>
                  <a href="#" className="facebook">
                    <span className="fa fa-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <span className="fa fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="rss">
                    <span className="fa fa-rss"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  {/* <!--//team --> */}

  {/* <!--blog --> */}
  <section className="about-two py-lg-4 py-md-3 py-sm-3 py-3" id="blog">
    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
      <h3 className="title mb-md-4 mb-sm-3 mb-3 text-right">Our Latest Blog</h3>
      <div className="row">
        <div className="col-lg-6 col-md-6 blog-left-sub my-3">
          <div className="back-ground-color">
            <div className="color-img-three">
              <img src="images/ab1.jpg" alt="news image" className="img-fluid"/>
            </div>
            <div className="blog-date-grid mt-3">
              <ul>
                <li className="mr-3">
                  <a href="#about">jan 2019/7</a>
                </li>
                <li>
                  <a href="#about">Comments 5</a>
                </li>
              </ul>
            </div>
            <div className="blog-left-wthree mt-lg-4 mt-3">
              <h4 className="pb-3">
                <a href="#about">Lorem ipsum dolor sit amet consectetur adipiscing elit</a>
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non Lorem
                ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="blog-buttn mt-md-4 mt-3">
              <a href="#about" className=" scroll">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 blog-left-sub my-3">
          <div className="back-ground-color">
            <div className="color-img-three">
              <img src="images/ab3.jpg" alt="news image" className="img-fluid"/>
            </div>
            <div className="blog-date-grid mt-3">
              <ul>
                <li>
                  <a href="#about">jan 2019/7</a>
                </li>
                <li>
                  <a href="#about">Comments 5</a>
                </li>
              </ul>
            </div>
            <div className="blog-left-wthree mt-lg-4 mt-3">
              <h4 className="pb-3">
                <a href="#about">Lorem ipsum dolor sit amet consectetur adipiscing elit</a>
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non Lorem
                ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="blog-buttn mt-md-4 mt-3">
              <a href="#about" className=" scroll">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-lg-5 mt-md-4 mt-sm-4">
        <div className="col-lg-6 col-md-6 blog-left-sub my-3">
          <div className="back-ground-color">
            <div className="color-img-three">
              <img src="images/blog1.jpg" alt="news image" className="img-fluid"/>
            </div>
            <div className="blog-date-grid mt-3">
              <ul>
                <li className="mr-3">
                  <a href="#about">jan 2019/7</a>
                </li>
                <li>
                  <a href="#about">Comments 5</a>
                </li>
              </ul>
            </div>
            <div className="blog-left-wthree mt-lg-4 mt-3">
              <h4 className="pb-3">
                <a href="#about">Lorem ipsum dolor sit amet consectetur adipiscing elit</a>
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non Lorem
                ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="blog-buttn mt-md-4 mt-3">
              <a href="#about" className=" scroll">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 blog-left-sub my-3">
          <div className="back-ground-color">
            <div className="color-img-three">
              <img src="images/blog2.jpg" alt="news image" className="img-fluid"/>
            </div>
            <div className="blog-date-grid mt-3">
              <ul>
                <li>
                  <a href="#about">jan 2019/7</a>
                </li>
                <li>
                  <a href="#about">Comments 5</a>
                </li>
              </ul>
            </div>
            <div className="blog-left-wthree mt-lg-4 mt-3">
              <h4 className="pb-3">
                <a href="#about">Lorem ipsum dolor sit amet consectetur adipiscing elit</a>
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non Lorem
                ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="blog-buttn mt-md-4 mt-3">
              <a href="#about" className=" scroll">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- //blog --> */}
  {/* <!--we are ready --> */}
  <section className="banner-image-two py-lg-4 py-md-3 py-sm-3 py-3 text-center">
    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
      <h5> Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et consectetur ipsum dolor sit amet Lorem ipsum dolor</h5>

    </div>
  </section>
  {/* <!--we are ready--> */}
    {/* <!-- contact --> */}

  <section className="contact py-lg-4 py-md-3 py-sm-3 py-3" id="contact">
    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
      <h3 className="title mb-md-4 mb-sm-3 mb-3">Get In Touch</h3>

      <form action="#" method="post">
        <div className="row">
          <div className="col-lg-6 col-md-6 form-group contact-forms">
            <input type="text" className="form-control" placeholder="First Name" required=""/>
          </div>
          <div className="col-lg-6 col-md-6 form-group contact-forms">
            <input type="text" className="form-control" placeholder="Last Name" required=""/>
          </div>
          <div className="col-lg-6 col-md-6 form-group contact-forms">
            <input type="email" className="form-control" placeholder="Email" required=""/>
          </div>
          <div className="col-lg-6 col-md-6 form-group contact-forms">
            <input type="text" className="form-control" placeholder="Phone" required=""/>
          </div>
        </div>
        <div className=" form-group contact-forms">
          <textarea className="form-control" placeholder="Meassage" required=""></textarea>
        </div>
        <button type="submit" className="btn sent-butnn btn-lg">Send</button>

      </form>
    </div>
  </section>
  {/* <!--//map --> */}
  <section>
    <div className="container-fulid">
      <div className="address_mail_footer_grids">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58882.2116545023!2d71.61146195602626!3d22.723103068160118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395941025ef233e7%3A0x211c45f936c8cb52!2sSurendranagar%20Tower!5e0!3m2!1sen!2sin!4v1663496987572!5m2!1sen!2sin">
      </iframe>
      </div>
    </div>
  </section>
  {/* <!-- map --> */}
  {/* <!-- //contact --> */}
 
  
  </>

  )
}
export default Home