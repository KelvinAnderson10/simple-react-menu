import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './component/Dashboard';
import Home from './component/Home';
import { Component } from 'react';
import AppLogin from './component/Login/Login';

class App extends Component {
  constructor(props){
  super(props)
    this.state = {
      isLoggedIn: false,
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

  handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "12345678"){
      this.setState({
        isLoggedIn: true
      })
    }
    else{
      alert("Incorrect login username or password")
    }
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render(){
    return(
      <>
      {this.state.isLoggedIn ? <Home Menu={this.state.Menu} Table={this.state.Table} callback={this.handleLogout}></Home> : <AppLogin callback={this.handleLogin}></AppLogin>}
      </>
    )
  }
}

export default App;
