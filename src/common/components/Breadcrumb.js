import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import PropTypes from "prop-types"
import "./breadcrumb.css"
import NavItem from '../navigation/NavItem'

class CustomSeparator extends Component {
  constructor(props) {
    super(props)
  }


  renderPath = (paths) =>
  	paths.map((item, key) => {
  		return(
        <NavItem path={item.path} key={key} className="prev_path">
	        {item.name}
        </NavItem>
      	);
  	});

  render(){
  		const {path_data, current_path} = this.props;
	  return (
	    <div className="breadcrumb">
	      <Paper elevation={0} className="paper">
	        <Breadcrumbs separator=">" aria-label="breadcrumb" className="content">
	        	{this.renderPath(path_data)}
	          <Typography color="textPrimary" className="current_title">{current_path}</Typography>
	        </Breadcrumbs>
	      </Paper>
	    </div>
	  );
	}
}

CustomSeparator.propTypes = {
  	path_data: PropTypes.array.isRequired,
  	current_path: PropTypes.string.isRequired,
}

CustomSeparator.defaultProps = {
  	path_data:[
  		{
  			name: "Browse",
  			path: "/browse"
  		},
  	],
  	current_path: "Mercedes",
}


export default CustomSeparator;
