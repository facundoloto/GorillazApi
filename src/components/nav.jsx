import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {Navbar,Nav,Container} from 'react-bootstrap'
function NavBar(){
return(
<div className="navBar ">
<Navbar bg="" expand="lg" variant="dark">
<Container>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="me-auto">
<Nav.Link href={"/"}>Home</Nav.Link>
<Nav.Link href={"/member/"}>Miembros</Nav.Link>
<Nav.Link href={"/historia/"}>Historia</Nav.Link>
<Nav.Link href={"/disk"}>Discografia</Nav.Link>
<Nav.Link href={"/fases/"}>Fases</Nav.Link>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
</div>

)
}
export default NavBar