import React from 'react'
import { Link } from 'react-router-dom'
export default function Contact() {
  return (
    <>
   {/* <!-- contact --> */}
<section className="contact py-lg-4 py-md-3 py-sm-3 py-3" id="contact">
    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
      <h3 className="title mb-md-4 mb-sm-3 mb-3">Get In Touch</h3>
 <form action="#" method="post">
        <div className="row">
          <div className="col-lg-6 col-md-6 form-group contact-forms">
            <input type="text" className="form-control" placeholder="First Name" required=""/></div>
          <div className="col-lg-6 col-md-6 form-group contact-forms">
            <input type="text" className="form-control" placeholder="Last Name" required=""/> </div>
          <div className="col-lg-6 col-md-6 form-group contact-forms">
            <input type="email" className="form-control" placeholder="Email" required=""/></div>
          <div className="col-lg-6 col-md-6 form-group contact-forms">
            <input type="text" className="form-control" placeholder="Phone" required=""/></div> </div>
        <div className=" form-group contact-forms">
          <textarea className="form-control" placeholder="Meassage" required=""></textarea></div>
        <button type="submit" className="btn sent-butnn btn-lg">Send</button>
</form></div>
  </section>
  {/* <!--//map --> */}
  <section>
    <div className="container-fulid">
      <div className="address_mail_footer_grids">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58882.2116545023!2d71.61146195602626!3d22.723103068160118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395941025ef233e7%3A0x211c45f936c8cb52!2sSurendranagar%20Tower!5e0!3m2!1sen!2sin!4v1663496987572!5m2!1sen!2sin"></iframe>
      </div></div>
  </section>
  {/* <!-- map --> */}
</>
  )
}
