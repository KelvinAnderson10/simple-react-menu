import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const flexdiv = {
    display: 'flex',
    justifyContent: 'center'
}
class AddTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nomor: '',
            status: '',
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

    handlenomorChange= (event) => {
        this.setState({
            nomor: event.target.value
        }, () => {this.handleButton()})
    }

    handlestatusChange= (event) => {
        this.setState({
            status: event.target.value
        }, () => {this.handleButton()})
    }

    handleButton = () => {
        if(this.state.id == '' || this.state.nomor == '' || this.state.status == ''){
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
                <h3 style={{textAlign: 'center'}}>Add Table</h3>
                <br></br>
                <form>
                    <div className="row mb-3">
                        <label className="col col-form-label" htmlFor="id">Id</label>
                        <div className="col-8">
                            <input type='text' className='form-control' id='id' placeholder="Table ID" onChange={this.handleIdChange}></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col col-form-label" htmlFor="nama">Number</label>
                        <div className="col-8">
                            <input type='number' className='form-control' id='nama' placeholder="Table Number" onChange={this.handlenomorChange}></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col col-form-label" htmlFor="harga">Status</label>
                        <div className="col-8">
                            <input type='number' className='form-control' id='harga' placeholder="Status" onChange={this.handlestatusChange}></input>
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

export default AddTable;