import { Component } from "react";
import Background from './wmb.png'
const dashboard = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover'
}

const title = {
    color: 'white'
}

class MainMenu extends Component{
    render(){
        return(
            <div style={dashboard} className="sticky-top">
                <div style={{height: '90vh', textAlign:'center'}}>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        )
    }
}

export default MainMenu;