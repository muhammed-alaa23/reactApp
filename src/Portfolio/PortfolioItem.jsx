import "./Portfolio.css"
import ModalPortfolio from './ModalPortfolio';





export default function PortfolioItem({ item , index }) {
    




  return <>
    <div  className="portfolio_items">
        <div className="portfolio_img_items" data-bs-toggle="modal" data-bs-target={`#index${index}`}>
          <img src={item.image} alt={item.Name} />
        </div>
        <ModalPortfolio item={item} index={index} />
    </div>
    
  </>
}
