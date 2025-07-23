import StarDividerBlack from '../component/StarDividerBlack'

export default function ModalPortfolio({ item, index }) {


  return <>
    <div className="modal fade" id={`index${index}`} tabIndex="-1" aria-labelledby="portfolioModalLabel" aria-hidden="true">
      <div className="modal-dialog rounded">
        <div className="modal-content py-5 min-vh-100">
            <h3 className="display-5 fw-bolder mb-4 text-center ">{item.Name}</h3>
            <StarDividerBlack/>
            <button type="button" className="position-absolute top-0 end-0 m-3 border-0 bg-white" data-bs-dismiss="modal" aria-label="Close"><i className='fa-solid fa-xmark main-color h1'></i></button>
          <div className="modal-body">
            <div className="container">
                <figure className='my-5'>
                    <img src={item.image} alt="" className="img-fluid d-block" />
                </figure>
                <p>{item.Description}</p>
            </div>
            </div>
            <div className="modal-footer justify-content-center align-items-center border-top-0"><button type="button" className="btn btn-secondary main-background border-0 fw-bolder py-2 px-3" data-bs-dismiss="modal"><span className="fw-bolder ">X</span> Close Window</button></div>
        </div>
      </div>
    </div>
  </>
}

