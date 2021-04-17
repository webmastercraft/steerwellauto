import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link, withRouter } from 'react-router-dom';
import "./page.css"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import Button from '@material-ui/core/Button';

// import components
import ArticleRow from "../../common/components/ArticleRow"
import ImageCarousel from '../../common/image-carousel/index'

// import services
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { blogActions } from './store/actions'
import { getBlogData } from './service'



const more_count = 2;
class Page extends Component {
  static propTypes = {
      dispatch: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);

        this.state={
            category_name : "Recently Added",
            article_count : 2,
            articles : [],
            recent_articles : [],
            hot_articles : [],
            most_articles : [],
            popular_articles : [],
            bShowMore : "show",
            top_hot_article:{},
        };
    }


    UNSAFE_componentWillReceiveProps(nextProps) {
        const {blogdata} = nextProps;
        this.setState({recent_articles : blogdata.recentData});
        this.setState({articles : blogdata.recentData});
        this.setState({hot_articles : blogdata.hotData});
        this.setState({popular_articles : blogdata.popularData});
        this.setState({most_articles : blogdata.mostData});
        this.setState({top_hot_article : blogdata.topHotData});
    }

    UNSAFE_componentWillMount(){
        this.props.dispatch(getBlogData());
    }



    renderArticles = (articles) =>
        articles.map((article, key)=>{
            if(key < this.state.article_count)
            {
                return(
                    <ArticleRow key={key} article={article}/>
                );
            }
        });

    loadingMore = (e) => {
        if(this.state.articles.length <= this.state.article_count + more_count)
        {
            setTimeout(() => {
              this.setState({ article_count: this.state.article_count + more_count});
              this.setState({articles:this.state.articles});
              this.setState({bShowMore : "unshow"});
            }, 1000);
        }
        else
        {
            setTimeout(() => {
              this.setState({ article_count: this.state.article_count + more_count});
              this.setState({articles:this.state.articles});
            }, 1000);
        }
    }

    category_info = {
        "hot":6,
        "popular":12,
        "recent":18,
        "viewed":12,
    }

    categories = [
        "Hot Articles", "Popular Articles", "Recent", "Most Viewed"
    ]

    renderCategory = (category_info) =>
        Object.keys(category_info).map((key) => {
                const unique = Object.keys(category_info).indexOf(key);
                if(key == "hot"){
                    return(
                        <div className="col-md-3" key={key}>
                            <div className={this.state.category_name == "Hot Articles" ? "category shadow_box selected " : "category shadow_box " + key} onClick={this.handleCategoryClick.bind(this)}>
                                <div className={"category_name " + key}>
                                    <WhatshotIcon className={key} />
                                    <label className={key}>{this.categories[unique]}</label>
                                </div>
                                <label className={"category_count " + key}>{"(" + category_info[key]+" articles)"}</label>
                            </div>
                        </div>
                    );
                } else if(key == "popular"){
                    return(
                        <div className="col-md-3" key={key}>
                            <div className={this.state.category_name == "Popular Articles" ? "category shadow_box selected " : "category shadow_box " + key} onClick={this.handleCategoryClick.bind(this)}>
                                <div className={"category_name " + key}>
                                    <StarBorderOutlinedIcon className={key} />
                                    <label className={key}>{this.categories[unique]}</label>
                                </div>
                                <label className={"category_count " + key}>{"(" + category_info[key]+" articles)"}</label>
                            </div>
                        </div>
                    );
                } else if(key == "recent"){
                    return(
                        <div className="col-md-3" key={key}>
                            <div className={this.state.category_name == "Recently Added" ? "category shadow_box selected " : "category shadow_box " + key} onClick={this.handleCategoryClick.bind(this)}>
                                <div className={"category_name " + key}>
                                    <FileCopyOutlinedIcon className={key} />
                                    <label className={key}>{this.categories[unique]}</label>
                                </div>
                                <label className={"category_count " + key}>{"(" + category_info[key]+" articles)"}</label>
                            </div>
                        </div>
                    );
                } else if(key == "viewed"){
                    return(
                        <div className="col-md-3" key={key}>
                            <div className={this.state.category_name == "Most Viewed" ? "category shadow_box selected " : "category shadow_box " + key} onClick={this.handleCategoryClick.bind(this)}>
                                <div className={"category_name " + key}>
                                    <RemoveRedEyeOutlinedIcon className={key} />
                                    <label className={key}>{this.categories[unique]}</label>
                                </div>
                                <label className={"category_count " + key}>{"(" + category_info[key]+" articles)"}</label>
                            </div>
                        </div>
                    );
                }
        });

    checkCategory = (name) => {
        switch(name){
            case "hot":
                return "hot";
            case "popular":
                return "popular";
            case "recent":
                return "recent";
            case "viewed":
                return "viewed";
        }
    }

    handleCategoryClick = (event) => {
        this.setState({bShowMore: "show"});
        this.setState({ article_count: more_count});
        let classNameArray = event.target.className.split(" ");

        switch(classNameArray.find(this.checkCategory)){
            case "hot":
                    this.setState({category_name : "Hot Articles"});
                    this.setState({articles : this.state.hot_articles});
                    break;
            case "popular":
                    this.setState({category_name : "Popular Articles"});
                    this.setState({articles : this.state.popular_articles});
                    break;
            case "recent":
                    this.setState({category_name : "Recently Added"});
                    this.setState({articles : this.state.recent_articles});
                    break;
            case "viewed":
                    this.setState({category_name : "Most Viewed"});
                    this.setState({articles : this.state.most_articles});
                    break;
        }

    }

    render() {
        return(
          <div className="container">
            <div className="row carousel_section shadow_box">
                <div className="carousel_description col-md-6">
                    <div className="offer_btn">
                        <input type="button" name="hot_offer" value="Hot Offer"/>
                    </div>
                    <h3>{this.state.top_hot_article.title}</h3>
                    <p>{this.state.top_hot_article.description}</p>
                    <Link to={`/blog/article/${this.state.top_hot_article.id}`}>Learn more <ArrowForwardIcon/></Link>
                </div>
                <div id="ImageCarousel" className="col-md-6 carousel slide no-thumb left-dots arrow-bottom-right">
                    <ImageCarousel />
                </div>
            </div>
            <div className="row category_section">
                <div className="col-md-12">
                    <h3>Browse Categories</h3>
                </div>

                {this.renderCategory(this.category_info)}
            </div>
            <div className="row recently_section">
                <div className="col-md-12"><h3>{this.state.category_name}</h3></div>
                {this.renderArticles(this.state.recent_articles)}
                <div className="col-md-12 see_more_btn"><span className={this.state.bShowMore} onClick={this.loadingMore.bind(this)}>Show More <i className="fa fa-angle-down"></i></span></div>
            </div>
          </div>
      )
    }
}

const mapStateToProps = state => {
  const { blogdata } = state.blog
    return {
        blogdata
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
