// Prpouse: Creates a list that contains all news cards
// Author: Michael Stiles

import React, { Component } from "react";
import NewsCard from "./NewsCard";
import NewsManager from "../../modules/NewsManager";
import NewsAddModal from "./NewsAddModal";

class NewsList extends Component {
    state = {
        news: []
    };
    // ComonentDidMount is the intial call/ calls for data and updates state
    componentDidMount() {
        NewsManager.getAllNews(this.props.activeUser()).then(news => {
            this.setState({
                news: news
            });
        });
    }
// AddNewNews takes an object of News, calls POST method in NewsManager to add new news
// it then has a prop of activeUser so that the logged in user only sees their data
    addNewNews = obj => {
        return NewsManager.postNewNews(obj).then(() => {
            NewsManager.getAllNews(this.props.activeUser()).then(news => {
                this.setState({
                    news: news
                });
            });
        });
    }
// editNews takes both the obj of the news post and the specific id of the post.
// editNews is called which is the PUT method
    editNews = (obj, id) => {
        return NewsManager.editNews(obj, id).then(() => {
            NewsManager.getAllNews(this.props.activeUser()).then(news => {
                this.setState({
                    news:news
                });
            });
        })
    }
//Targets the specific ID for the card.
// Calls the Delete Method for deleting the card
    deleteNews = id => {
        return NewsManager.deleteNews(id).then(() => {
            NewsManager.getAllNews(this.props.activeUser()).then(news => {
                this.setState({
                    news:news
                });
            });
        });
    }
    // Passes down the functions that live in editNews/deleteNews to the News Cards
    render() {
        return (
          <React.Fragment>
            <section className="button__container">
              <NewsAddModal addNewNews={this.addNewNews} {...this.props} />
            </section>
            <div className="cards__container">
              {this.state.news.map(news => (
                <NewsCard
                  key={news.id}
                  news={news}
                  editNews={this.editNews}
                  deleteNews={this.deleteNews}
                  {...this.props}
                />
              ))}
            </div>
          </React.Fragment>
        );
      }
}

export default NewsList;

