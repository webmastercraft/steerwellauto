import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import "./page.css"

// import components

// import services

class Page extends Component {
	static propTypes = {
	    dispatch: PropTypes.func.isRequired,
	  }
    render() {
        return(
        	<div className="container">
                <div className="booking_success">
                    <div className="success_img">
                        <img src="./imgs/success_1.png"/>
                    </div>
                    <div className="success_text">
                        Success!
                    </div>
                    <p className="success_description">
                        Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellemtesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt
                    </p>
                    <div className="success_file">
                        <Link to="">
                            <img src="./imgs/success_2.png"/>
                            <div className="file_name">Bill.pdf</div>
                        </Link>
                    </div>
                    <p className="file_description">
                        Nam porttitor blandit accumsan. Ut vel dictum sem, a pertium dui
                    </p>
                    <div className="back_btn">
                        <Link to="/profile"><Button>Go to personal account</Button></Link>
                    </div>
                </div>
            </div>
    	)
    }
}

export default Page
