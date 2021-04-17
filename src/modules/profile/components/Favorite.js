import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CarItem from "../../../common/car-list/CarItem";
import "../../../common/car-list/car_list.css";
import './favorite.css'

class Favorite extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        per_page_cnt: 0,
        sort_by_cnt: 0
    }

    changePerPageCnt = function (e) {
        this.setState({ per_page_cnt: e.target.value});
    }

    changeSortByCnt = function (e) {
        this.setState({ sort_by_cnt: e.target.value});
    }

    UNSAFE_componentDidMount() {
    }

    render() {
        let favorites = {};
        if(this.props.favorites != undefined){
            favorites = this.props.favorites;
        }

    	return 	<div className="row">
                    <div className="col-md-12">
                        <div className="profile_content">
                            <div className="profile_caption favor" >
                                <h3>Favorites</h3>
                                <div className="top_pagination">
                                  <label>Results per page</label>
                                  <Select
                                    labelId="label"
                                    id="select_rowsperpage"
                                    value="5"
                                    variant="outlined"
                                    >
                                    <MenuItem value="5">5</MenuItem>
                                    <MenuItem value="10">10</MenuItem>
                                    <MenuItem value="25">25</MenuItem>
                                  </Select>
                                  <label className="sort">Sort by</label>
                                  <Select
                                    labelId="label"
                                    id="select_rowsperpage"
                                    value={this.state.sorttype}
                                    variant="outlined"
                                    defaultValue="price_low"
                                    >
                                    <MenuItem value="price_high">Price(Highest First)</MenuItem>
                                    <MenuItem value="price_low">Price(Lowest First)</MenuItem>
                                  </Select>
                                </div>
                            </div>
                            <div className="profile_content_body favor">
                              <div className="recent-section-content row">
                                {
                                    favorites.map((item, index) =>
                                        <CarItem
                                            parent="Favor"
                                            key={ index }
                                            id={ item.id }
                                            model_title={ item.modelTitle }
                                            images={ item.imagePaths[0] }
                                            year={ item.year }
                                            price={ item.price }
                                            category_title={ item.categoryTitle }
                                            brand_title={ item.brandTitle }
                                            gearbox={ item.gearBox }
                                            mileage={ item.mileage }
                                            isNew={ item.isNew }
                                        />
                                    )
                                }
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
    }
}

export default Favorite