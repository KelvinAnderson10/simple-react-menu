import { Component } from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import ShowMenu from "./Menu/ShowMenu";

class Home extends Component{
    render(){
        return(
            <div>
                <Dashboard callback={this.props.callback}></Dashboard>
                <Footer></Footer>
            </div>

        )
    }
}

export default Home;