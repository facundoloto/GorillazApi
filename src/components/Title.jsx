import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import logo from "../img/gorillaz.png"
function Title() { //el nombre de esta funcion es el componente
    return (
      <div className="Title" style={{background:'none'}}>
        <img src={logo} />
        </div>
    );
  }

  export default Title;
