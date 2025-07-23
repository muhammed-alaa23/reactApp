import './Contact.css'
import StarDividerBlack from '../component/StarDividerBlack'

export default function Contact() {
  return <>
    <section className='Contact'>
      <div className="container">
        <h2 className="text-uppercase">Contact me</h2>
      <StarDividerBlack/>
      <div className="row">
        <div className="col-lg-8 mx-auto mt-5">
            <div>
                <div className="form-group">
                    <input type="text" placeholder="Name" className="p-3 mb-3 border-none width-100 form-control shadow-none"></input>
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email Address" className="p-3 mb-3 border-none width-100 form-control shadow-none"></input>
                </div>
                <div className="form-group">
                    <input type="tel" placeholder="Phone Number" className="p-3 mb-3 border-none width-100 form-control shadow-none"></input>
                </div>
                <textarea className="form-control" placeholder="Message" spellCheck="false" aria-label="To enrich screen reader interactions, please activate Accessibility in Grammarly extension settings"></textarea>
                <div className="form-group">
                    <input type="submit" value="Send" className="btn btn-primary"></input>
                </div>
            </div>
        </div>
      </div>
        </div>

    </section>
  </>
}
