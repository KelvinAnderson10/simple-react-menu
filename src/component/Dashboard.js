import { Alert, Button } from "bootstrap";
import { Component } from "react";
import { Container, Nav, Navbar as NavbarBS, NavDropdown} from "react-bootstrap";
import MainMenu from "./MainMenu";
import AddMenu from "./Menu/AddMenu";
import Menu from "./Menu/Menu";
import Table from "./Table/Table";
import ShowMenu from "./Menu/ShowMenu";
import ShowTable from "./Table/ShowTable";



class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentNav: '',
            Menu: [],
            Table: [],
        }
    }

    handleClick = (nav) => {
        this.setState({
            currentNav: nav
        })
    }

    handleSubmitMenu = (menu) => {
        this.setState({
            Menu: [...this.props.Menu, menu]
        })
    }

    handleSubmitTable = (table) => {
        this.setState({
            Table: [...this.props.Table, table]
        })
    }

    handleDeleteMenu = (index) => {
        let menuTemp = this.props.Menu
        menuTemp.splice(index, 1)
        this.setState({
            Menu: [...menuTemp]
        })
    }

    handleDeleteTable = (index) => {
        let tableTemp = this.props.Table
        tableTemp.splice(index, 1)
        this.setState({
            Table: [...tableTemp]
        })
    }

    render(){
        let display = '';
        switch (this.state.currentNav) {
            case 'Menu':
                display = <Menu handleDeleteMenu={this.handleDeleteMenu} menu={this.props.Menu} addItemToArrayMenu={this.handleSubmitMenu}></Menu>
                break;
            case 'Table':
                display = <Table handleDeleteTable={this.handleDeleteTable} table={this.props.Table} addItemToArrayTable={this.handleSubmitTable}></Table>
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
                                    <button className="btn btn-danger" type="submit" onClick={this.props.callback}>Logout</button>
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