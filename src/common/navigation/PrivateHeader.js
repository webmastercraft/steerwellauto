// import libs
import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types"


// import components
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Person, Notifications } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import NavLinks from './NavLinks'
import NavItem from './NavItem'

import { profileActions } from '../../modules/profile/store/actions'

function getModalStyle() {
  const top = 0;
  const left = 0;

  return {
    top: `${top}%`,
    left: `${left}%`
  };
}
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(1, 2),
  },
  margin: {
    margin: theme.spacing(2),
  },
}));

// import Styles
import "./main.css"
import "./header.css"
import "./login.css"

// initiate component
class PrivateHeader extends Component{
  constructor(props) {
    super(props);
    this.state = {
        stickyClass: "",
        img_lang: "/flags/us.svg",
        str_lang: "en",
        mobile_header: "",
        user: null,
        headerBg: ''
    };
    this.onSelectLang = this.onSelectLang.bind(this);
    this.handleNavItem = this.handleNavItem.bind(this);
    this.toggleScroll = this.toggleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.toggleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleScroll)
  }
  toggleScroll() {
    if (window.pageYOffset > 200) {
      this.setState({ stickyClass: "sticky" })
    } else {
      this.setState({ stickyClass: "" })
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    this.setState({ user: nextProps.user })

    if( window.location.pathname == "/" )
      this.setState({ headerBg: "transparent" });
    else
      this.setState({ headerBg: "white_bg" });
  }

  onSelectLang(e){
    let selected_lang = e.target.value;
    let img_path = "/flags/" + selected_lang + ".svg"
    this.setState({ img_lang: img_path });
    this.setState({ str_lang: selected_lang });
  }

  toggleMobileMenu = () => {
    if( this.state.mobile_header == "" )
      this.setState({ mobile_header: "show"});
    else
      this.setState({ mobile_header: ""});
  };
  handleNavItem = (compNum) => {
    this.props.dispatch(profileActions.changeActiveCompNum(compNum));
  }

  render(){
    const modalStyle = getModalStyle();
    const { openLogin, openSignup, openCfmPwd } = this.state;
    const { img_lang, user, str_lang } = this.state;

    return(
      <div className={`page_header ${this.state.headerBg+" "+this.state.stickyClass}`}>
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
        <div className="page_login_user">
          <div className="page_user">
            <NavItem path="/notifications">
              <Badge badgeContent={4} color="primary">
                <Notifications />
              </Badge>
            </NavItem>
            <li className="dropdown dropdown-user ">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" aria-expanded="true">
                  { user && user.avatarPath ? <img src={ user.avatarPath} className="img-responsive" /> : <AccountCircleIcon />}
              </a>
              <ul className="dropdown-menu dropdown-menu-default">
                <NavItem path="/profile" className={this.props.active_comp_num == 0 ? 'nav-item-active': ''}><button onClick={ () => this.handleNavItem(0) }>My Profile</button></NavItem>
                <NavItem path="/profile"><button onClick={ () => this.handleNavItem(1) }>Messages</button></NavItem>
                <NavItem path="/profile"><button onClick={ () => this.handleNavItem(2) }>Transactions</button></NavItem>
                <NavItem path="/profile"><button onClick={ () => this.handleNavItem(3) }>Favorite</button></NavItem>
                <NavItem path="/track_car"><button onClick={ () => this.handleNavItem(4) }>Track Car</button></NavItem>
                <NavItem path="/track_doc"><button onClick={ () => this.handleNavItem(5) }>Track Doc</button></NavItem>
                <li className="divider"> </li>
                <li onClick={e => this.props.logout(e)}>
                    <a href="#">
                        <i className="icon-key"></i> Log Out </a>
                </li>
              </ul>
            </li>
          </div>
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
          </ul>
        </div>
      </div>
    )}
};

// bind properties
PrivateHeader.displayName = "Private Header"
PrivateHeader.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  router: PropTypes.object
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  }
};


// export component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PrivateHeader));