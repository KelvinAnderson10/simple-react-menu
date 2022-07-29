import { Component } from "react";

class ShowTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
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
        };
    }
    render() {
        return (
            <div className="container-lg">
                <br></br>
                <table className="table table-striped mt-4">
                <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Nomor Meja</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.Table.map((item) => {
                    return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nomor}</td>
                        <td>{item.status}</td>
                    </tr>
                    );
                })}
                </tbody>
                </table>
                <br></br>
                <br></br>
                <br></br>
                <div className="text-center">
                    <button type="button" className="btn btn-primary">Add Table</button>
                </div>
            </div>
        );
    }
}

export default ShowTable;