import "./home.css"
import logo from "../React App/imgi_1_avataaars.aa9aff02ddd0ef36a1724ecef4133df9.svg";
import StarDivider from "../component/StarDivider";
 export default function Home(){
    


 return <>
    <header className="home">
        <div className="container d-flex align-items-center flex-column">
            <div className="image">
                <img width={250}px src={logo} alt="avatar logo" /> 
            </div>
            <h1 className="fw-bolder text-white">Start framework</h1>
            
            <StarDivider />

            <p className="text-white">Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </header>
    
    </>

}