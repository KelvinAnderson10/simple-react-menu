import { Alert, Button } from "bootstrap";
import { Component } from "react";
import { Container, Nav, Navbar as NavbarBS, NavDropdown} from "react-bootstrap";
import MainMenu from "./MainMenu";
import ShowMenu from "./Menu/ShowMenu";
import ShowTable from "./Table/ShowTable";



class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentNav: ''
        }
    }

    handleClick = (nav) => {
        this.setState({
            currentNav: nav
        })
    }

    render(){
        let display = '';
        switch (this.state.currentNav) {
            case 'Menu':
                display = <ShowMenu></ShowMenu>
                break;
            case 'Table':
                display = <ShowTable></ShowTable>
                break;
        
            default:
                display = <MainMenu></MainMenu>
                break;
        }
        return (
            <div>
                <NavbarBS bg='dark' variant='dark' expand='lg'>
                    <Container>
                        <NavbarBS.Brand onClick={() => this.handleClick('')}>Warung Makan Bahari</NavbarBS.Brand>
                        <NavbarBS.Toggle aria-controls="basic-navbar-control"/>
                            <NavbarBS.Collapse id="basic-navbar-control">
                                <Nav className="me-auto">
                                    <Nav.Link onClick={() => this.handleClick('Menu')}>Menu</Nav.Link>
                                    <Nav.Link onClick={() => this.handleClick('Table')}>Table</Nav.Link>
                                    
                                </Nav>
                                <Nav className="ms-auto p-2 bd-highlight">
                                    <button className="btn btn-danger" type="submit">Logout</button>
                                </Nav>
                            </NavbarBS.Collapse>
                    </Container>
                </NavbarBS>
                {display}
            </div>
            
        )
    }
}

export default Dashboard;