import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';

class PaymentPopDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    UNSAFE_ComponentWillReceiveProps(nextProps){
    }

    render() {
        const data = this.props.payInfo;
        if (data == undefined ) return <div />;
    	return 	data ?
                <div className={ this.props.openPopDown ? "pro_para_popdown row open" : "pro_para_popdown row close"}>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3 pop_down_title">
                                Residual Payment
                            </div>
                            <div className="col-md-3 pop_down_cost">
                                <span className="label">Cost</span>
                                <span>{ data.residualCost }</span>
                            </div>
                            <div className="col-md-3 pop_down_paydate">
                                <span className="label">Pay up</span>
                                <span>{ data.residualPaidAt }</span>
                            </div>
                            <div className="col-md-3 pop_down_result">
                                {
                                    data.residualPaid ?
                                        <CheckCircleOutline/>
                                    :
                                        <Button variant="outlined" className="item_title upload_check">
                                            Download Bill
                                        </Button>
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 pop_down_title">
                                Booking Payment
                            </div>
                            <div className="col-md-3 pop_down_cost">
                                <span className="label">Cost</span>
                                <span>{ data.bookingCost }</span>
                            </div>
                            <div className="col-md-3 pop_down_paydate">
                                <span className="label">Date of Payment</span>
                                <span>{ data.bookingPaidAt }</span>
                            </div>
                            <div className="col-md-3 pop_down_result">
                                { data.bookingPaid ?
                                    <CheckCircleOutline/>
                                    :
                                    <Button variant="outlined" className="item_title upload_check">
                                        Download Bill
                                    </Button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                : ''
    }
}

PaymentPopDown.defaultProps = {
    openPopDown:true,

}

export default PaymentPopDown