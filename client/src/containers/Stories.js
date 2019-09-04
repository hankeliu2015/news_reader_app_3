import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/storyAction';
import { Link } from 'react-router-dom';
import StoriesList from '../components/storiesList';
import StoryCard from '../components/StoryCard';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Header from '../components/header';
import currentUserFetch from '../actions/currentUserAction';

class Stories extends Component {

  state = {
    rating: 0
  }

  componentDidMount() {
    this.props.fetchStories();
    this.props.currentUserFetch();
  }

  handleOnClick = event => {
    // debugger
    event.preventDefault();
    this.setState({
      rating: this.state.rating +1
    })
  }

  render() {
    const list = this.props.stories.map((story, index) => {
      return (
        <li key={index}>
          <Card body>
            <Link to={`${story ? "/comments/" + story.id : 'stories'}`}> {story ? story.title : "This Story is missing"}</Link>

            <Button variant="light">
              <form onSubmit = {this.handleOnClick}>
                <button>
                  Vote
                </button>
              </form>
            </Button>

            <Button variant="light">
               Like: {this.state.rating}
            </Button>

          </Card>
        </li>
      )
    })

    return (
      <div>
        <Header username = {this.props.user.username}/>
        <StoryCard />
        <StoriesList list={list} loading={this.props.loading} />
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    stories: state.storyReducer.stories,
    loading: state.storyReducer.loading,
    user: state.currentUserReducer.user
  }
}
export default connect(mapStatetoProps, {fetchStories, currentUserFetch})(Stories)
