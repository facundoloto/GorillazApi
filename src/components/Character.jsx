import { useParams } from 'react-router';
import { useState,useEffect } from 'react';
function Character(ruta){

const {id}=useParams()
console.log(id)

const [Data,setData]=useState([])
try{
useEffect(()=>{
getMemberApi()
},[])
const getMemberApi= async ()=>{
  console.log(ruta)
    const DataMember=await fetch(`https://app-b869980c-2c89-4f3d-b005-99fa43dc174e.cleverapps.io/apigorillaz/v1/${ruta}/${id}`)
    const DataJson=await DataMember.json()
    console.log(DataJson)
    setData(DataJson)
  }
  return (Data)
}catch(err){

}
}
export default Character;
