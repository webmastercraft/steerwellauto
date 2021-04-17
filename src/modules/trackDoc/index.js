import React, { Component } from "react"
import PropTypes from "prop-types"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import { CheckCircle } from '@material-ui/icons';
import { Link } from "react-router-dom";

import '../profile/profile.css'
import '../profile/components/sidebar.css'
import '../profile/track.css'

class ProfileTrackDoc extends Component {
	static displayName = "ProfileFavorite"
  	static propTypes = {
    	// dispatch: PropTypes.func.isRequired,
  	}

  	componentDidMount() {
	    // this.props.dispatch(articleListRequest({ url: '/articles/published' }))
  	}

  	render() {
        return  <div className="container">
            <div className="row page_profile">
                <div className="page_route col-md-12">
                    <div className="doc_car_select doc">
                        <Link to="/track_doc" className="active"><button>Documents</button></Link>
                        <Link to="/track_car" className=""><button>Car</button></Link>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="profile_sidebar track_doc">
                        <div className="profile_usertitle">
                            <h4 className="profile_usertitle_name">Documents</h4>
                        </div>
                        <div className="profile_usermenu">
                            <div className="order vehicle">
                                1. Vehicle owner Document
                                <div className="delivered">
                                    <CheckCircle />
                                    Delivered
                                </div>
                                <div className="will_deliver">
                                    Will be delivered
                                </div>
                                <div className="deliver_date">
                                    3 Apr 2019, 16:30
                                </div>
                            </div>
                            <div className="order trans">
                                2. Document about transportation
                                <div className="will_deliver">
                                    Will be delivered
                                </div>
                                <div className="deliver_date">
                                    3 Apr 2019, 16:30
                                </div>
                            </div>
                            <div className="order bill">
                                3. Bill of Landing
                                <div className="will_deliver">
                                    Will be delivered
                                </div>
                                <div className="deliver_date">
                                    3 Apr 2019, 16:30
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="profile_content">
                        <div className="profile_caption track_doc">
                            <h4 className="customer_name">Mercedes-Benz CS3 2016 (Document Traking)</h4>
                            <div className="track_ports">
                                <img src="./imgs/icon_map.png" className="icon_map" />
                                <span>Dubai, United Arab Emirates</span>
                                <img src="./imgs/icon_right_dir.png" className="icon_dir" />
                                <span>Morocco, Port of Casablanca</span>
                            </div>
                            <div className="google_map">
                                <img src="./imgs/map.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  	}
}

ProfileTrackDoc.defaultProps = {
    carStatus: '',
}

export default ProfileTrackDoc
