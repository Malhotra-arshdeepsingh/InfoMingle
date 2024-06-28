import React, { Component } from 'react';
import './NewsCardNewspaper.css';

export class NewsCard extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="newspaper-card">
        <div className="card-header">
          <span className="badge bg-danger">{source}</span>
          <small className="text-muted float-end">{new Date(date).toDateString()}</small>
        </div>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={!imageUrl ? "https://kinsta.com/wp-content/uploads/2021/02/what-is-a-url.jpg" : imageUrl} className="img-fluid rounded-start" alt="News" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "Unknown" : author}
                </small>
              </p>
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsCard;
