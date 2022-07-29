    import { Component } from "react";

    const FlexContainer = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        color: 'white',
        height: '100vh',
        backgroundImage: 'url("https://images.wallpaperscraft.com/image/single/restaurant_cafe_appliances_tables_chairs_interior_design_39216_1920x1080.jpg")'
    }
    
    const loginContainer = {
        margin: '0',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        padding: '2%',
        color: 'black',
        fontSize: '20px',
        backgroundColor: 'white',
        flexWrap: 'wrap'
    }
    
    const formSubmit = {
        marginTop: '15px',
    }
    
    const formText = {
        padding: '1%',
        borderColor: 'rgb(0, 122, 255)',
        borderRadius: '15px',
        borderStyle: 'solid',
    }
    
    const errorMessage = {
        margin: '0',
        fontSize: '12px',
        color: 'red'
    }
    
    class TitleComponent extends Component {
        render() {
        return(
            <div className="bg-danger" style={{borderRadius: '20px', padding: '2%'}}>
            <h1>Warung Makan Bahari</h1>
            <h3>Best Warung 2022</h3>
        </div>
        )
        }
    }
    
    class LoginComponent extends Component{
        constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            errorEmail: '',
            errorPassword: '',
        }
        }
    
        handleChangeEmail = (event) => {
            if (event.target.value.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)){
                this.setState({
                    email: event.target.value,
                    errorEmail: ''
                }, () => {this.handleButton()})
            }
            else{
                this.setState({
                    errorEmail: 'Invalid email format'
                }, () => {this.handleButton()})
            }
        }
    
        handleChangePassword = (event) => {
        if (event.target.value.length > 5){
            this.setState({
                password: event.target.value,
                errorPassword: ''
            }, () => {this.handleButton()})
        }else{
            this.setState({
                errorPassword: '6 min length character'
            }, () => {this.handleButton()})
        }
        }

        handleButton = () => {
            if (this.state.errorEmail !== '' || this.state.errorPassword !== '' || this.state.email === '' || this.state.password === ''){
                this.setState({
                    isButtonDisabled: true
                })
            }else{
                this.setState({
                    isButtonDisabled: false
                })
            }
        }
    
        handleSubmit = (event) => {
            event.preventDefault();
            this.props.callback(this.state.email, this.state.password);
        }
    
        render(){
        return(
            <div style={loginContainer}>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Email Address</label>
            <input style={formText} type='email' id='username' onChange={this.handleChangeEmail}></input>
            <p style={errorMessage}>{this.state.errorEmail}</p>
            <label htmlFor="password">Password</label>
            <br></br>
            <input style={formText} type='password' id='password' onChange={this.handleChangePassword}></input>
            <p style={errorMessage}>{this.state.errorPassword}</p>
            <input className="btn btn-primary" style={formSubmit} type={'submit'} value="LOGIN" disabled={this.state.isButtonDisabled}></input>
            </form>
        </div>
        )
        }
    }

    function AppLogin(props) {
        // document.body.style.backgroundImage = 'url("https://pedjapetkovic.com/wp-content/uploads/2017/09/mountain-hotel-restaurant-bar-area-view.jpg")'
        return (
            <div style={FlexContainer}>
                <TitleComponent></TitleComponent>
                <LoginComponent callback={props.callback}></LoginComponent>
        
        
            </div>
            );
        }
        
        export default AppLogin;