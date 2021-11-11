import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Member.css';
import 'animate.css'
import { Link } from "react-router-dom";
import stuart from "../img/2d-1.jpg"
import murdoc from "../img/murdoc-niccals-1.jpg"
import russel from "../img/russel-hobbs-1.jpg"
import noondle from "../img/noondle.jpg"
function Member(){ //Data is prop of the component CardMembers


      return(
       <div>
        <h1 className="text-center text-light">MIEMBROS</h1>
         <div className="mb-5 container-fluid">
         
        <div className="flex-container animate__animated animate__fadeInLeft">
        
        <div className="menu-member ">
        <Link to={`/currentMember/${2}`}>
        <img src={stuart}  />
        </Link>
        </div>
        <div className="menu-member">
        <Link to={`/currentMember/${1}`}>
        <img src={murdoc}  />
        </Link>
        </div>
        <div className="menu-member">
        <Link to={`/currentMember/${3}`}>
        <img src={russel}  />
        </Link>
        </div>
        <div className="menu-member">
        <Link to={`/currentMember/${4}`}>
        <img src={noondle}  />
        </Link>
        </div>
        </div>
   </div>
</div>
   
  
  )
   


};
export default Member;