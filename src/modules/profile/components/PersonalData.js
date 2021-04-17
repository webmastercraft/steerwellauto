import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import PhoneInput from 'react-phone-number-input/react-responsive-ui';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Error';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { profileService } from '../service';

import Upload from "./upload/Upload";

import './personal.css'
import 'react-responsive-ui/style.css'
import 'react-phone-number-input/style.css'

class PersonalData extends Component {

    constructor(props) {
        super(props);

      	this.state ={
      		name: '',
      		passport: '',
      		email:'',
      		phone:'',
      		address:'',
      		country: '',
      		port: '',
      		addition_upload_paths: '',
      		language: 'en',
      		currency:'usd',
      		old_password: '',
      		new_password: '',
      		confirm_password: '',
      		invalidFields: [],
      		uploadHandleFlag: false,
	  	}

	  	this.validationKeys = [
	  		"name",
	  		"passport",
	  		"email",
	  		"phone",
	  		"address",
	  		"country",
			"port",
			"language",
			"currency",
			"password",
		];

		this.validatedUploadKeys = [
	  		"name",
	  		"passport",
	  		"email",
	  		"phone",
	  		"address",
	  		"country",
			"port",
			"language",
			"currency",
			"password",
			"addition_upload_paths"
		];

	  	this.validatePass = '';

	  	this.handleInput = this.handleInput.bind(this);
	  	this.handleSelect = this.handleSelect.bind(this);
	  	this.updateProfile = this.updateProfile.bind(this);
	  	this.setProfileData = this.setProfileData.bind(this);
	  	this.afterUploadFiles = this.afterUploadFiles.bind(this);
	  	this.startUploadFiles = this.startUploadFiles.bind(this);
    }

    UNSAFE_componentWillMount() {
		this.setProfileData(this.props.profile);
    }

  	UNSAFE_componentWillReceiveProps (nextprops) {
  		const { profile } = nextprops;
  		this.setProfileData( profile );
  	}

  	setProfileData = function( _profile ) {
  		// if value of profile is undefined or null, to set ''
		Object.keys(_profile).forEach(function (key) {
  			if(!_profile[key]) _profile[key] = '';
		})
  		this.setState({ ..._profile });

  		this.validatePass = _profile.old_password;
  	}

  	handleSelect = function(e) {
  		this.setState({
  			...this.state, [e.target.name]: e.target.value
  		});
  	}

  	handleInput = function(e) {
  		this.setState({
  			...this.state, [e.target.name]: e.target.value
  		});
  	}

  	afterUploadFiles = function(uploads) {
  		const additionUrls = [];
  		const invalidFields = [];
  		var uploadCheck = true;
  		uploads.forEach((item) => {
  			if (item.success && item.url) {
  				additionUrls.push({
  					url: item.url,
  					name: item.name,
  				})
  			} else {
				uploadCheck = false;
  			}
  		});
  		if (uploadCheck) {
  			this.setState((state) => {
  				// addition_upload_paths
  				let { addition_upload_paths } = state;
  				if (!addition_upload_paths && addition_upload_paths == '')
  					addition_upload_paths = '[]';
				let uploadPathArray = JSON.parse(addition_upload_paths);
				uploadPathArray = uploadPathArray.concat(additionUrls);
				addition_upload_paths = JSON.stringify(uploadPathArray);
				return {
					addition_upload_paths
				}
  			});
  			this.updateProfile();
  		} else {
  			// need function for handling file upload issues
  		}
  	}

  	startUploadFiles = function() {
  		const validatedFlag = this.validateProfile();
  		if (validatedFlag) {
  			// triger state flag to call Upload component childs function
	  		this.setState((state) => {
	  			let { uploadHandleFlag } = state;
	  			uploadHandleFlag = !uploadHandleFlag;
	  			return {
	  				uploadHandleFlag,
	  			}
	  		})
  		}
  	}

  	validateProfile = function() {
  		const self = this;
  		const currentState = this.state;
  		const {
  			email,
  			new_password,
  			confirm_password,
  			old_password
  		} = this.state;

  		const invalidFields = [];

  		// reset password
  		if (old_password !== "") {
  			if(new_password !== "" && confirm_password !== "" && new_password == confirm_password) {
	  			const data = {};
				data['email'] = email;
	  			data['current_password'] = old_password;
	  			data['new_password'] = new_password;
	  			self.props.dispatch(profileService.updatePassword(data));
	  		} else {
	  			invalidFields.push("password");
	  		}
  		}

  		// get validated inputs
  		Object.keys(currentState).forEach(function (key) {
			const count = self.validationKeys.indexOf(key);
			if (count !== -1 && (!currentState[key] || currentState[key] == '')) {
				invalidFields.push(key);
			}
		});


		this.setState({ invalidFields });

		return invalidFields.length  == 0 ;
  	}

  	updateProfile = function() {
  		const self = this;
  		const currentState = this.state;
  		const updateData = {};
		Object.keys(currentState).forEach(function (key) {
			const count = self.validatedUploadKeys.indexOf(key);
  			if (count !== -1 && currentState[key]) {
  				updateData[key] = currentState[key];
  			}
		})
		updateData['id'] = currentState.id;
		//update profile
		this.props.dispatch(profileService.updateProfile(updateData));
  	}

  	render() {
  		const { invalidFields, uploadHandleFlag } = this.state;
  		return  <div className="row">
					<div className="col-md-12">
						<div className="profile_content">
							<h3>Personal Data</h3>
							<div className="profile_content_body">
								<div className="profile_paragraph account">
									<h4>Account Infomation</h4>
									{
										invalidFields.length !== 0 && <div className="invalid_fields" >
										{
											invalidFields.map((item, index) =>
												<div className="invalid_item" key={index}><ErrorIcon />The Field { item } is invalid</div>
											)
										}
										</div>
									}

									<div className="row profile_content_info">
										<div className="col-md-6">
											<label className="control-label">Full Name</label>
	                                        <input
	                                        	value={ this.state.name }
	                                        	name="name"
	                                        	type="text"
	                                        	placeholder="Vladyslav Germash"
	                                        	className="form-control"
	                                        	onChange={ this.handleInput }
                                        	/>
										</div>
										<div className="col-md-6">
											<label className="control-label">Passport</label>
	                                        <input
	                                        	value={ this.state.passport }
	                                        	name="passport"
	                                        	type="text"
	                                        	placeholder="423452465"
	                                        	className="form-control"
	                                        	onChange={ this.handleInput }
                                        	/>
										</div>
										<div className="col-md-6">
											<label className="control-label">E-mail</label>
	                                        <input
	                                        	value={ this.state.email }
	                                        	name="email"
	                                        	type="text"
	                                        	placeholder="forexample@gmail.com"
	                                        	className="form-control"
	                                        	onChange={ this.handleInput }
                                        	/>
										</div>
										<div className="col-md-6">
											<label className="control-label">Phone Number</label>
                                        	<PhoneInput
									          placeholder="Enter phone number"
									          value={this.state.phone}
									          onChange={(value) => {
									          	const data = {
									          		target: {
									          			name: "phone",
									          			value,
									          		}
									          	}
									          	this.handleInput(data);
									          }}
									         />
										</div>
										<div className="col-md-12">
											<div className="add_info">Additional Information</div>
										</div>
										<div className="col-md-12">
											<Upload
												uploadHandleFlag = { uploadHandleFlag }
												uploadResponseFunc = {(value) => { this.afterUploadFiles(value); } }
											/>
										</div>
									</div>
								</div>
								<div className="profile_paragraph physical_address">
									<h4>Physical Address</h4>
									<div className="row profile_content_info">
										<div className="col-md-6">
											<label className="control-label">Country</label>
									        <Select
									          	id="select_country"
									          	name="country"
									          	className="country_select bs-select form-control"
						          	          	value={ this.state.country }
  												onChange={ this.handleSelect }
  												defaultValue=""
									        >
									          	<MenuItem value="">Select your Country</MenuItem>
									          	<MenuItem value="Marocco">Marocco</MenuItem>
									          	<MenuItem value="Spain">Spain</MenuItem>
									          	<MenuItem value="UK">United Kingdom</MenuItem>
									          	<MenuItem value="USA">United Stated</MenuItem>
									        </Select>
										</div>
										<div className="col-md-6">
											<label className="control-label">Port</label>
											<Select
									          	id="select_port"
									          	name="port"
									          	className="country_select bs-select form-control"
						          	          	value={ this.state.port }
  												onChange={ this.handleSelect }
  												defaultValue="Huchima-ku"
									        >
									        	<MenuItem value="Huchima-ku">Some port's names in Marocco</MenuItem>
									          	<MenuItem value="port_1">Port 1</MenuItem>
									          	<MenuItem value="port_2">Port 2</MenuItem>
									          	<MenuItem value="port_3">Port 3</MenuItem>
									        </Select>
										</div>
										<div className="col-md-6">
											<label className="control-label">Address</label>
	                                        <input
	                                        	value={ this.state.address }
	                                        	name="address"
	                                        	type="text"
                                        		placeholder="Some address in Marocco"
                                        		className="form-control"
                                        		onChange={ this.handleInput }
                                    		/>
										</div>
									</div>
								</div>
								<div className="profile_paragraph password">
									<h4>Change Password</h4>
									<div className="row profile_content_info">
										<div className="col-md-12 current_password">
											<label className="control-label">Enter Current Password</label>
	                                        <input
	                                        	name="old_password"
	                                        	type="password"
	                                        	className="form-control"
	                                        	onChange={ this.handleInput }
                                        	/>
										</div>
										<div className="col-md-6">
											<label className="control-label">Enter New Password</label>
	                                        <input
	                                        	name="new_password"
	                                        	type="password"
	                                        	className="form-control"
	                                        	onChange={ this.handleInput }
                                        	/>
										</div>
										<div className="col-md-6">
											<label className="control-label">Confirm New Password</label>
	                                        <input
	                                        	name="confirm_password"
	                                        	type="password"
                                        		className="form-control"
                                        		onChange={ this.handleInput }
                                    		/>
										</div>
									</div>
								</div>
								<div className="profile_paragraph language_currency">
									<h4>Language & Currency</h4>
									<div className="row profile_content_info">
										<div className="col-md-6">
											<label className="control-label">Language</label>
	                                        <Select
									          	id="select_language"
									          	name="language"
									          	className="country_select bs-select form-control"
						          	          	value={ this.state.language }
  												onChange={ this.handleSelect }
  												defaultValue="English"
									        >
									          	<MenuItem value="en">English</MenuItem>
									          	<MenuItem value="es">Spanish</MenuItem>
									          	<MenuItem value="it">Italian</MenuItem>
									          	<MenuItem value="ru">Russian</MenuItem>
									        </Select>
										</div>
										<div className="col-md-6">
											<label className="control-label">Currency</label>
	                                        <Select
									          	id="select_currency"
									          	name="currency"
									          	className="country_select bs-select form-control"
						          	          	value={ this.state.currency }
  												onChange={ this.handleSelect }
  												defaultValue="usd"
									        >
									          	<MenuItem value="usd">USD</MenuItem>
									          	<MenuItem value="euro">Euro</MenuItem>
									        </Select>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-12">
						<div className="profile_actions">
							<Button className="btn_cancel">Cancel</Button>
							<Button className="btn green" onClick={ this.startUploadFiles }>Save Changes</Button>
						</div>
					</div>
				</div>
  	}
}

const mapStateToProps = state => {
	const {
		flag,
		updateUserResponse,
		updatePasswordResponse
	} = state.profile;
  	return {
		flag,
		updateUserResponse,
		updatePasswordResponse
  	};
};

const mapDispatchToProps = dispatch => {
  	return {
     	dispatch,
  	}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PersonalData));