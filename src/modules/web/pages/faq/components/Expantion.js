import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import "./Expantion.css";

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

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="expantion-content">
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
          <KeyboardArrowDown className={expanded === 'panel1'?"hide":"show"}/>
          <KeyboardArrowUp className={expanded === 'panel1'?"show":"hide"}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.
            <img src="./imgs/Car_Second.jpg" className="imgcar"/>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
          <KeyboardArrowDown className={expanded === 'panel2'?"hide":"show"}/>
          <KeyboardArrowUp className={expanded === 'panel2'?"show":"hide"}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.
            <img src="./imgs/Car_Second.jpg" className="imgcar"/>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
          <KeyboardArrowDown className={expanded === 'panel3'?"hide":"show"}/>
          <KeyboardArrowUp className={expanded === 'panel3'?"show":"hide"}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.
            <img src="./imgs/Car_Second.jpg" className="imgcar"/>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
          <KeyboardArrowDown className={expanded === 'panel4'?"hide":"show"}/>
          <KeyboardArrowUp className={expanded === 'panel4'?"show":"hide"}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.
            <img src="./imgs/Car_Second.jpg" className="imgcar"/>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
          <KeyboardArrowDown className={expanded === 'panel5'?"hide":"show"}/>
          <KeyboardArrowUp className={expanded === 'panel5'?"show":"hide"}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.
            <img src="./imgs/Car_Second.jpg" className="imgcar"/>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
