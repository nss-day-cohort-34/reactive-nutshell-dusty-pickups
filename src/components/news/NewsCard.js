// Porpuse: Creates a content card that conatins feilds
// Author: Michael Stiles
import React, { Component } from "react";
import NewsEditModal from "./NewsEditModal";

class NewsCard extends Component {
    render() {
        return (
            <div className="card">
              <div className="card-content">
                <h3>
                  News: <b>{this.props.news.newsHeader}</b>
                </h3>
                <p>Snynopsis:{this.props.news.newsSynopsis}</p>
                <p>URL: {this.props.news.newsURL}</p>
                <p>Date: {this.props.news.newsDate}</p>
                <NewsEditModal {...this.props} />{" "}
                <button
                  type="button"
                  onClick={() => this.props.deleteNews(this.props.news.id)}
                >
                  Delete News
                </button>
              </div>
            </div>
          );


    }
}
export default NewsCard;