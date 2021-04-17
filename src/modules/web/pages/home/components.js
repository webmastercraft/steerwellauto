import { connect } from "react-redux"
import React, { Component } from "react"
import PropTypes from "prop-types"

// import components
import Header from "./components/Header"

// import services
import "./page.css"

// Material UI components
import Select from "./components/Select"
import Slider from "./components/Slider"
import Slider2 from "./components/Slider2"
import Tab from "./components/Tab"
import Expantion from "./components/Expantion"
import Snackbar from "./components/Snackbar"
import Radio from "./components/Radio"
import Grid from "./components/Grid"
import Button from "./components/Button"
import Checkbox from "./components/Checkbox"
import Datepicker from "./components/Datepicker"
import Switch from "./components/Switch"
import Textfield from "./components/Textfield"
import Autocomplete from "./components/Autocomplete"
import Navigation from "./components/Navigation"
import Breadcrumb from "./components/Breadcrumb"
import Drawer from "./components/Drawer"
import Menu from "./components/Menu"
import Stepper from "./components/Stepper"
import Appbar from "./components/Appbar"
import Card1 from "./components/Card1"
import Card2 from "./components/Card2"
import Progress from "./components/Progress"
import Dialog from "./components/Dialog"
import Badge from "./components/Badge"
import Chips from "./components/Chips"
import Icons from "./components/Icons"
import List from "./components/List"
import Tables from "./components/Tables"
import Tooltip from "./components/Tooltip"
import Modal from "./components/Modal"
import Rating from "./components/Rating"
import Speeddial from "./components/Speeddial"
import Togglebutton from "./components/Togglebutton"
import Treeview from "./components/Treeview"
import Lightbox from "./components/Lightbox"
import Verticalflow from "./components/Verticalflow"
import Infinitescroll from "./components/Infinitescroll"
import DemoCarousel from "./components/ImageCarousel"
import ImageCarousel from '../../../../common/image-carousel/index'
import ReviewBlock from '../../../../common/review/ReviewBlock'

import 'react-responsive-ui/style.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/react-responsive-ui'

import Upload from "./upload/Upload";

class Components extends Component {
  static displayName = "HomePage"
  constructor(props) {
    super(props)

    this.state = {
      phone_number: ""
    };
  }

  render() {
    return <div>
      <div className="container">
      <Infinitescroll/>
      </div>
    </div>
  }
}

export default Components