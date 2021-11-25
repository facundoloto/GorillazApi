import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Row,Col} from 'react-bootstrap'
import './Disk.css'
import { useState,useEffect } from 'react';

function  Fases(){
const [Data,setData] =useState([])
useEffect(()=>{
getDiskApi()
},[]) 

const getDiskApi= async ()=>{
const DataDisk=await fetch(`http://app-b869980c-2c89-4f3d-b005-99fa43dc174e.cleverapps.io/apigorillaz/v1/fases`)
const DataJson=await DataDisk.json()
setData(DataJson);
}

return(
<div className="position container-fluid">



{
Data.map(function(Data){
console.log(Data)
return(
<Card>
<Card.Img variant="top" src={Data.url_imagen} />
<Card.Body>
<Card.Title>{Data.fase}</Card.Title>
<Card.Text>
{Data.historia}
</Card.Text>
</Card.Body>
</Card>
)

}
)
}
</div>
)
}

export default Fases;