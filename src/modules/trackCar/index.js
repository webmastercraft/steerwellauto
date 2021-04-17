import React, { Component } from "react"
import PropTypes from "prop-types"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Link } from "react-router-dom";

import '../profile/profile.css'
import Verticalflow from './components/Verticalflow'
import '../profile/track.css'

class TrackCar extends Component {
	static displayName = "ProfileFavorite"
  	static propTypes = {
    	// dispatch: PropTypes.func.isRequired,
  	}

  	componentDidMount() {
	    // this.props.dispatch(articleListRequest({ url: '/articles/published' }))
  	}

  	render() {
  		return 	<div className="container">
			<div className="row page_profile">
                 <div className="page_route col-md-12">
                    <div className="doc_car_select doc">
                        <Link to="/track_doc" className=""><button>Documents</button></Link>
                        <Link to="/track_car" className="active"><button>Car</button></Link>
                    </div>
                </div>
				<div className="col-md-3">
					<div className="profile_sidebar track_doc">
						<div className="profile_usertitle">
	                        <h4>Appointmens</h4>
	                    </div>
	                    <div className="profile_usermenu car_step">
                            <Verticalflow data={this.props.data}/>
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

TrackCar.defaultProps = {
    data : [
        {
            title: 'Car loading',
            date: '10 Mar 2019',
            time: '15:40',
            status: 'checked'
        },
        {
            title: 'Step 2',
            date: '10 Mar 2019',
            time: '15:40',
            status: 'on'
        },
        {
            title: 'Step 3',
            date: '10 Mar 2019',
            time: '15:40',
            status: 'will'
        },
        {
            title: 'Step 4',
            date: '10 Mar 2019',
            time: '15:40',
            status: 'will'
        },
        {
            title: 'Step 5',
            date: '10 Mar 2019',
            time: '15:40',
            status: 'will'
        },
        {
            title: 'Step 6',
            date: '10 Mar 2019',
            time: '15:40',
            status: 'will'
        },
        {
            title: 'Step 7',
            date: '10 Mar 2019',
            time: '15:40',
            status: 'will'
        },
        {
            title: 'Step 8',
            date: '10 Mar 2019',
            time: '15:40',
            status: 'will'
        },
        {
            title: 'Step 9',
            date: '10 Mar 2019',
            time: '15:40',
            status: 'will'
        },
        {
            title: 'Step 10',
            date: '10 Mar 2019',
            time: '15:40',
            status: 'will'
        },
        {
            title: 'Step 11',
            date: '10 Mar 2019',
            time: '15:40',
            status: 'will'
        },
        {
            title: 'Step 12',
            date: '10 Mar 2019',
            time: '15:40',
            status: 'will'
        },
        {
            title: 'Step 13',
            date: '10 Mar 2019',
            time: '15:40',
            status: 'will'
        },
        {
            title: 'Uploading in your port',
            date: '10 Mar 2019',
            time: '15:40',
            status: 'will'
        },
    ]
}

export default TrackCar
