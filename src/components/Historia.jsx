import 'bootstrap/dist/css/bootstrap.min.css';
import './cardLayout.css'
import { useState,useEffect } from 'react';
function Historia(){
const [Data,setData]=useState([])
useEffect(()=>{
getHistoryApi()
},[])
const getHistoryApi= async ()=>{
const DataHistory=await fetch(`http://app-b869980c-2c89-4f3d-b005-99fa43dc174e.cleverapps.io/apigorillaz/v1/historia`)
const DataJson=await DataHistory.json()
setData(DataJson)
}
return (
<div>
{Data.map(Data=>{
return(
<div  className="position container-fluid">
<div className="card mb-3">
<img className="card-img-top" src={Data.url_imagen} alt="Card image cap"/>
<div className="card-body">
<h3 className="card-title">{Data.nombre}</h3>
<p className="card-text">{Data.historia}</p>
</div>
</div>
</div>
)
})
}</div>
)
}
export default Historia;