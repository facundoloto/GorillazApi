import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Member.css';
import 'animate.css'
import { Link } from "react-router-dom";
import stuart from "../img/2d-1.jpg"
import murdoc from "../img/murdoc-niccals-1.jpg"
import russel from "../img/russel-hobbs-1.jpg"
import noondle from "../img/noondle.jpg"
import paula from "../img/OriginalPaula.png"
import del from "../img/del.png"
import cyber from "../img/cyborg-noodle.png"
import ace from "../img/Ace5Fase.jpg"
function Member(){ //Data is prop of the component CardMembers


      return(
       <div>
        
         <h1 className="text-center text-light">Miembros</h1>
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
   <div className="container">
   <h1 className="text-center text-light">Ex-Miembros</h1>
   <div className="mb-5 container-fluid">
   
         <div className="flex-container animate__animated animate__fadeInLeft">
         
         <div className="menu-member ">
         <Link to={`/ExMember/${1}`}>
         <img src={paula}  />
         </Link>
         </div>
         <div className="menu-member">
         <Link to={`/ExMember/${2}`}>
         <img src={del}  />
         </Link>
         </div>
         <div className="menu-member">
         <Link to={`/ExMember/${3}`}>
         <img src={cyber}  />
         </Link>
         </div>
         <div className="menu-member">
         <Link to={`/ExMember/${4}`}>
         <img src={ace}  />
         </Link>
         </div>
         </div>
    </div>
    </div>
</div>
   
  
  )
   


};
export default Member;