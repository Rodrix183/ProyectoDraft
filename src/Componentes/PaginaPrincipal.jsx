import React, { useState } from "react";
import './PaginaPrincipal.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

function PaginaPrincipal() {

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">LOGO OSH</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Nosotros" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Nuestra Visión</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Nuestra Historia</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Nuestro Trabajo</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Informes de Gestión</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">Nuestros Programas</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                            <Nav.Link href="#link">Voluntariado</Nav.Link>
                            <Nav.Link href="#link">Clubes Estudiantiles</Nav.Link>
                            <NavDropdown title="Donantes y Aliados" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Aliados Corporativos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Clínicas y Hospitales</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Convenios</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Donantes</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.5">Donar Ahora</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.6">Tienda en Línea</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Eventos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );

}

export default PaginaPrincipal;