import "./Portfolio.css"
import StarDividerBlack from "../component/StarDividerBlack"
import { useState } from "react"
import img1 from "../React App/imgi_2_cabin.4417330275f78faa31c3.png"
import img2 from "../React App/imgi_3_cake.6554473016d32b343f02.png"
import img3 from "../React App/imgi_4_circus.494a4a914b5471b41f3e.png"
import img4 from "../React App/imgi_5_game.a940b57aa7bab2eacc52.png"
import img5 from "../React App/imgi_6_safe.01792c0bdc342bf4bf9c.png"
import img6 from "../React App/imgi_7_submarine.48c9704ca7f8ce901038.png"
import PortfolioItem from "./PortfolioItem"

export default function Portfolio() {

  const [Pitems, setPItems] = useState([
    {
        image: img1, Name: "LOG CABIN", Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    },
    {
        image: img2, Name: "TASTY CAKE", Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    },
    {
        image: img3, Name: "CIRCUS TENT", Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    },
    {
        image: img4, Name: "CONTROLER", Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    },
    {
        image: img5, Name: "LOCKED SAFE", Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    },
    {
        image: img6, Name: "SUBMARINE", Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    }
  ]);


    
    


  return <>
  <section className="Portfolio">
    <div className='container'>
        <h2>PORTFOLIO</h2>
        <StarDividerBlack/>
        <div className="row mt-5">
            {
            Pitems.map((item, index) => {
                return <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-3">
                        <PortfolioItem item={item} index={index}/>
                    </div>
                })
            }
            
        </div>
    </div>
  </section>
  </>
}
