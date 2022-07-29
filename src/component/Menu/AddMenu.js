import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const flexdiv = {
    display: 'flex',
    justifyContent: 'center'
}
class AddMenu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nama: '',
            harga: '',
            isButtonDisabled: true
        }

    }

    handleSubmit = (event) => {
        this.props.addItemToArray(this.state)
        event.preventDefault()
    }

    handleIdChange= (event) => {
        this.setState({
            id: event.target.value
        }, () => {this.handleButton()})
    }

    handleNamaChange= (event) => {
        this.setState({
            nama: event.target.value
        }, () => {this.handleButton()})
    }

    handleHargaChange= (event) => {
        this.setState({
            harga: event.target.value
        }, () => {this.handleButton()})
    }

    handleButton = () => {
        if(this.state.id == '' || this.state.nama == '' || this.state.harga == ''){
            this.setState({
                isButtonDisabled: true
            })
        }
        else{
            this.setState({
                isButtonDisabled: false
            })
        }
    }

    render(){
        return(
            <div style={{display:'flex', justifyContent:'center', alignItems:'center',  height:'80vh'}}>
            <div className="card" style={{width: '25%', padding:'3%' }}>
                <h3 style={{textAlign: 'center'}}>Add Menu</h3>
                <br></br>
                <form>
                    <div className="row mb-3">
                        <label className="col col-form-label" htmlFor="id">Id</label>
                        <div className="col-8">
                            <input type='text' className='form-control' id='id' placeholder="Menu ID" onChange={this.handleIdChange}></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col col-form-label" htmlFor="nama">Nama Makanan</label>
                        <div className="col-8">
                            <input type='text' className='form-control' id='nama' placeholder="Menu Name" onChange={this.handleNamaChange}></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col col-form-label" htmlFor="harga">Harga</label>
                        <div className="col-8">
                            <input type='number' className='form-control' id='harga' placeholder="Menu Price" onChange={this.handleHargaChange}></input>
                        </div>
                    </div>
                    <br></br>
                    <div style={{display:'flex', justifyContent:'space-around'}}>
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} disabled={this.state.isButtonDisabled}>Submit</button>
                            <button type="button" className="btn btn-danger" onClick={this.props.cancel}>Cancel</button>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default AddMenu;