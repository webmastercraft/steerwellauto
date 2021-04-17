import React, { Component } from "react"
import PropTypes from "prop-types"
import {Link, withRouter} from "react-router-dom"
import "./page.css"

// import components
import ArticleRow from "../../../../common/components/ArticleRow"

// import services

import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { blogActions } from '../../store/actions'
import { getArticleData } from '../../service'

class Page extends Component {
	static propTypes = {
	    dispatch: PropTypes.func.isRequired,
	}

    constructor(props){
        super(props);

        this.state = {
            articleData :{
                "title":"Lorem Ipsum dolor sit amet",
                "image_path":"./images/dynamics/articles/1/background.png",
                "description":"Donec facukusus tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor",
                "content":[],
            },
            relateData:[],
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const {articledata} = nextProps;
        this.setState({articleData : articledata.articleData});
        this.setState({relateData : articledata.recentData});
    }

    UNSAFE_componentWillMount(){
        // this.props.dispatch(browseActions.get_DetailData(arrDetailData));
        this.props.dispatch(getArticleData(this.props.match.params.id));
    }

	relate_articles = [
        {
            "id": 1,
            "user_id": 1,
            "categories_id": 1,
            "brand_id": 1,
            "model_id": 1,
            "title": "Lorem ipsum dolor sit amet",
            "image_path": "./imgs/blog_2.png",
            "description": "Blog description",
            "content": "Donec facukusus tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor",
            "published": 0,
            "published_at": "24 Mar, 2019",
            "last_read_at": null,
            "read_count": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 2,
            "user_id": 1,
            "categories_id": 1,
            "brand_id": 1,
            "model_id": 1,
            "title": "Lorem ipsum dolor sit amet",
            "image_path": "./imgs/blog_3.png",
            "description": "Blog description",
            "content": "Donec facukusus tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor",
            "published": 0,
            "published_at": "24 Mar, 2019",
            "last_read_at": null,
            "read_count": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 3,
            "user_id": 1,
            "categories_id": 1,
            "brand_id": 1,
            "model_id": 1,
            "title": "Lorem ipsum dolor sit amet",
            "image_path": "./imgs/blog_4.png",
            "description": "Blog description",
            "content": "Donec facukusus tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor",
            "published": 0,
            "published_at": "24 Mar, 2019",
            "last_read_at": null,
            "read_count": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null
        }
    ]

    renderRelateArticles = (relate_articles) =>
        relate_articles.map((article, key)=>{
            return(
                <ArticleRow key={key} article={article}/>
            );
        });

    renderArticleContent = (articleContent) =>
        articleContent.map((item, key) => {
            if(item.type == "text") {
                return (
                    <p className="article_text" key={key}>
                        {item.content}
                    </p>
                );
            } else if(item.type == "image") {
                return (
                    <div key={key}>
                        <img src={item.content}/>
                    </div>
                );
            } else if(item.type == "title") {
                return (
                    <h4 key={key}>{item.content}</h4>
                );
            } else if(item.type == "image_gallery") {
                return (
                    <div className="article_images" key={key}>
                        <img src={item.content[0]}/>
                        <div className="article_images_part">
                            <img src={item.content[1]}/>
                            <div></div>
                            <img src={item.content[2]}/>
                        </div>
                    </div>
                );
            }
        });



    render() {
        return(
        	<div className="blog_detail">
            	<div className="bg-row" style={{backgroundImage: `url(${this.state.articleData.imagePath})`}}>
                    <h3>{this.state.articleData.title}</h3>
                    <p>{this.state.articleData.description}</p>
                </div>
            	<div className="container">
    	            <div className="row main_article shadow_box">
    	                <div className="col-md-3">
    	                    <div className="share">Share</div>
    	                    <div className="share_type">
    	                        <Link to=""><i className="fa fa-instagram social_icon"></i></Link>
    	                        <Link to=""><i className="fa fa-twitter social_icon"></i></Link>
    	                        <Link to=""><i className="fa fa-facebook social_icon"></i></Link>
    	                    </div>
    	                </div>
    	                <div className="col-md-6">
    	                    <div className="article_section">
    	                        {this.renderArticleContent(this.state.articleData.content)}
    	                    </div>
    	                    <div className="share_bottom">
    	                        <div className="share">Share</div>
    	                        <div className="share_type">
    	                            <Link to=""><i className="fa fa-instagram social_icon"></i></Link>
    	                            <Link to=""><i className="fa fa-twitter social_icon"></i></Link>
    	                            <Link to=""><i className="fa fa-facebook social_icon"></i></Link>
    	                        </div>
    	                    </div>
    	                </div>
    	                <div className="col-md-3"></div>
    	            </div>
    	            <div className="row recently_section">
    	                <h3>Related Articles</h3>
    	                {this.renderRelateArticles(this.state.relateData)}
    	            </div>
    			</div>
			</div>
    	)
    }
}

const mapStateToProps = state => {
    const {articledata} = state.blog;
    return{
        articledata,
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

