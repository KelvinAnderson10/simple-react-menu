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
      isLoggedIn: false
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
      {this.state.isLoggedIn ? <Home callback={this.handleLogout}></Home> : <AppLogin callback={this.handleLogin}></AppLogin>}
      </>
    )
  }
}

export default App;
