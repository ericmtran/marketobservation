import React, {Component} from 'react';
import {
  Navbar,Nav, NavItem,NavLink,NavbarToggler,NavbarBrand,Collapse,
  Col,
  Button,
  DropdownItem,UncontrolledDropdown,DropdownToggle, DropdownMenu,
  Input,InputGroup } from 'reactstrap';
import SearchIcon from '@material-ui/icons/Search';
import "./Nav.css";
import {Link} from 'react-router-dom';
const navbarDropDownMenu = {
    textDecoration: 'none'
}
class Navibar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      Menu: false
    };
  }
  toggle = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
  }
  showMenu = () => {
    this.setState({
        Menu: !this.state.Menu
    })
  }
  render() {
    return (
      <div>
    <Navbar color="light" light expand="md">
    <NavbarBrand href="/"><img src={require('../images/a.jpg')} style={{width:'50px',height:'50px'}}/></NavbarBrand>
    <NavbarToggler onClick={this.toggle} />
    <Collapse navbar>
    <Col sm={6} md={3} />
    <Col sm={6} md={4} >
            <Nav className="md-auto" navbar>
              <UncontrolledDropdown>
                <DropdownToggle style={{paddingRight:'30px'}} className="nav" nav caret>
                    News
                </DropdownToggle>
                <DropdownMenu right>
                 <Link to="/home" style={navbarDropDownMenu}>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  </Link>
                  <Link to="/home" style={navbarDropDownMenu}>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <Link to="/home" style={navbarDropDownMenu}>
                  <DropdownItem>
                    Option 3
                  </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="nav" nav caret>
                    Analysis
                </DropdownToggle>
                <DropdownMenu right>
                <Link to="/home" style={navbarDropDownMenu}>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                </Link>
                <Link to="/home" style={navbarDropDownMenu}>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                </Link>
                  <DropdownItem divider />
                <Link to="/home" style={navbarDropDownMenu}>
                  <DropdownItem>
                    Option 3
                  </DropdownItem>
                </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem >
                <NavLink style={{paddingRight:'30px',paddingLeft:'30px'}} className="nav" href="/home">Policy</NavLink>
              </NavItem>
              <NavItem >
                <NavLink className="nav"  href="/home">About</NavLink>
              </NavItem>
            </Nav>
    </Col>
    <Col sm={6} md={2} />
    <Col sm={6} md={3} >
            <Nav className="ml-auto" navbar> 
                <UncontrolledDropdown className="a"  nav inNavbar>
                <DropdownToggle >
                    <SearchIcon  style={{fontSize:'20px', background:'none'}}/>
                </DropdownToggle>
                <DropdownMenu  style={{border:'none', width: '300px',background:'none'}}  right>
                <Button>
                <InputGroup>
                    <Input className='input' type='text' label='Input Large' bsSize="large" placeholder="" />  
                    <Button style={{border:'none'}}>search</Button>
                </InputGroup>
                </Button>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
    </Col>
    </Collapse>    
    </Navbar>
      </div>
    )
  }
}
export default Navibar;