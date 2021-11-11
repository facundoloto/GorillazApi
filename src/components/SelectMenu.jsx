import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Card.css';
import { Link } from "react-router-dom";
import {Card}  from 'react-bootstrap';
import history from "../img/history.jpg"
import member  from "../img/gorillaz_425.jpg"
import disk from "../img/discos.jpg"

function SelectMenu(){

return(

<div className="center-carousel">
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={member} className="d-block w-100 h-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={history} className="d-block w-100 h-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={disk} className="d-block w-100 h-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>


)
}




export default SelectMenu;