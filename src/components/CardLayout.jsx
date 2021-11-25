import 'bootstrap/dist/css/bootstrap.min.css';
import './cardLayout.css'
import './Disk.css'
import {Card,Row,Col} from 'react-bootstrap'
import Character from './Character'


function CardLayout(ruta){ //Data is prop of the component CardMembers
let Data=Character(ruta.ruta)
  console.log(Data)  
  return(
    <div className="position container-fluid">
      {
      Data.map(function(Data){
        return(
      <Card>
        <Card.Img variant="top" src={Data.url_imagen} />
        <Card.Body>
        <Card.Title>{Data.nombre}</Card.Title>
        <Card.Text>
        {Data.about}
    </Card.Text>
    <p className="card-text"><large className="text-muted">Fecha Nacimiento:{Data.fecha_nacimiento}</large></p>
    <p className="card-text"><large className="text-muted">Lugar Nacimiento:{Data.lugar_nacimiento}</large></p>
    <p className="card-text"><large className="text-muted">Ocupacion:{Data.ocupacion}</large></p>
    <p className="card-text"><large className="text-muted">Actividad:{Data.actividad}</large></p>
        </Card.Body>
      </Card>
        )
      }
      )
    }
 </div>
      
)
    
  
  
};
export default CardLayout;