import { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <div>
                <footer className="text-center p-2 bg-dark fixed-bottom">
                    <span className="text-white">
                        Copyright © 2022 Kelvin Anderson, All Rights Reserved.
                    </span>
                </footer>
            </div>
        )
    }
}

export default Footer;