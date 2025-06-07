import React from 'react'
import {  Card, Col, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import blinkit_logo from '../../assets/images/blinkit_logo.png'
import './Topbar.css'


const Topbar = ({ addItemList,setSearchTerm }) => {


    const priceVal = addItemList?.map((elem) => {
        return elem.price
    })
    const sum = priceVal?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


    return (
        <Navbar expand="lg" className="bg-body-tertiary custom_class_nav">
      <Container>

        <Navbar.Brand Link="/">
          <img className='logo_img' src={blinkit_logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <div className='user_address_container'>
              <h4 className='address_head'>Delivery in 8 minutes</h4>
              <NavDropdown className='nav_dropdown' title="6, DLF Phase 3, Sector 24, Gurugram, Haryana 122002, India" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </div>

            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2 item_search"
                    onChange={(e) => setSearchTerm(e.target.value)}  // update search term here
                  />
                </Col>
                <Col xs="auto">
                  {!addItemList?.length
                    ?
                    <Card className='cart_btn' type="submit">My Cart</Card>
                    :
                    <Card className='cart_btn2' type="submit">
                      {`${addItemList?.length} items || $ ${Math.round(sum)}`}
                    </Card>
                  }
                </Col>
              </Row>
            </Form>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    )
}

export default Topbar
