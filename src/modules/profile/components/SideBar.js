import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FavoriteBorder, MailOutline, PersonOutline, LocalTaxi, ExitToApp } from '@material-ui/icons';

import './sidebar.css'

import { profileActions } from '../store/actions'

class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active_comp_num: 0,
            labels: ['Messages', 2],
            msg_cnt: 2,
            trans_cnt: 1
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const comNum = nextProps.actNum;
        this.setState({active_comp_num: comNum});
    }

    //newValue = Tab's value prop
    changePage = function (e, newValue) {
        e.preventDefault();

        this.setState({ active_comp_num: newValue});
        this.props.dispatch(profileActions.changeActiveCompNum(newValue));
    }

    renderTab (icon, label, cnt) {
        const SomeContent = React.forwardRef((props, ref) =>
            <div {...props} ref={ref}>
                <span>{ icon }{ label }</span>
                <span className="notify">{cnt}</span>
            </div>
        );

        return SomeContent;
    }

    render() {
        return  <div className="nav">
                    <AppBar>
                        <Tabs
                            className=""
                            value={ this.state.active_comp_num }
                            onChange={ this.changePage.bind(this) }
                            indicatorColor="primary"
                            textColor="primary"
                            orientation="vertical"
                        >
                            <Tab
                                component={this.renderTab(<PersonOutline />, "Personal Data")}
                            />
                            <Tab
                                component={this.renderTab(<MailOutline />, "Messages", this.state.msg_cnt)}
                            />
                            <Tab
                                component={this.renderTab(<LocalTaxi />, "Transactions", this.state.trans_cnt)}
                            />
                            <Tab
                                component={this.renderTab(<FavoriteBorder />, "Favorites")}
                            />
                            <Tab
                                className="last"
                                component={this.renderTab(<ExitToApp />, "Log Out")}
                            />
                        </Tabs>
                    </AppBar>
                </div>
    }
}

SideBar.defaultProps = {
    index: 0,
    value: 0
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
)(withRouter(SideBar));


