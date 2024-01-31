import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { logoutact } from '../redux/Useredux';
// import { Card } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
import Card from '../Card';


const Home = () => {

    const dispatch=useDispatch()
  function logout(){
    dispatch(logoutact())
  }

  // const fulldata = useSelector((state)=>state.user1.userValue1)
  // console.log('fulldata',fulldata);



  return (
    <div> 
        


        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Navbar.Brand href="profile">profile</Navbar.Brand>
            <Nav.Link href="Update">Update profile</Nav.Link>
            {/* <Nav.Link href="#pricing" onClick={}>logout</Nav.Link> */}
            <Nav.Link  onClick={logout}>Log out</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

      

        
    </div>
  )
}

export default Home




// function ColorSchemesExample() {
//   return (
//     <>
      
//     </>
//   );
// }

// export default ColorSchemesExample;