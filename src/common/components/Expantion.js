import React ,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import "./Expantion.css";
import PropTypes from "prop-types"

const ExpansionPanel = withStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    padding: 10,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:last-child': {
      borderBottom: 0,
    },
    '&:first-child': {
      borderTop: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 56,
    padding:0,
    fontSize:20,
    '&$expanded': {
      minHeight: 56,
    },
    '&:last-child': {
      borderBottom: 0,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
    '&:last-child': {
      borderBottom: 0,
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

class Expantion extends Component {

    constructor(props){
        super(props);
        this.state = {
            expanded:"panel0",
        }
        this.setExpanded = this.setExpanded.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = panel => (event, newExpanded) => {
        this.setExpanded(newExpanded ? panel : false);
    };

    setExpanded(bExpanded){
        this.setState({expanded : bExpanded});
    }

    renderFaqContent = () => 
        this.props.data.map((item,index) => {
        const panelName = `panel` + index;
        const {expanded} = this.state;
        if(this.props.containImage)
        {
            return(
                <ExpansionPanel key={index} square expanded={expanded === panelName} onChange={this.handleChange(panelName)} className="expantion_body">
                    <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header" className="expantion_summary">
                        <Typography className="ex_title">{item.title}</Typography>
                        <KeyboardArrowDown className={expanded === panelName ? "hide" : "show"}/>
                        <KeyboardArrowUp className={expanded === panelName ? "show" : "hide"}/>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className="ex_content">
                            {item.content[0].content}
                            <img src={item.content[1].content} className="imgcar"/>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )
        } else {
            return(
                <ExpansionPanel key={index} square expanded={expanded === panelName} onChange={this.handleChange(panelName)} className="expantion_body">
                    <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography className="ex_title">{item.title}</Typography>
                        <KeyboardArrowDown className={expanded === panelName ? "hide" : "show"}/>
                        <KeyboardArrowUp className={expanded === panelName ? "show" : "hide"}/>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className="ex_content">
                            {item.description}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )
        }
    })

    render(){
        return (
        <div className="expantion-content">
            {this.renderFaqContent()}
        </div>
  );
    }
}

Expantion.propTypes = {
    data: PropTypes.array.isRequired,
    containImage: PropTypes.bool.isRequired,
}

Expantion.defaultProps = {
    data : [
        { 
            title: "Lorem Ipsum Dolor Sit Amet 6",
            description: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
            image_path: "./imgs/Car_Second.jpg"
        },
        { 
            title: "Lorem Ipsum Dolor Sit Amet 2",
            description: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
            image_path: "./imgs/Car_Second.jpg"
        },
        { 
            title: "Lorem Ipsum Dolor Sit Amet",
            description: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
            image_path: "./imgs/Car_Second.jpg"
        },
        { 
            title: "Lorem Ipsum Dolor Sit Amet",
            description: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
            image_path: "./imgs/Car_Second.jpg"
        },
        { 
            title: "Lorem Ipsum Dolor Sit Amet",
            description: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
            image_path: "./imgs/Car_Second.jpg"
        },
    ],
    containImage:true,
}

export default Expantion
