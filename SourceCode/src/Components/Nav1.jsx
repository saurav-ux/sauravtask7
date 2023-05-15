import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { searchUser } from '../Features/UserDetailsSlice1';

function Nav1() {
   //Serve data from Store
  const allUsers = useSelector((state)=>state.app.users)
  const [searchData,setSearchData] = useState('')

  const  dispatch = useDispatch()
  useEffect(()=>{
    //sending data to serchUser to slice(handle all actions)
    dispatch(searchUser(searchData))
  },[searchData])
  return (
    <div>
       <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
           <Nav.Link > <Link to="/" className='nav11'>Create Post</Link></Nav.Link>
           <Nav.Link>  <Link to="/read" className='nav11'>All Post({allUsers.length})</Link></Nav.Link>        

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setSearchData(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Nav1
