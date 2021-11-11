import {Switch,Route,Link } from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom"
import './App.css';
import CardLayout from "./components/CardLayout.jsx";
import Member  from "./components/Member.jsx";
import Historia from "./components/Historia.jsx"
import Disk from "./components/Disk.jsx"
import Background from "./components/Background.jsx"
import fondo from "./img/fondo_back.mp4"
function App() {
  return (
    <div>
       
       <Router>
      <main>
        <Switch>
        <Route exact path="/disk/">
         <Disk />
          </Route>
        <Route exact path="/historia/">
         <Historia />
          </Route>
        <Route exact path="/member/">
          <div>
        
         <Member />
         </div>
          </Route>
          <Route exact path="/currentMember/:id">
            <CardLayout />
          </Route>
          <Route path="/">
            <div>
    <Background url={fondo}/>
          </div>
          </Route>
        </Switch>
      </main>
    </Router>

    </div>
    
    
  );
}

export default App;
