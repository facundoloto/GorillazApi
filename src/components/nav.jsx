import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { Flex,Box,Link,Text} from 'rebass'
  function NavBar(){
   /* 
  */
    return(
    <div className="navBar ">
 
 <Navbar bg=""  variant="dark">
   
   <Nav>
   <Nav.Link href={'/'}>Home</Nav.Link>
     <Nav.Link href={"/member/"}>Miembros</Nav.Link>
     <Nav.Link href={"/historia/"}>Historia</Nav.Link>
     <Nav.Link href={"/disk"}>Discografia</Nav.Link>
   </Nav>
  
 </Navbar>
 
    </div>
    )
  }
  export default NavBar