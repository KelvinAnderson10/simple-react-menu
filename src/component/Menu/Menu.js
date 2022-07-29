import { Component } from "react";
import AddMenu from "./AddMenu";
import ShowMenu from "./ShowMenu";

class Menu extends Component{
    constructor(props){
        super(props)
        this.state = {
            isAddItem: false
        }
    }
    addItemForm = () => {
        this.setState({
            isAddItem : true
        })
    }

    cancelForm = () => {
        this.setState({
            isAddItem : false
        })
    }

    handleSubmit = (menu) => {
        this.setState({
            isAddItem: false,
        })
        this.props.addItemToArray(menu)
    }
    render(){
        return(
            <>
            {this.state.isAddItem ? <AddMenu cancel={this.cancelForm} addItemToArray={this.handleSubmit}></AddMenu> 
            : <ShowMenu handleDelete={this.props.handleDelete} menu={this.props.menu} addItem={this.addItemForm} ></ShowMenu>}
            </>
        )
    }
}

export default Menu;