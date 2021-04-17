import React, { Component } from "react"
import PropTypes from "prop-types"
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TablePagination from '@material-ui/core/TablePagination';
import { Link, withRouter } from 'react-router-dom';
import "./page.css"

// import components
import SearchBar from "../../common/components/SearchBar"
import BodyType from "./components/bodytype/BodyType"
import Slider from "./components/customslider/Slider"
import SearchContent from "./components/searchresult/SearchContent"
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'

import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { browseActions } from './store/actions'
import { getBrowseData, getSearchData } from './service'

// import services
const arrSearchresult = [
		{
			image_paths: [
				"./imgs/car_audi.png",
				"./imgs/car_audiTT.png",
				"./imgs/car_audi.png",
				"./imgs/car_audiTT.png",
				"./imgs/car_audi.png",
				"./imgs/car_audi.png",
				"./imgs/car_audi.png",
				"./imgs/car_audi.png",
				"./imgs/car_bmw.png",
				"./imgs/car_audi.png",
				"./imgs/car_bmw.png",
				"./imgs/car_bmw.png",
				"./imgs/car_audi.png",
				"./imgs/car_audi.png",
			],
			id: 6,
			model_title: "Mercedes-Benz C63 2016",
			mileage: 5265,
			year: 2016,
			gear_box: "Automatic",
			fuel_type: "Gasoline",
			price: 20000,
			category_title:"Hachback",
			brand_title:"BMW",
		},
]
const arrBrowseData = {
	categories:[
		{
			id:1,
			title:"HatchBack",
			description:"In hac habitasse platea dictumest. viva,is adipiscing fementum auam voulpat aliquam. Integer et elit eget elit facillis tristique. Nam vel iaculis mauris. Sed ulla,corper tellus erat. non ultrices sem tincidunt euismod. fusce rhoncus porttitor velit. eu bibendu, nibh aliquet vel. fusce lorem leo. vehicula at mobhquis. facilisis accuman turpis",
			image_path:"./imgs/category-car.png",
			icon_path:"./imgs/browser-type-1.png",
		},
		{
			id:2,
			title:"Sedan",
			description:"In hac habitasse platea dictumest. viva,is adipiscing fementum auam voulpat aliquam. Integer et elit eget elit facillis tristique. Nam vel iaculis mauris. Sed ulla,corper tellus erat. non ultrices sem tincidunt euismod. fusce rhoncus porttitor velit. eu bibendu, nibh aliquet vel. fusce lorem leo. vehicula at mobhquis. facilisis accuman turpis",
			image_path:"./imgs/category-car.png",
			icon_path:"./imgs/browser-type-2.png",
		},
		{
			id:3,
			title:"Coupe",
			description:"In hac habitasse platea dictumest. viva,is adipiscing fementum auam voulpat aliquam. Integer et elit eget elit facillis tristique. Nam vel iaculis mauris. Sed ulla,corper tellus erat. non ultrices sem tincidunt euismod. fusce rhoncus porttitor velit. eu bibendu, nibh aliquet vel. fusce lorem leo. vehicula at mobhquis. facilisis accuman turpis",
			image_path:"./imgs/category-car.png",
			icon_path:"./imgs/browser-type-3.png",
		},
		{
			id:4,
			title:"Wagon",
			description:"In hac habitasse platea dictumest. viva,is adipiscing fementum auam voulpat aliquam. Integer et elit eget elit facillis tristique. Nam vel iaculis mauris. Sed ulla,corper tellus erat. non ultrices sem tincidunt euismod. fusce rhoncus porttitor velit. eu bibendu, nibh aliquet vel. fusce lorem leo. vehicula at mobhquis. facilisis accuman turpis",
			image_path:"./imgs/category-car.png",
			icon_path:"./imgs/browser-type-4.png",
		},
		{
			id:5,
			title:"SUV",
			description:"In hac habitasse platea dictumest. viva,is adipiscing fementum auam voulpat aliquam. Integer et elit eget elit facillis tristique. Nam vel iaculis mauris. Sed ulla,corper tellus erat. non ultrices sem tincidunt euismod. fusce rhoncus porttitor velit. eu bibendu, nibh aliquet vel. fusce lorem leo. vehicula at mobhquis. facilisis accuman turpis",
			image_path:"./imgs/category-car.png",
			icon_path:"./imgs/browser-type-5.png",
		},
		{
			id:6,
			title:"Van",
			description:"In hac habitasse platea dictumest. viva,is adipiscing fementum auam voulpat aliquam. Integer et elit eget elit facillis tristique. Nam vel iaculis mauris. Sed ulla,corper tellus erat. non ultrices sem tincidunt euismod. fusce rhoncus porttitor velit. eu bibendu, nibh aliquet vel. fusce lorem leo. vehicula at mobhquis. facilisis accuman turpis",
			image_path:"./imgs/category-car.png",
			icon_path:"./imgs/browser-type-6.png",
		},
		{
			id:7,
			title:"Bus",
			description:"In hac habitasse platea dictumest. viva,is adipiscing fementum auam voulpat aliquam. Integer et elit eget elit facillis tristique. Nam vel iaculis mauris. Sed ulla,corper tellus erat. non ultrices sem tincidunt euismod. fusce rhoncus porttitor velit. eu bibendu, nibh aliquet vel. fusce lorem leo. vehicula at mobhquis. facilisis accuman turpis",
			image_path:"./imgs/category-car.png",
			icon_path:"./imgs/browser-type-7.png",
		},
		{
			id:8,
			title:"Truck",
			description:"In hac habitasse platea dictumest. viva,is adipiscing fementum auam voulpat aliquam. Integer et elit eget elit facillis tristique. Nam vel iaculis mauris. Sed ulla,corper tellus erat. non ultrices sem tincidunt euismod. fusce rhoncus porttitor velit. eu bibendu, nibh aliquet vel. fusce lorem leo. vehicula at mobhquis. facilisis accuman turpis",
			image_path:"./imgs/category-car.png",
			icon_path:"./imgs/browser-type-8.png",
		},
		],
	brands:[],
	models:[],
	};
class Page extends Component {

	static propTypes = {
		dispatch: PropTypes.func.isRequired,
	}

	constructor(props){
		super(props);

		this.state={
			brand_id:1,
			model_id:1,
			page:0,
			rowsPerPage:5,
			sorttype:"price_high",
			bodytype:"Sedan",
			start_year:2013,
			end_year:2018,
			searchresult: arrSearchresult,
			mileage_min:0,
			mileage_max:100000,
			price_min:0,
			price_max:100000,
			categories:[],
			brands:[],
			models:[],
		};

		this.setPage = this.setPage.bind(this);
		this.setRowsPerPage = this.setRowsPerPage.bind(this);
		this.filterCondition = this.filterCondition.bind(this);
		this.handleClickBodyType = this.handleClickBodyType.bind(this);
		this.handleClickFilter = this.handleClickFilter.bind(this);

		let tempSearchArray = [];
	}

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { mileage_min, mileage_max, price_min, price_max, browsedata, searchdata} = nextProps;
        if(browsedata.brands[0] != null)
        {
	    	this.setState({brand_id : browsedata.brands[0].id});
	    	this.setState({model_id : browsedata.brands[0].models[0].id});
	    	this.setState({models : browsedata.brands[0].models});
        }

        this.setState({price_min : price_min});
        this.setState({price_max : price_max});
        this.setState({mileage_min : mileage_min});
        this.setState({mileage_max : mileage_max});
        this.setState({categories : browsedata.categories});
        this.setState({brands : browsedata.brands});

        if(browsedata.year != null)
        	this.setState({start_year : browsedata.year.min, end_year : browsedata.year.max});

        if(searchdata != null)
        {
        	this.setState({searchresult : searchdata});
        	this.tempSearchArray = this.state.searchresult;
        }
    }

	UNSAFE_componentWillMount(){
		this.props.dispatch(browseActions.get_BrowseData(arrBrowseData));
		let condition = {};

	    this.props.dispatch(getSearchData(condition));
	    this.props.dispatch(getBrowseData());
		this.sortSearchResult(this.state.searchresult,this.state.sorttype);
	}

	UNSAFE_componentDidMount() {
	}

	renderBrandMenuItem = (brands) =>
		brands.map((item,key) =>{
			return (
				<MenuItem value={item.id} key={key}>{item.title}</MenuItem>
			);
		})

	renderModelMenuItem = (models) =>
		models.map((item,key) =>{
			return (
				<MenuItem value={item.id} key={key}>{item.title}</MenuItem>
			);
		})

	renderBodyType = (categories) =>
		categories.map((item,key) => {
			return(
				<div className="col-md-6 col-sm-6 body_type_item" key={key}>
					<BodyType
						img_url={item.iconPath}
						bodytype={item.title}
						handleClickBodyType={this.handleClickBodyType}
						clicked={this.state.bodytype}
						/>
				</div>
			);
		})

	renderSearchResult = (searchresult) =>
		searchresult.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
		.map((item,key) =>{
			return(
				<SearchContent key={key} result={item}/>
			);
		})

	sortSearchResult = (searchresult, sorttype) => {
		if(sorttype == "price_low") {
			searchresult.sort(function(a, b){return a.price - b.price});
		} else if(sorttype == "price_high") {
			searchresult.sort(function(a, b){return b.price - a.price});
		}
		else if(sorttype == "year_high") {
			searchresult.sort(function(a, b){return b.year - a.year});
		}
		else if(sorttype == "year_low") {
			searchresult.sort(function(a, b){return a.year - b.year});
		}
		else if(sorttype == "mileage_high") {
			searchresult.sort(function(a, b){return b.mileage - a.mileage});
		}
		else if(sorttype == "mileage_low") {
			searchresult.sort(function(a, b){return a.mileage - b.mileage});
		}
	}

	filterCondition(item){
		return (item.category_title == this.state.bodytype &&
				item.year >= Number(this.state.start_year) &&
				item.year <= Number(this.state.end_year) &&
				item.price >= this.state.price_min &&
				item.price <= this.state.price_max &&
				item.mileage >= this.state.mileage_min &&
				item.mileage <= this.state.mileage_max);
	}

	handleClickFilter = () =>{
		this.setState({searchresult:this.tempSearchArray.filter(this.filterCondition)});

	}

	handleClickBodyType(bodytype){
		this.setState({bodytype : bodytype});
	}

	setPage(value){
		this.setState({page:value});
	}

	setRowsPerPage(value){
		this.setState({rowsPerPage:value});
	}

	handleChangePage = (event, newPage) => {
		this.setPage(newPage);
	};

	handleChangeRowsPerPage = event => {
		this.setRowsPerPage(parseInt(event.target.value, 10));
		this.setPage(0);
	};

	handleChangeSortType = event => {
		this.setState({sorttype:event.target.value});
		this.sortSearchResult(this.state.searchresult, event.target.value);
	};

	handleChange_Brand = (event) => {
		this.setState({brand_id : event.target.value});
		this.setState({models : this.state.brands[event.target.value-1].models})
		this.setState({model_id : this.state.brands[event.target.value-1].models[0].id})
	};

	handleChange_Model = (event) => {
		this.setState({model_id : event.target.value});
	};

	handleChange_Year = (name, value) => {
    this.setState( { [name]: value });
  }

	render() {
		const { start_year, end_year } = this.state;
			return(
				<div className="container browse_page_container">
					<div className="row">
						<div className="col-md-12">
							<SearchBar p_holder="Search for a brand, model or body type..."/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3">
							<div className="browser_section_left shadow_box">
								<div className="row left_item">
									<div className="col-md-12">
										<h4 className="item_title">Body Type</h4>
									</div>
									<div className="col-md-12" >
										<div className="row body_wrapper">
											{this.renderBodyType(this.state.categories)}
										</div>
									</div>
								</div>
								<div className="row left_item">
									<div className="col-md-12" >
										<h4 className="item_title">Make</h4>
									</div>
									<div className="col-md-12">
										<div className="body_wrapper browser_section_make">
											<Select
												labelId="label"
												id="select_brand"
												value={this.state.brand_id}
												variant="outlined"
												onChange={this.handleChange_Brand.bind(this)}>
												{this.renderBrandMenuItem(this.state.brands)}
											</Select>
											<Select
												labelId="label"
												id="select_model"
												value={this.state.model_id}
												variant="outlined"
												onChange={this.handleChange_Model.bind(this)}>
												{this.renderModelMenuItem(this.state.models)}
											</Select>
										</div>
									</div>
								</div>
								<div className="row left_item">
									<div className="col-md-12" >
										<h4 className="item_title">Mileage</h4>
									</div>
									<div className="col-md-12">
										<div className="body_wrapper">
											<Slider slider_type="mileage" min={this.state.mileage_min} max={this.state.mileage_max}/>
										</div>
									</div>
								</div>
								<div className="row left_item">
									<div className="col-md-12">
										<h4 className="item_title">Year</h4>
									</div>
									<div className="col-md-12">
										<div className="body_wrapper input2_wrapper">
											<div className="input_left">
              									<input type="number" name="start_year" value={start_year} onChange={e => this.handleChange_Year(e.target.name, e.target.value)}/>
											</div>
											<div className="separator">
												<p>-</p>
											</div>
											<div className="input_right">
              									<input type="number" name="end_year" value={end_year} onChange={e => this.handleChange_Year(e.target.name, e.target.value)}/>
											</div>
										</div>
									</div>
								</div>
								<div className="row left_item">
									<div className="col-md-12">
										<h4 className="item_title">Price ($)</h4>
									</div>
									<div className="col-md-12">
										<div className="body_wrapper">
											<Slider slider_type="price" min={this.state.price_min} max={this.state.price_max}/>
										</div>
									</div>
								</div>
								<div className="row left_item">
									<div className="col-md-12">
										<Button
											className="btn browser_section_left_item_apply"
											onClick={this.handleClickFilter}>
											Apply Filters
										</Button>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-9 browser_section_right">
							<div className="shadow_box">
								<div className="right_title" >
									<h4>Search Results <span>({this.state.searchresult.length})</span></h4>
									<div className="top_pagination">
										<label>Results per page</label>
										<Select
											labelId="label"
											id="select_rowsperpage"
											value={this.state.rowsPerPage}
											IconComponent={KeyboardArrowDown}
											variant="outlined"
											onChange={this.handleChangeRowsPerPage.bind(this)}>
											<MenuItem value="5">5</MenuItem>
											<MenuItem value="10">10</MenuItem>
											<MenuItem value="25">25</MenuItem>
										</Select>
										<label className="sort">Sort by</label>
										<Select
											labelId="label"
											id="select_order"
											value={this.state.sorttype}
											variant="outlined"
											IconComponent={KeyboardArrowDown}
											onChange={this.handleChangeSortType.bind(this)}>
											<MenuItem value="price_high">Price(Highest First)</MenuItem>
											<MenuItem value="price_low">Price(Lowest First)</MenuItem>
											<MenuItem value="year_high">Year(Highest First)</MenuItem>
											<MenuItem value="year_low">Year(Lowest First)</MenuItem>
											<MenuItem value="mileage_high">Mileage(Highest First)</MenuItem>
											<MenuItem value="mileage_low">Mileage(Lowest First)</MenuItem>
										</Select>
									</div>
								</div>
								<div className="right_content" >
									{this.renderSearchResult(this.state.searchresult)}
									<TablePagination
										rowsPerPageOptions={[5, 10, 25]}
										component="div"
										count={this.state.searchresult.length}
										rowsPerPage={this.state.rowsPerPage}
										page={this.state.page}
										backIconButtonProps={{
											'aria-label': 'previous page',
										}}
										nextIconButtonProps={{
											'aria-label': 'next page',
										}}
										onChangePage={this.handleChangePage.bind(this)}
										onChangeRowsPerPage={this.handleChangeRowsPerPage.bind(this)}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}
}

const mapStateToProps = state => {
  const { mileage_min, mileage_max, price_min, price_max, browsedata, searchdata } = state.browse
    return {
      mileage_min,
      mileage_max,
      price_min,
      price_max,
      browsedata,
      searchdata
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
