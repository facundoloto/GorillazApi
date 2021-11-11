import '../App.css'
import { useState } from 'react';
import soundOn from "../img/volume-up.svg"
import soundOff from "../img/volume-mute.svg"
function Background(props){
  const [changeImg,setChangeImg] = useState(soundOff);
  const [change,setChange] = useState(true);
  const changeSound=()=>{
    if(change==true){
      setChangeImg(soundOn)
      setChange(false)
    }else{
      setChangeImg(soundOff)
      setChange(true)
    
    }
  }

return(
<div>
<div className="background-Gorillaz">
<video
autoPlay
loop

muted={change}
className="video-background"> 
<source src={props.url} type="video/mp4"/>
</video>
</div>
<button id="sound" onClick={changeSound}
type="button"><img src={changeImg}/></button>
</div>
)
}
export default Background