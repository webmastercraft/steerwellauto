import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import Breadcrumb from "../../../../common/components/Breadcrumb";
import "./page.css"

// import components

// import services
import { connect } from 'react-redux'
const booking_path_data={
        path:'/browse',
        name:"Browse Cars",
    }

class Page extends Component {
  static propTypes = {
      dispatch: PropTypes.func.isRequired,
      user: PropTypes.object.isRequired,
    }

    constructor(props){
      super(props);
      let b_path_data = [];
      b_path_data.push(booking_path_data);
      let temp_path_data = {
        path:`/browse/detail/${props.match.params.id}`,
        name:props.location.data,
      };
      b_path_data.push(temp_path_data);
      this.state = {
        full_name:props.user.name,
        email:props.user.email,
        passport:props.user.passport,
        phone_number:props.user.phone,
        country:props.user.country,
        port:props.user.port,
        address:props.user.address,
        path_data: b_path_data,
      };
    }

    handleChange = (name,value) => {
      this.setState({[name]:value});

    };

    handleChange_Port = (e) => {
      this.setState({port:e.target.value});
    };

    handleChange_Country = (e) => {
      this.setState({country:e.target.value});
    };

    render() {
        const {full_name,email,passport,phone_number,country,port,address} = this.state;

        return(
          <div className="container">
            <Breadcrumb path_data={this.state.path_data} current_path="Booking"/>
            <div className="row content">
                <div className="col-md-9">
                    <div className="main-content">
                        <div className="page_title">
                            <p>Booking Details</p>
                        </div>
                        <div className="booking_info">
                            <div className="content_title">Account information</div>
                            <div className="row info_content">
                                <div className="col-md-6">
                                    <div className="info_group">
                                        <label>Full Name</label>
                                        <span><i className="fa fa-check"></i></span>
                                        <br/>
                                        <input type="text" name="full_name" value={full_name} onChange={e => this.handleChange(e.target.name, e.target.value)}/>
                                        <br/>
                                        <label>E-mail</label>
                                        <span><i className="fa fa-check"></i></span>
                                        <br/>
                                        <input type="email" name="email" value={email} onChange={e => this.handleChange(e.target.name, e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info_group">
                                        <label>Passport</label>
                                        <span><i className="fa fa-check"></i></span>
                                        <br/>
                                        <input type="text" name="passport" value={passport} onChange={e => this.handleChange(e.target.name, e.target.value)}/>
                                        <br/>
                                        <label>Phone Number</label>
                                        <span><i className="fa fa-check"></i></span>
                                        <br/>
                                        <input type="text" name="phone_number" value={phone_number} onChange={e => this.handleChange(e.target.name, e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="booking_info">
                            <div className="content_title">Physical Address</div>
                            <div className="row info_content">
                                <div className="col-md-6">
                                    <div className="info_group">
                                        <label>Country</label>
                                        <span><i className="fa fa-check"></i></span>
                                        <br/>
                                        <Select
                                          labelId="country"
                                          id="select_country"
                                          value={country}
                                          variant="outlined"
                                          onChange={this.handleChange_Country.bind(this)}>
                                          <MenuItem value="USA">Marocco</MenuItem>
                                        </Select>
                                        <br/>
                                        <label>Address</label>
                                        <span><i className="fa fa-check"></i></span>
                                        <br/>
                                        <input type="text" name="address" value={address} onChange={e => this.handleChange(e.target.name, e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info_group">
                                        <label>Port</label>
                                        <span><i className="fa fa-check"></i></span>
                                        <br/>
                                        <Select
                                          labelId="port"
                                          id="select_port"
                                          value={port}
                                          variant="outlined"
                                          onChange={this.handleChange_Port.bind(this)}>
                                          <MenuItem value="port_1">Some port`s name in Marocco</MenuItem>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="description">
                            <i className="fa fa-exclamation"></i>
                            <span>Instruction. Lorem ipsum dolor sit amet. For more details <Link to="/faq">check out FAQ</Link></span>
                        </div>
                    </div>
                    <div className="process">
                        <Link to={`details`}><Button className="cancel_btn">Cancel</Button></Link>
                        <Link to={`success_booking`}><Button className="confirm_btn">Confirm Booking ($500)</Button></Link>
                    </div>
                </div>
                <div className="col-md-3 sidebar">
                    <div className="row">
                        <div className="col-md-12 car-img">
                            <img src="./imgs/car_booking.png"/>
                        </div>
                        <div className="col-md-12">
                            <div className="car-info">
                                <div className="car-name steer_bold dark_color">
                                    Mercedes-Benz C63 2016
                                </div>
                                <div className="car-action">
                                    <span className="tag">Sedan</span>
                                    <span className="tag">Used</span>
                                    <span className="tag">Mercedes</span>
                                </div>
                                <div className="start-price price">
                                    <label>Start Price</label>
                                    <div>$20,000</div>
                                </div>
                                <div className="booking price">
                                    <label>Booking<HelpOutlinedIcon/></label>
                                    <div>$500</div>
                                </div>
                                <div className="delivery price">
                                    <label>Delivery<HelpOutlinedIcon/></label>
                                    <div>$1,250</div>
                                </div>
                                <div className="total-price price">
                                    <label>Total Price</label>
                                    <div>$21,750</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
      )
    }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Page)