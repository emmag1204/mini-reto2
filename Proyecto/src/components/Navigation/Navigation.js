import React from 'react'
import './Navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return ( 
        <Navbar className='NavBar'>
            <Container className='contenedor'>
                <Navbar.Brand className='principal'>Pet Social</Navbar.Brand>
                <Nav className="acciones">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/login">Log in</Nav.Link>
                    <Nav.Link href="/new_pet">New Pet</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
     );
}
 
export default Navigation;