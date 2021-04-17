import React, { Component } from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import './profile.css'
import './responsive.css'

import AvatarUpload from "./components/AvatarUpload"
import Upload from "./components/upload/Upload";
import SideBar from "./components/SideBar"
import PersonalData from "./components/PersonalData";
import Messages from "./components/Messages";
import Transaction from "./components/Transaction";
import Favorite from "./components/Favorite";
import Chat from "./components/Chat";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { profileService } from './service'
import { logout } from '../auth/service'

class Profile extends Component {
    static displayName = "ProfilePage"
    constructor(props) {
      super(props);

      this.state = {
        path: '',
        active_comp_num: 0,
        isChatting: false,
        profile: {},
        transactions: {},
        favorites: {},
        avatarUploading: false
      }

      this.onFilesAdded = this.onFilesAdded.bind(this);
      this.openAvatarDialog = this.openAvatarDialog.bind(this);
      this.renderSwtich = this.renderSwtich.bind(this);
      this.handleAvatarUpdate = this.handleAvatarUpdate.bind(this);
    }

    UNSAFE_componentWillMount() {
      const { user } = this.props;
      if(user)
        this.props.dispatch(profileService.fetchUserData(user.id))
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      let {
        active_comp_num,
        profile,
        isChatting,
        transactions,
        favorites,
        user
      } = nextProps;

      if(!profile)
        this.props.dispatch(profileService.fetchUserData(user.id))

      if(active_comp_num == undefined)
        active_comp_num = 0

      this.setState({
        active_comp_num,
        profile,
        isChatting,
        transactions,
        favorites,
      });
    }

    openAvatarDialog(e) {
      // open dialog
      // <AvatarUpload />
      this.setState({ avatarUploading: !this.state.avatarUploading});

    }

    onFilesAdded(evt) {
      const files = evt.target.files;
    }

    handleAvatarUpdate(param) {
      if (param.success && param.url) {
        // profile.avatarPath
        this.setState((state) => {
          const { profile } = state;
          profile.avatarPath = param.url;
          return {
            profile,
          }
        });
      }
    }

    renderSwtich(profile, transactions, favorites) {
      if(this.state.isChatting){
        return <Chat />
      }
      else {
        if(this.state.active_comp_num == 0) {
          return <PersonalData profile={ profile } />
        } else if(this.state.active_comp_num == 1) {
          return <Messages />
        } else if(this.state.active_comp_num == 2 ) {
          return <Transaction transactions={ transactions } />
        } else if(this.state.active_comp_num == 3) {
          return <Favorite favorites={ favorites } />
        } else if(this.state.active_comp_num == 4) {
          this.setState({ active_comp_num: 0 });
          this.props.dispatch(logout())
        }
      }
    }

    render() {
      const {
        profile,
        transactions,
        favorites,
        active_comp_num,
        avatarUploading
      } = this.state;

      if( profile == undefined ) return <div />;

        return <div className="container profile">
            <div className="row page_profile">
              {
                avatarUploading ?
                  <AvatarUpload
                    openAvatarDialog={this.openAvatarDialog}
                    uploadResponseFunc={(param) => {this.handleAvatarUpdate(param)}}
                  />
                :
                  ''
              }
              <div className="col-lg-3 col-md-4">
                <div className="profile_sidebar">
                  <div
                    className="profile_userpic"
                    onClick={this.openAvatarDialog}
                    style={{ cursor: "pointer" }}
                  >
                    <input
                      ref={this.fileInputRef}
                      className="FileInput"
                      type="file"
                      onChange={this.onFilesAdded}
                    />

                    {
                      profile.avatarPath ?
                        <img
                          src={ profile.avatarPath}
                          className="img-responsive"
                        />
                      :
                        <AccountCircleIcon />
                    }
                  </div>
                  <div className="profile_usertitle">
                      <h4> { profile ? profile.name : 'NickName'} </h4>
                  </div>
                  <div className="profile_usermenu">
                      <SideBar actNum={ active_comp_num == undefined ? 0 : active_comp_num}/>
                  </div>
                </div>
                <div className="profile_invite">
                  <a href="">
                    <img src="./imgs/user_invite.png" /> Invite Your Friends
                  </a>
                </div>
                <div className="profile_hint">
                  And get a 20% discount on the next car booking
                </div>
              </div>
              <div className="col-lg-9 col-md-8 render">
              {
                this.renderSwtich(profile, transactions, favorites)
              }
              </div>
            </div>
      </div>
  }
}

const mapStateToProps = state => {
  const {
    profile,
    messages,
    transactions,
    favorites,
    active_comp_num,
    isChatting
  } = state.profile;

  return {
    active_comp_num,
    profile,
    messages,
    transactions,
    favorites,
    isChatting,
    user: state.user,
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
)(withRouter(Profile));
