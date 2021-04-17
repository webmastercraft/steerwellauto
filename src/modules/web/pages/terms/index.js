// import libs
import { connect } from "react-redux"

import React, { Component } from "react"
import PropTypes from "prop-types"
import "../contacts/contacts.css"
import "./terms.css"

import PermIdentityIcon from '@material-ui/icons/PermIdentity';
	
class Page extends Component {
    render() {
        return(
        	<div className="page_container terms">
	            <div className="page_banner">
	            	<h3>Terms of Service</h3>
	            	<p>Donec facukusus tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor</p>
	            </div>
	            <div className="row">
	            	<div className="container white_bg shadow_box">
	            		<div className="row">
	            			<div className="col-md-3">
	            				<h3>Privacy Policy</h3>
	            			</div>
	            			<div className="col-md-7">
	            				<h3 className="title">What information do we collect?</h3>
	            				<p>We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey, fill out a form or visit our site. When ordering or registering on our site or through our call center, as appropriate, you may be asked to enter your: name, e-mail address, mailing address, phone number, credit card information, social security number, information about the vehicle you are selling or buying, or other relevant information. You may, however, visit our site anonymously, if you have set up these settings in your browser.</p>
	            				<p>By providing any information on our website, you consent to our terms and privacy policy</p>

	            				<h3 className="title">What do we use your information for?</h3>
	            				<p>Any of the information we collect from you may be used in one of the following ways: to personalize your experience( your information helps us to better respond to your individual needs); to improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you); to improve our user happiness ( your information helps us to more effectively respond to your user service requests and support needs); to process transactions; to administer a contest, promotion, survey or other site feature; to send periodic emails; and to perform other tasks that are necessary as part of providing services on our website.</p>
	            				<p>The email address you provide on the website for order processing or for any other reason, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc. If at any time you would like to unsubscribe from receiving future emails, send an email to <a href="mailto:unsubscribe@shift.com">unsubscribe@shift.com</a> and include the email address that you would like to unsubscribe.</p>
	            				<p>You information, whether public or private, will not be sold, exchanged, transferred, or given to any other company or entity for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</p>

	            				<h3 className="title">How do we protect your information?</h3>
	            				<p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We offer the use of a secure server. All supplied sensitive/credit information is transmitted using a private, secure connection and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.</p>
	            				<p>After a transaction, your private information( credit cards, social security numbers, financials, etc.) will be kept on file for more than 100 days in order to deal with any possible charge backs that may arise.</p>

	            				<h3 className="title">Do we use cookies?</h3>
	            				<p>Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser that enalbes the sites or service providers systems to recognize your browser and capture and remember certain information. This can only happen if you allow it( based on the settings in your browser). Shift does use cookies on our website, with your permission.</p>
	            				<p>We use cookies to help us remember and process the items in our shopping card, understand and save your preferences for future visits, keep track of advertisements and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collectioted on our behalf except to help us conduct and improve our business.</p>
	            				<p>If you prefer, you can shoose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookises via your browser settings. Like most websites, if you turn your cookies off, some of our services may not function properly. However, you can still place orders over the telephone or by our user happiness team.</p>

	            				<h3 className="title">Do we disclose any information to outside parties?</h3>
	            				<p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>

	            				<h3 className="title">Do you offer third party products or links on your website or in your communications to users?</h3>
	            				<p>Occasionally, at our discretion, we may include or offer third party products or services on our webiste. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>

	            				<h3 className="title">Do you comply with California Online Privacy Protection Act?</h3>
	            				<p>Yes. We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older. If you provide information on our website, you certify that you are 13 years or older.</p>

	            				<h3 className="title">How do I contact you about the privacy policy?</h3>
	            				<p>If there are any questions regarding Shift inspection Report terms and conditions, you may contact us using the information below.</p>
	            			</div>
	            		</div>
	            	</div>
	            </div>

			</div>
    	)
    }
}

export default connect()(Page)
