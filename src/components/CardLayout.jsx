import 'bootstrap/dist/css/bootstrap.min.css';
import './cardLayout.css'

import Character from './Character'


function CardLayout(){ //Data is prop of the component CardMembers

  let Data=Character()
      return(
        <div>

    
          {Data.map(Data=>{
            return(
              <div>
               
               <div className="card mb-3">
  <img className="card-img-top" src={Data.url_imagen} alt="Card image cap"/>
  <div className="card-body">
    <h3 className="card-title">{Data.nombre}</h3>
    <p className="card-text">{Data.about}</p>
    <p className="card-text"><large className="text-muted">Fecha Nacimiento:{Data.fecha_nacimiento}</large></p>
    <p className="card-text"><large className="text-muted">Lugar Nacimiento:{Data.lugar_nacimiento}</large></p>
    <p className="card-text"><large className="text-muted">Ocupacion:{Data.ocupacion}</large></p>
    <p className="card-text"><large className="text-muted">Actividad:{Data.actividad}</large></p>
  </div>
</div>
</div>

            )
           })
            }</div>
      )
    
  
  
};
export default CardLayout;