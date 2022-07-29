import { Component } from "react";

class ShowMenu extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    handleDelete = (index) => {
        this.props.handleDelete(index);
    }
    render() {
        return(
            <div className="container-lg">
                <br></br>
                <table className="table table-striped mt-4" id='menutable'>
                <thead className="table-dark"  style={{textAlign: 'center'}}>
                    <tr>
                        <th>Nama Makanan</th>
                        <th>Harga</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                {this.props.menu.map((item, index) => {
                    return (
                    <tr key={item.id}>
                        <td style={{verticalAlign: 'center'}}>{item.nama}</td>
                        <td style={{verticalAlign: 'center'}}>{item.harga}</td>
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
                    <button type="button" className="btn btn-primary  btn-lg" onClick={this.props.addItem}>Add Menu</button>
                </div>
            </div>
        );
    }
}

export default ShowMenu;
