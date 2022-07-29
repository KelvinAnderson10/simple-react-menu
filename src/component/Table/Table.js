import { Component } from "react";
import AddTable from "./AddTable";
import ShowTable from "./ShowTable";

class Table extends Component{
    constructor(props){
        super(props)
        this.state = {
            isAddTable: false
        }
    }
    addTableForm = () => {
        this.setState({
            isAddTable: true
        })
    }

    cancelForm = () => {
        this.setState({
            isAddTable: false
        })
    }
    handleSubmit = (table) => {
        this.setState({
            isAddTable: false,
        })
        this.props.addItemToArray(table)
    }
    render(){
        return(
            <>
            {this.state.isAddTable ? <AddTable cancel={this.cancelForm} addItemToArray={this.handleSubmit}></AddTable>
            : <ShowTable handleDelete={this.props.handleDelete} table={this.props.table} addItem={this.addTableForm}></ShowTable>}
            </>
        )
    }
}

export default Table;