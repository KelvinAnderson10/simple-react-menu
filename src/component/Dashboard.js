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
            Menu: [
                {
                    id: "M001",
                    nama: "Nasi Goreng",
                    harga: 10000,
                },
                {
                    id: "M002",
                    nama: "Ayam Bakar",
                    harga: 12000,
                },
                {
                    id: "M003",
                    nama: "Indomie Kuah",
                    harga: 10000,
                },
                ],
            Table: [
                {
                    id: "T001",
                    nomor: "1",
                    status: 'Available',
                },
                {
                    id: "T002",
                    nomor: "2",
                    status: 'Available',
                },
                {
                    id: "T003",
                    nomor: "3",
                    status: 'Unavailable',
                },
                ],
        }
    }

    handleClick = (nav) => {
        this.setState({
            currentNav: nav
        })
    }

    handleSubmitMenu = (menu) => {
        this.setState({
            Menu: [...this.state.Menu, menu]
        })
    }

    handleSubmitTable = (table) => {
        this.setState({
            Table: [...this.state.Table, table]
        })
    }

    handleDeleteMenu = (index) => {
        let menuTemp = this.state.Menu
        menuTemp.splice(index, 1)
        this.setState({
            Menu: [...menuTemp]
        })
    }

    render(){
        let display = '';
        switch (this.state.currentNav) {
            case 'Menu':
                display = <Menu handleDelete={this.handleDeleteMenu} menu={this.state.Menu} addItemToArray={this.handleSubmitMenu}></Menu>
                break;
            case 'Table':
                display = <Table table={this.state.Table} addItemToArray={this.handleSubmitTable}></Table>
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