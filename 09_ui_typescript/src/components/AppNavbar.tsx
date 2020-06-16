import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


interface IProps {

}

interface IState {
  isOpen: boolean,
}


export default class AppNavbar extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    
        this.state = {
            isOpen: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render () {
        return <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                  href="https://github.com/gizzmo88">@Marco H</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="https://github.com/VRLAB-HSKL">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>;
    }
}