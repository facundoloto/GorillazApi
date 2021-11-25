import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Row,Col} from 'react-bootstrap'
import './Disk.css'
import { useState,useEffect } from 'react';

function  Disk(){
const [Data,setData] =useState([])
useEffect(()=>{
getDiskApi()
},[]) 
const getDiskApi= async ()=>{
const DataDisk=await fetch(`http://app-b869980c-2c89-4f3d-b005-99fa43dc174e.cleverapps.io/apigorillaz/v1/discos`)
const DataJson=await DataDisk.json()
setData(DataJson);
}
return(
<div className="position container-fluid">
{
Data.map(function(Data){
for(let i=0;i<Data.canciones.length;i++){
console.log(Data.canciones[`${i}`].songs)
}
return(
<Card>
<Card.Img variant="top" src={Data.portada} />
<Card.Body>
<Card.Title>{Data.disco}({Data.fecha})</Card.Title>
<Card.Text>
{
Data.canciones.map((Data=>{//cuando tenemos un array dentro de otro solo hacemos un map al array dentro del otro map(Data.canciones ej(data es el primer array y canciones es el array dentro de data))
return(
<Card.Text className="text-center">{Data.songs}</Card.Text>
)
 }
  ) 
   )
    }
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
export default Disk;