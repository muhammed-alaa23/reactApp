import React from 'react'
import './About.css'
import StarDivider from "../component/StarDivider";





export default function About() {
  return <>
  <section className='About'>
    <div className="container">
        <h2 className="text-uppercase">About</h2>
        <StarDivider />
        <div className="row justify-content-center">
            <div className="col-md-12 col-lg-5">
                <p className='px-3 text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-12 col-lg-5">
                <p className='px-3 text-white'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
        </div>
    </div>

  </section>
  </>
}
