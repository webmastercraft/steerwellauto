import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { profileActions } from '../store/actions'
import './messages.css'

class Messages extends Component {

    constructor(props) {
        super(props);
        this.toChat = this.toChat.bind(this);
    }

    UNSAFE_componentWillMount() {
        // this.props.dispatch()
    }

    UNSAFE_componentWillReceiveProps( nextprops ) {

    }

    toChat ( _data ) {
        this.props.dispatch(profileActions.chatting( true ));
    }

    render() {
        return  <div className="profile_content message">
                    <div className="profile_caption">
                        <img src="./imgs/msg_search.png" />
                        <input placeholder="Search messages" className="message_search" />
                    </div>
                    <div className="profile_paragraph">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="msg_list">
                                {
                                    this.props.data.map((item, index) =>
                                        <div className={ item.new_cnt ? 'highlighted list_item' : 'list_item'} key={ index }>
                                            <li onClick={ this.toChat }>
                                                <img src={ item.img } />
                                                <div className="msg_title">
                                                    <h5>{ item.carName }</h5>
                                                    <h5 className="msg_date">{ item.date }</h5>
                                                </div>
                                                <div className="last_msg">
                                                    <span className="you">{ item.talking_per }:</span> { item.last_msg }
                                                    <span className={ item.new_cnt ? 'new_msg_count' : ''}>{ item.new_cnt }</span>
                                                </div>
                                            </li>
                                        </div>
                                    )
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

Messages.defaultProps = {
    data: [
        {
            img: './imgs/car_mercedes.png',
            carName: 'Mercedes-Benz CS3 2016',
            date: "14:56",
            talking_per: 'You',
            last_msg: 'Hello World',
        },
        {
            img: './imgs/car_hyundai.png',
            carName: 'Mercedes-Benz CS3 2016',
            date: '22 Mar 2019',
            talking_per: 'You',
            last_msg: 'Hello World',
            new_cnt: 3
        },
        {
            img: './imgs/car_mercedes2.png',
            carName: 'Mercedes-Benz CS3 2016',
            date: '22 Mar 2019',
            talking_per: 'You',
            last_msg: 'Hello World',
            new_cnt: 1
        },
        {
            img: './imgs/car_audi.png',
            carName: 'Mercedes-Benz CS3 2016',
            date: '22 Mar 2019',
            talking_per: 'You',
            last_msg: 'Hello World',
        },
        {
            img: './imgs/car_audiTT.png',
            carName: 'Mercedes-Benz CS3 2016',
            date: '22 Mar 2019',
            talking_per: 'You',
            last_msg: 'Hello World',
        },
        {
            img: './imgs/car_bmw.png',
            carName: 'Mercedes-Benz CS3 2016',
            date: '22 Mar 2019',
            talking_per: 'You',
            last_msg: 'Hello World',
        },
    ]
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
)(withRouter(Messages));