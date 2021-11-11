import { useParams } from 'react-router';
import { useState,useEffect } from 'react';
import CardLayout from './CardLayout';
function Character(){
const {id}=useParams()
console.log(id)
const [Data,setData]=useState([])
useEffect(()=>{
getMemberApi()
},[])
const getMemberApi= async ()=>{
    const DataMember=await fetch(`http://app-b869980c-2c89-4f3d-b005-99fa43dc174e.cleverapps.io/apigorillaz/v1/miembros/${id}`)
    const DataJson=await DataMember.json()
    setData(DataJson)
  }
  return (Data)
}
export default Character;