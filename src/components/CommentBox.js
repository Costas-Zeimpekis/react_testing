import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  handleOnChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleOnChange} value={this.state.comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);
