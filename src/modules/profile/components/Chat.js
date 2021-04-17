import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Send } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { profileActions } from '../store/actions'
import './chat.css'

class Chat extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack = function () {
        this.props.dispatch(profileActions.chatting( false ));
    }

    render() {
        return     <div className="profile_content message">
                    <div className="profile_caption">
                        <span className="goBack" onClick={this.goBack}><i className="fa fa-angle-left"></i>Back</span>
                        <span className="customer_img"><img src="./imgs/car_mercedes.png" /></span>
                        <div className="customer_name">Mercedes-Benz CS3 2016</div>
                    </div>
					<div className="profile_content_body">
						<div className="profile_paragraph message">
							<div className="">
								<ul className="msg_list chat">
                                    <li className="customer_say">
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </li>
                                    <li className="customer_say">
                                        <p>Vehicula at nibh quis, facilisis accumsan turpis.</p>
                                    </li>
                                    <li className="customer_last_say_date">
                                        <span>14 April 2019</span>
                                    </li>
                                    <div className="new_day">Today</div>
                                    <li className="me_say">
                                        <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare</p>
                                    </li>
                                    <li className="me_say">
                                        <p>Vehicula at nibh quis, facilisis accumsan turpis.</p>
                                    </li>
                                    <li className="customer_say">
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </li>
                                    <li className="customer_say">
                                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor</p>
                                    </li>
                                    <li className="customer_last_say_date">
                                        <span>14 April 2019</span>
                                    </li>
                                </ul>
                                <div className="msg_send row">
                                    <div className="col-md-10"><input placeholder="Type your message..." className="" /></div>
                                    <div className="col-md-2 send_button"><IconButton className="btn" children={<Send/>} color="primary"></IconButton></div>
                                </div>
							</div>
						</div>
					</div>
				</div>
    }

}

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Chat));