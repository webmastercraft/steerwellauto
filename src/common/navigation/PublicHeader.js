// import libs
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import _ from 'lodash';

// import components
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Done from '@material-ui/icons/Done';

import NavLinks from './NavLinks';
import NavItem from './NavItem';

import { login, register } from '../../modules/auth/service';
import ReeValidate from 'ree-validate';
import { fetchUser } from '../../modules/auth/service'

const BlueCheckbox = withStyles({
  root: {
    color: '#2499f3',
    '&$checked': {
      color: '#2499f3',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

// import Styles
import "./main.css";
import "./header.css";
import "./login.css";

// initiate component
class PublicHeader extends Component{

  static propTypes = {
    location: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.validator = new ReeValidate({
      email: 'required|email',
      password: 'required|min:6'
    });

    this.regValidator = new ReeValidate({
      reg_email: 'required|email',
      reg_password: 'required|min:6',
      reg_password_confirmation: 'required|min:6'
    });

    this.state = {
        stickyClass: "",
        idleCount: 0,
        img_lang: "/flags/us.svg",
        str_lang:"en",
        mobile_header: "",
        openLogin: false,
        openSignup: false,
        openCfmPwd: false,
        loginInputValues: {
          email: '',
          password: '',
        },
        loginErrorFlags: {
          email: false,
          password: false,
        },
        loginErrorMsgs: {
          email: '',
          password: '',
        },
        regInputValues: {
          reg_email: '',
          reg_password: '',
          reg_password_confirmation: '',
        },
        errors: this.validator.errors,
        regErrorFlags: {
          reg_email: false,
          reg_password: false,
          reg_password_confirmation: true,
        },
        regErrorMsgs: {
          reg_email: '',
          reg_password: '',
          reg_password_confirmation: '',
        },
        regCheckBoxFlag: false,
    };

    this.onSelectLang = this.onSelectLang.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleSignupChange = this.handleSignupChange.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.toggleScroll = this.toggleScroll.bind(this);
    this.handleAgreeChange = this.handleAgreeChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.toggleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleScroll)
  }

  updateCurrentState() {
    let { idleCount } = this.state;
    idleCount++;
    this.setState({ idleCount });
  }

  toggleScroll() {
    if (window.pageYOffset > 200) {
      this.setState({ stickyClass: "sticky" })
    } else {
      this.setState({ stickyClass: "" })
    }
  }
  onSelectLang(e){
    let selected_lang = e.target.value;
    let img_path = "/flags/" + selected_lang + ".svg"
    this.setState({str_lang : selected_lang});
    this.setState({ img_lang: img_path });
  }

  checkHeaderBackground( localtion ) {
    if( location.pathname == "/" )
      return "transparent";
    else
      return "white_bg";
  }

  toggleModal = ( type ) => {
    if( type == "login" )
    {
      this.setState({ openLogin: true,
                      openSignup: false,
                      openCfmPwd: false
                  });
    }
    else if( type == "signup" )
      this.setState({ openLogin: false,
                      openSignup: true,
                      openCfmPwd: false
                  });
    else if( type == "confirm" )
      this.setState({ openLogin: false,
                      openSignup: false,
                      openCfmPwd: true
                  });
    else
       this.setState({ openLogin: false,
                      openSignup: false,
                      openCfmPwd: false
                  });
  };

  toggleMobileMenu = () => {
    if( this.state.mobile_header == "" )
      this.setState({ mobile_header: "show"});
    else
      this.setState({ mobile_header: ""});
  };

  toggleGotoConfirmPage = () => {
    const self = this;
    const { regInputValues } = this.state;
    self.regValidator.validate("reg_email", regInputValues.reg_email)
    .then((flag) => {
      self.setState((state) => {
        const { regErrorMsgs, regErrorFlags } = state;
        regErrorFlags["reg_email"] = flag;
        if (!flag) {
          regErrorMsgs["reg_email"] = "The email address is invalid."
        }
        return {
          regErrorFlags
        }
      });
      if (flag) {
        self.toggleModal("confirm");
      }
    });
  }

  handleAgreeChange = () => {
    this.setState((state) => {
      let { regCheckBoxFlag } = state;
      regCheckBoxFlag = !regCheckBoxFlag;
      return {
        regCheckBoxFlag,
      }
    });
  }

  // event to handle input change
  handleLoginChange( name, value ) {
    const self = this;
    self.setState((state) => {
      const { loginInputValues, loginErrorFlags } = state;
      loginInputValues[name] = value;
      if (!loginErrorFlags[name]) {
        loginErrorFlags[name] = true;
      }

      if (name == "email") {
        self.validator.validate("email", loginInputValues.email)
        .then((flag) => {
          self.setState((state) => {
            const { loginErrorMsgs, loginErrorFlags } = state;
            loginErrorFlags["email"] = flag;
            if (!flag) {
              loginErrorMsgs["email"] = ""
            }
            return {
              loginErrorFlags,
              loginErrorMsgs
            }
          });
        });
      }

      if (name == "password") {
        self.validator.validate("password", loginInputValues.password)
        .then((flag) => {
          self.setState((state) => {
            const { loginErrorFlags, loginErrorMsgs } = state;
            loginErrorFlags["password"] = flag;
            loginErrorMsgs["password"] = ""
            return {
              loginErrorFlags,
              loginErrorMsgs
            }
          });
        });
      }
      return {
        loginInputValues,
        loginErrorFlags
      };
    });
  }

  // event to handle form submit
  handleLoginSubmit() {
    const { loginInputValues } = this.state
    this.validator.validateAll(loginInputValues)
    .then((success) => {
      if (success) {
        this.loginSubmit(loginInputValues)
      }
    })
  }

  loginSubmit(loginInputValues) {
    const self = this;
    self.props.dispatch(login(loginInputValues))
      .then(() => {
          self.props.dispatch(fetchUser());
      })
      .catch((response) => {
        console.log("loginSubmit response", response);
        const messages = response.messages;
        console.log(messages);
        _.forOwn(messages, (message, field) => {
            console.log(message, field);
            if (field == "email") {
              self.setState((state) => {
                const { loginErrorFlags, loginErrorMsgs } = state;
                loginErrorFlags["email"] = false;
                loginErrorMsgs["email"] = message[0];
                return {
                  loginErrorFlags,
                  loginErrorMsgs,
                }
              });
            } else if (field == "password") {
              self.setState((state) => {
                const { loginErrorFlags, loginErrorMsgs } = state;
                loginErrorFlags["password"] = false;
                loginErrorMsgs["password"] = message[0];
                return {
                  loginErrorFlags,
                  loginErrorMsgs,
                }
              });
            }
        });
        console.log("loginErrorMsgs", this.state.loginErrorFlags, this.state.loginErrorMsgs);
      })
  }

  handleSignupChange(name, value) {
    const self = this;
    self.setState((state) => {
      const { regInputValues, regErrorFlags } = state;
      regInputValues[name] = value;
      if (!regErrorFlags[name]) {
        regErrorFlags[name] = true;
      }

      if (name == "reg_email") {
        self.regValidator.validate("reg_email", regInputValues.reg_email)
        .then((flag) => {
          self.setState((state) => {
            const { regErrorMsgs, regErrorFlags } = state;
            regErrorFlags["reg_email"] = flag;
            if (!flag) {
              regErrorMsgs["reg_email"] = ""
            }
            return {
              regErrorFlags,
              regErrorMsgs
            }
          });
        });
      }

      if (name == "reg_password") {
        self.regValidator.validate("reg_password", regInputValues.reg_password)
        .then((flag) => {
          self.setState((state) => {
            regErrorFlags["reg_password"] = flag;
            return {
              regErrorFlags
            }
          });
        });
      }
      return {
        regInputValues,
        regErrorFlags
      };
    });
  }

  handleRegisterSubmit(e) {
    const self = this;
    const { regInputValues } = this.state;

    var isValidated = true;

    self.regValidator.validate("reg_password_confirmation", regInputValues.reg_password_confirmation)
    .then((flag) => {

      self.setState((state) => {
        const { regErrorFlags } = state;
        isValidated = (regInputValues.reg_password_confirmation == regInputValues.reg_password) && flag;
        regErrorFlags["reg_password_confirmation"] = isValidated;
        return {
          regErrorFlags
        }
      });

      const { regErrorFlags } = this.state;

      Object.keys(regErrorFlags).forEach(key => {
        if (!regErrorFlags[key]) {
          isValidated = false;
        }
      });
      
      if (isValidated) {
        this.regSubmit(regInputValues);
      }
    });

    // this.regValidator.validateAll(regInputValues)
    // .then((success) => {
    //   if (success) {
        
    //   } else {

    //   }
    // })
  }

  regSubmit(regInputValues) {
    const requestData = {
        email : regInputValues.reg_email,
        password : regInputValues.reg_password,
        reg_password_confirmation : regInputValues.reg_password_confirmation
    }

    this.props.dispatch(register(requestData))
      .then(() => {
        this.props.dispatch(fetchUser())
      })
      .catch((response) => {
        console.log("regSubmit response", response);
        const messages = response.messages;
        _.forOwn(messages, (message, field) => {
            console.log(message, field);
            if (field == "email") {
              this.setState((state) => {
                const { regErrorFlags, regErrorMsgs } = state;
                regErrorFlags["reg_email"] = false;
                regErrorMsgs["reg_email"] = message[0];
                return {
                  regErrorFlags,
                  regErrorMsgs,
                }
              });
              this.toggleModal("signup");
            }
        });
        // if (statusCode === 422) {
          
        // } else if (statusCode === 401) {

        // }
      })
  }

  render(){

    const { openLogin, openSignup, openCfmPwd, img_lang, str_lang } = this.state;
    const { location } = this.props;
    const { errors, loginErrorFlags, loginErrorMsgs, regErrorFlags, regErrorMsgs, regCheckBoxFlag } = this.state;
    const { email, password, remember } = this.state.loginInputValues;
    const { reg_name, reg_email, reg_password, reg_password_confirmation } = this.state.regInputValues;


    const headerBg = this.checkHeaderBackground( location );


    console.log("loginErrorFlags.email", loginErrorFlags.email)

    return(
      <div className={`page_header ${headerBg+" "+this.state.stickyClass}`}>
        <div className="page_logo">
          <NavItem path="/">
            <img src="/static/img/logo.png" className="transparent_logo"/>
            <img src="/static/img/logo_user.png" className="blue_logo"/>
            <div>
              <span> Steer Well </span>
              <br/>
              <span> Auto </span>
            </div>
          </NavItem>
        </div>
        <div className="lang">
          <div><img src={img_lang}/></div>
            <Select
              labelId="label"
              id="select_lang"
              IconComponent={KeyboardArrowDown}
              value={str_lang}
              variant="standard"
              onChange={this.onSelectLang}>
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="fr">FR</MenuItem>
              <MenuItem value="es">ES</MenuItem>
            </Select>
        </div>
        <NavLinks />
        <button className= "navbar-toggle btn navbar-btn down_menu" onClick={this.toggleMobileMenu}>
            <div className="icon-bar"></div>
            <div className="icon-bar"></div>
            <div className="icon-bar"></div>
        </button>
        <div className="page_login">
          <button type="button" className="login-toggle-btn log_in" onClick={() => this.toggleModal("login")}> Log In </button>
          <button type="button" className="login-toggle-btn sign_up" onClick={() => this.toggleModal("signup")}> Sign Up </button>
        </div>
        <div className={`mobile_navbar ${this.state.mobile_header}`} onClick={this.toggleMobileMenu}>
          <ul className={`navbar_collapse dropdown-menu_res ${this.state.mobile_header}`}>
            <button className= "navbar-toggle btn navbar-btn down_menu" onClick={this.toggleMobileMenu}>
              <img src="/static/img/icon_close.png" />
            </button>

            <NavItem path="/">Home</NavItem>
            <NavItem path="/browse">Browse Cars</NavItem>
            <NavItem path="/process">Process</NavItem>
            <NavItem path="/blog">Blog</NavItem>
            <NavItem path="/about">About Us</NavItem>
            <NavItem path="/faq">FAQ</NavItem>
            <NavItem path="/contacts">Contacts</NavItem>

            <li className="mobile mobile_login">
                <button type="button" className="login-toggle-btn log_in" onClick={() => this.toggleModal("login")}> Log In </button>
            </li>
            <li className="mobile mobile_signup">
                <button type="button" className="login-toggle-btn sign_up" onClick={() => this.toggleModal("signup")}> Sign Up </button>
            </li>
          </ul>
        </div>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={openLogin}
          onClose={() => this.toggleModal("close")}
        >
          <div className="modal-container">
            <div className="modal fade steerModal" id="Login" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="row">
                    <div className="col-md-6 left_image_login hidden-xs">
                      <div className="txtWrapper">
                        <h6 className="left_bottom_title">The easiest way to buy a car</h6>
                        <p className="left_bottom_content">Log In to continue using the maximum features of the service</p>
                      </div>
                    </div>
                    <div className="col-md-6 right_dialog_window">
                      <button type="button" className="close close_dialog" onClick={() => this.toggleModal("close")}>&times;</button>
                      <h2 className="login_title">Log In</h2>
                      <p className="login_content">Lorem Ipsum dolor sit amet</p>
                      <label className="email_phone_password">
                        Email or Phone Number
                        <Done className={loginErrorFlags.email ? "show_Done" : "hide_Done"} />
                      </label>
                      <input type="text"
                          className={!loginErrorFlags.email && loginErrorMsgs.email? "form-control input_validation_invaild" : "form-control"}
                          id="email"
                          placeholder="Email or Phone Number"
                          name="email"
                          value={email || ''}
                          required
                          onChange={(e) => this.handleLoginChange(e.target.name, e.target.value)}
                      />
                      {!loginErrorFlags.email && loginErrorMsgs.email && <div className="input_invaild_feedback">{loginErrorMsgs.email}</div>}
                      <label className="email_phone_password">
                        Password
                        <Done className={loginErrorFlags.password ? "show_Done" : "hide_Done"} />
                      </label>
                      <input type="password"
                          className={!loginErrorFlags.password && loginErrorMsgs.password? "form-control password input_validation_invaild" : "form-control password"}
                          id="password"
                          name="password"
                          value={password || ''}
                          onChange={(e) => this.handleLoginChange(e.target.name, e.target.value)}
                          placeholder="Password"
                          required
                      />
                      {!loginErrorFlags.password && loginErrorMsgs.password && <div className="input_invaild_feedback">{loginErrorMsgs.password}</div>}
                      <p className="forgot_password"><a href="#">Forgot password?</a></p>
                      {
                        loginErrorFlags.email && loginErrorFlags.password ?
                        <button type="button" className="btn btn-info" id="continue_btn" onClick={this.handleLoginSubmit}>Continue</button>
                        :
                        <button type="button" className="btn btn-info" disabled id="continue_btn" onClick={this.handleLoginSubmit}>Continue</button>
                      }
                      <p className="choose_signup">Or</p>
                      <button type="button" className="btn btn-default" id="signup_google"><img src="/static/img/google.png" className="smallicon"/>Sign up with Google</button>
                      <button type="button" className="btn btn-default" id="signup_facebook"><img src="/static/img/facebook.png" className="smallicon"/>Sign up with Facebook</button>
                      <p className="member_not">Not a member yet?<a href="#" id="signup" onClick={() => this.toggleModal("signup")}>Sign Up</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modrequiredal-description"
          open={openSignup}
          onClose={() => this.toggleModal("close")}
        >
          <div className="modal-container">
            <div className="modal fade steerModal" id="Signupdialog" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="row">
                    <div className="col-md-6 left_image_signup hidden-xs">
                      <div className="txtWrapper">
                        <h6 className="left_bottom_title">The easiest way to buy a car</h6>
                        <p className="left_bottom_content">Sign Up to use the maximum features of the service</p>
                      </div>
                    </div>
                    <div className="col-md-6 right_dialog_window">
                      <button type="button" className="close close_dialog" onClick={() => this.toggleModal("close")}>&times;</button>
                      <h2 className="login_title">Sign Up</h2>
                      <p className="login_content">Lorem Ipsum dolor sit amet</p>
                      <label className="email_phone_password">
                        Email or Phone
                        <Done className={regErrorFlags.reg_email ? "show_Done" : "hide_Done"} />
                      </label>
                      <input
                        type="text"
                        className={!regErrorFlags.reg_email && regErrorMsgs.reg_email? "form-control input_validation_invaild" : "form-control"}
                        id="reg_email"
                        name="reg_email"
                        value={reg_email || ''}
                        onChange={(e) => this.handleSignupChange(e.target.name, e.target.value)}
                        placeholder="forexample@gmail.com"/>
                        {!regErrorFlags.reg_email && regErrorMsgs.reg_email && <div className="input_invaild_feedback">{regErrorMsgs.reg_email}</div>}
                      <button type="button"  data-toggle="modal" data-target="#SignUpPwdConfirm" data-dismiss="modal" className="btn btn-info" id="continue_btn" onClick={() => this.toggleGotoConfirmPage()}>Continue</button>
                      <p className="choose_signup">Or</p>
                      <button type="button" className="btn btn-default" id="signup_google"><img src="/static/img/google.png" className="smallicon"/>Sign up with Google</button>
                      <button type="button" className="btn btn-default" id="signup_facebook"><img src="/static/img/facebook.png" className="smallicon"/>Sign up with Facebook</button>
                      <p className="account_already">Already have an account?<a href="#" id="signup" onClick={() => this.toggleModal("login")}>Log In</a></p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Modal>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={openCfmPwd}
          onClose={() => this.toggleModal("close")}
        >
          <div className="modal-container">
            <div className="modal fade steerModal" id="SignUpPwdConfirm" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="row">
                    <div className="col-md-6 left_image_signup hidden-xs">
                      <div className="txtWrapper">
                        <h6 className="left_bottom_title">The easiest way to buy a car</h6>
                        <p className="left_bottom_content">Sign Up to use the maximum features of the service</p>
                      </div>
                    </div>
                    <div className="col-md-6 right_dialog_window">
                      <button type="button" className="close close_dialog" onClick={() => this.toggleModal("close")}>&times;</button>
                      <h2 className="login_title">Sign Up</h2>
                      <p className="login_content">Lorem Ipsum dolor sit amet</p>
                      <label className="email_phone_password">
                        Password
                        <Done className={regErrorFlags.reg_password ? "show_Done" : "hide_Done"} />
                      </label>
                      <div>
                        <input type="password"
                            className="form-control pass"
                            id="password"
                            name="reg_password"
                            placeholder="Password"
                            value={reg_password || ''}
                            onChange={(e) => this.handleSignupChange(e.target.name, e.target.value)}
                            required
                        />
                      </div>
                      <label className="email_phone_password">
                        Confirm Password
                        <label className={regErrorFlags.reg_password_confirmation? "password_warning_hide" : "password_warning_show"}>
                          Passwords don't match
                        </label>
                      </label>
                      <input type="password"
                          className="form-control pass"
                          id="cfm_pass"
                          id="reg_password_confirmation"
                          name="reg_password_confirmation"
                          placeholder="Confirm Password"
                          value={reg_password_confirmation || ''}
                          onChange={(e) => this.handleSignupChange(e.target.name, e.target.value)}
                          required
                      />
                      <div className="terms_privacy">
                        <label><BlueCheckbox checked={regCheckBoxFlag} value="agree" onChange={this.handleAgreeChange}/> I Agree to the <a href="#" className="terms">Terms and Privacy Policy</a> </label>
                      </div>
                      {regCheckBoxFlag && regErrorFlags.reg_password && regErrorFlags.reg_password_confirmation ?
                        <button type="button" className="btn btn-info" id="signupbtn" onClick={this.handleRegisterSubmit}>Sign Up</button>
                        :
                        <button type="button" className="btn btn-info" id="signupbtn" disabled onClick={this.handleRegisterSubmit}>Sign Up</button>
                       }
                      
                      <p className="account_already">Already have an account?<a href="#" className="signup" onClick={() => this.toggleModal("login")}>Log In</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )}
};

// bind properties
PublicHeader.displayName = "Public Header"
PublicHeader.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {};
}

// export component
export default connect(
  mapStateToProps
)(withRouter(PublicHeader));