import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ArticleRow extends Component {

  constructor(props) {
    super(props)

    this.state = {
      //
    }
  }

  render() {
    return (
      <div className="col-md-12 recently_article">
         <Link to={`/blog/article/${this.props.article.id}`}>
          <img src={this.props.article.imagePath}/>
          <div className="shadow_box">
              <p className="article_date">{this.props.article.publishedAt}</p>
              <h5 className="article_title">{this.props.article.title}</h5>
              <p className="article_text">{this.props.article.description}</p>
          </div>
        </Link>
      </div>
    );
  }
}

ArticleRow.propTypes = {
    article:PropTypes.object.isRequired,
}



export default ArticleRow;

