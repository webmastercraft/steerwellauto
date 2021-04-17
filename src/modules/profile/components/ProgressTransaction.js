import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import PaymentPopDown from './PaymentPopDown';

class ProgressTransaction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bClicked_PaymentInfo:false,
        }
        this.handleClickPaymentInfo = this.handleClickPaymentInfo.bind(this);
    }

    handleClickPaymentInfo = () =>{
        if(this.state.bClicked_PaymentInfo)
            this.setState({bClicked_PaymentInfo : false});
        else
            this.setState({bClicked_PaymentInfo : true});
    }

    render() {
        const data = this.props.data;
        if(data ==  undefined ) return <div />

        return  (
            data ? data.map((item, index) =>
                    <div key={index}>
                        <div className="row pro_para_body">
                            <div className="col-md-2 title_img">
                                <img src={ item.imagePaths ? item.imagePaths[0] : "./imgs/car_mercedes.png" } />
                            </div>
                            <div className="col-md-3 trans_detail">
                                <h5>{ item.modelTitle }</h5>
                                <div className="status_progress">
                                    <span>{ item.transactionDeliverStatusTitle }</span>
                                </div>
                            </div>
                            <div className="col-md-2 info_label">
                                <h5>Reserved Until</h5>
                                <div>{ item.reservedUntill }</div>
                            </div>
                            <div className="col-md-2 info_label">
                                <h5>Remains to pay</h5>
                                <div>{ item.remainToPay }</div>
                            </div>
                            <div className="col-md-3 more_info">
                                <Button variant="contained" className="item_title upload_check">
                                    Upload Check
                                </Button>
                                <div>
                                    <Button variant="text" onClick={this.handleClickPaymentInfo.bind(this)}>
                                        Payment Info
                                        {
                                            this.state.bClicked_PaymentInfo ? <KeyboardArrowUp /> : <KeyboardArrowDown/>
                                        }
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <PaymentPopDown openPopDown={this.state.bClicked_PaymentInfo} payInfo={item}/>
                    </div>
            )   :   ''
        );
    }
}

ProgressTransaction.defaultProps = {

}

export default ProgressTransaction