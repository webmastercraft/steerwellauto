import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CheckCircle } from '@material-ui/icons';
import MailIcon from '@material-ui/icons/Mail';
import StarIcon from '@material-ui/icons/Star';
import './vertical.css'

export default class Verticalflow extends Component {

  	render() {
  		const { data } = this.props
     	return (
	     	<div>
				<VerticalTimeline className="nav">
				{
					data.map((steps) => 
					  	<VerticalTimelineElement
						    className="vertical-timeline-element--work"
						    iconStyle={{ background: steps.status == 'checked' ? 'rgb(210, 217, 225)' : 'rgb(33, 150, 243)', color: '#fff' }}
					  	>
					  		<div className={steps.status == 'checked' ? 'done_step' : steps.status == 'on' ? 'on_step' : 'will_step'} >
						  		<div className="step_dot">
						  			<span>{steps.title}</span><i className="track_checked">{ steps.status == 'checked' ? <CheckCircle /> : ''}</i>
							    	<div className="step_date">{steps.date}, {steps.time}</div>
							    </div>
						    </div>
					  	</VerticalTimelineElement>
					)
				}
				</VerticalTimeline>
			</div>
    );
  }
}