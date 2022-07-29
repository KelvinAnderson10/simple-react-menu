import { Component } from "react";

const dashboard = {
    backgroundImage: "url('https://pedjapetkovic.com/wp-content/uploads/2017/09/mountain-hotel-restaurant-bar-area-view.jpg')",
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
                    <h1 style={title}>WARUNG MAKAN BAHARI</h1>
                </div>
            </div>
        )
    }
}

export default MainMenu;