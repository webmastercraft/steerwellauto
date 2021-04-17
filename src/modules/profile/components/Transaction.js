import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import PendingTransaction from './PendingTransaction';
import ProgressTransaction from './ProgressTransaction';
import CompletedTransaction from './CompletedTransaction';
import './transaction.css'

import { profileService } from '../service'

class Transaction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transactions: [],
        }
    }

    render() {
        let completed = [];
        let progress = [];
        let pending = [];

        if (this.props.transactions !== undefined) {
            completed = this.props.transactions.completed;
            progress = this.props.transactions.inProgress;
            pending = this.props.transactions.pending;
        }

    	return 	<div className="profile_content transaction">
                    <div className="profile_content_body">
                        <div className="profile_paragraph">
                            <h3>Pending</h3>
                            <PendingTransaction data={ pending }/>
                        </div>
                        <div className="profile_paragraph">
                            <h3>In Progress</h3>
                            <ProgressTransaction data={ progress }/>
                        </div>
                        <div className="profile_paragraph">
                            <h3>Completed</h3>
                            <CompletedTransaction data={ completed }/>
                        </div>
                    </div>
                </div>
    }
}

const mapStateToProps = state => {
    return {
        state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Transaction));