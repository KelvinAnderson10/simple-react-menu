import { Component } from "react";

class ShowTable extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleDelete = (index) => {
        this.props.handleDelete(index);
    }
    render() {
        return (
            <div className="container-lg">
                <br></br>
                <table className="table table-striped mt-4">
                <thead className="table-dark"  style={{textAlign: 'center'}}>
                    <tr>
                        <th>Id</th>
                        <th>Nomor Meja</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody  style={{textAlign: 'center'}}>
                {this.props.table.map((item, index) => {
                    return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nomor}</td>
                        <td>{item.status}</td>
                        <td><button value='submit' className="btn btn-danger" onClick={() => this.handleDelete(index)}>Delete</button></td>
                    </tr>
                    );
                })}
                </tbody>
                </table>
                <br></br>
                <br></br>
                <br></br>
                <div className="text-center">
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.props.addItem}>Add Table</button>
                </div>
            </div>
        );
    }
}

export default ShowTable;