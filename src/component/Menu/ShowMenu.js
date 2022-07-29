import { Component } from "react";

class ShowMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            {
                id: "M004",
                nama: "Es Teh Manis",
                harga: 5000,
            },
            {
                id: "M005",
                nama: "Nasi Putih",
                harga: 4000,
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
                        <th scope="col">Id</th>
                        <th>Nama Makanan</th>
                        <th>Harga</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.Menu.map((item) => {
                    return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nama}</td>
                        <td>{item.harga}</td>
                    </tr>
                    );
                })}
                </tbody>
                </table>
                <br></br>
                <br></br>
                <br></br>
                <div className="text-center">
                    <button type="button" className="btn btn-primary">Add Menu</button>
                </div>
            </div>
        );
    }
}

export default ShowMenu;
