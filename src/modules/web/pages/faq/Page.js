import React, { Component } from "react"
import PropTypes from "prop-types"
import {Link, withRouter} from "react-router-dom"
import "./page.css"
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import RecordVoiceOverOutlinedIcon from '@material-ui/icons/RecordVoiceOverOutlined';

// import components
import SearchBar from "../../../../common/components/SearchBar"
import Expantion from "../../../../common/components/Expantion"
// import services
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { faqActions } from './store/actions'
import { getFaqData } from './service'


class Page extends Component {

	categories = [
		{
			title:"General information",
			icon: ErrorOutlineIcon,
			count: 5
		},
		{
			title:"Security & Protection",
			icon: HttpsOutlinedIcon,
			count: 7
		},
		{
			title:"Billing & Shipping",
			icon: ReceiptOutlinedIcon,
			count: 12
		},
		{
			title:"Personal Account",
			icon: PermIdentityIcon,
			count: 7
		},
		{
			title:"Promotions & Services",
			icon: RecordVoiceOverOutlinedIcon,
			count: 2
		}
	];

	data = [
		[
		    {
		        title: "Lorem Ipsum Dolor Sit Amet1",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
	    ],
	    [
		    {
		        title: "Lorem Ipsum Dolor Sit Amet2",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
	    ],
	    [
		    {
		        title: "Lorem Ipsum Dolor Sit Amet3",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
	    ],
	    [
		    {
		        title: "Lorem Ipsum Dolor Sit Amet4",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
	    ],
	    [
		    {
		        title: "Lorem Ipsum Dolor Sit Amet5",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
	    ],
	    [
		    {
		        title: "Lorem Ipsum Dolor Sit Amet6",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
		    {
		        title: "Lorem Ipsum Dolor Sit Amet",
		        content: "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.",
		        image: "./imgs/Car_Second.jpg"
		    },
	    ],
];

	static propTypes = {
	    dispatch: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props)

		this.state = {
		  activeTab: 0,
		  expanData: this.data[0],
		  faq_all_data: this.categories,
		};

		// bind component with event handlers
		this.handleClick = this.handleClick.bind(this);
		this.renderCateroryItems = this.renderCateroryItems.bind(this);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		const {faqdata} = nextProps;
		this.setState({faq_all_data:faqdata});
		this.setState({expanData : faqdata[0].items})
    }

    UNSAFE_componentWillMount(){
        this.props.dispatch(getFaqData());
    }

	handleClick = (index) => {
		this.setState({activeTab: index, expanData: this.state.faq_all_data[index].items});
	};


	renderCateroryItems = () =>
		this.state.faq_all_data.map((item,key) => {
			const Icon = this.categories[key].icon;
			return(
				<button key={key} onClick={()=> { this.handleClick(key) }} className={`list-group-item ${this.state.activeTab == key && 'activeItem'}`} >
                	<Icon />{item.title}<span className="digit">({item.itemCount})</span>
                </button>
			)
		})

    render() {

    	const {activeTab} = this.state;

        return(
        	<div className="container-fluid faq_container">
        		<div className="row">
	                <div className="col-sm-12 Backcar test">
	                    <p className="help">How can we help you?</p>
	                    <p className="Donec">Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id</p>
	                    <SearchBar p_holder="Search for a question"/>
	                    <div className="somebtn">
	                        <button type="button" className="btn-sm">How it works?</button>
	                        <button type="button" className="btn-sm">What is it?</button>
	                        <button type="button" className="btn-sm">Lorem Ipsum Dolor Sit Amet</button>
	                        <button type="button" className="btn-sm">Another popular question</button>
	                    </div>
	                </div>
	            </div>
	            <div className="container">
	                <div className="row">
	                    <div className="col-sm-12 text">
	                        <p className="Categories">Categories of questions</p>
	                        <p className="facilisis">Donec facilisis tortor ut augue lacinia, at viverra</p>
	                    </div>
	                </div>
	                <div className="row main">
	                    <div className="col-sm-4 item">
	                        <div className="list-group">
	                        	{this.renderCateroryItems()}
	                        </div>
	                    </div>
	                    <div className="col-sm-8 drops">
	                        <Expantion data={this.state.expanData} containImage={true}/>
	                    </div>
	                </div>
			    </div>
        	</div>
    	)
    }
}

const mapStateToProps = state => {
  const { faqdata } = state.faq
    return {
        faqdata
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
)(withRouter(Page));
