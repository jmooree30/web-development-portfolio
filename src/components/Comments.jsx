import React, { Component } from "react";
import "../styles/comments.css";
require('dotenv').config();

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      name: "",
      comment: ""
    };
  }

  componentDidMount() {
    this.getComments(this.props.type);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = e => {
    let commentObj = {
      comment: this.state.comment,
      name: this.state.name,
      blog: this.props.type
    };
    const url = process.env.NODE_ENV === 'production'
      ? 'https://api.example.com/.netlify/functions/add-comment'
      : 'http://localhost:3000/.netlify/functions/add-comment';

    fetch(url, {
      method: "POST",
      body: JSON.stringify(commentObj),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        this.setState({
          comments: [...this.state.comments, response]
        });
      })
      .catch(error => console.error("Error:", error));
  };

  getComments = type => {
    const url = process.env.NODE_ENV === 'production'
      ? 'https://api.example.com/.netlify/functions/get-comments'
      : 'http://localhost:3000/.netlify/functions/get-comments';

    fetch(url)
      .then(res => res.json())
      .then(comments => {
        let commentsArr = [];
        comments.forEach(e => {
          if (e.blog === type) {
            commentsArr.push(e);
          }
        });
        this.setState({ comments: commentsArr.reverse() });
      });
  };


  render() {
    let comments = this.state.comments;
    return (
      <div>
        <div className="row bootstrap snippets">
          <div className="comments-margin">
            <div className="comment-wrapper">
              <div className="panel panel-info">
                <div className="panel-heading">Comments</div>
                <div className="panel-body">
                  <input
                    placeholder="Name"
                    name="name"
                    className="form-control"
                    onChange={this.onChange}
                  />
                  <br />
                  <textarea
                    className="form-control"
                    placeholder="write a comment..."
                    name="comment"
                    onChange={this.onChange}
                    rows={3}
                    defaultValue={""}
                    required
                  />
                  <br />
                  <button
                    type="submit"
                    className="btn btn-info pull-right"
                    onClick={this.onClick}
                  >
                    Post
                  </button>
                  <div className="clearfix" />
                  <hr />
                  <ul className="media-list">
                    {comments.map(function (object, i) {
                      return (
                        <li className="media">
                          <div className="media-body">
                            <span className="text-muted pull-right">
                              <small className="text-muted">
                                {object.date.substring(0, 10)}
                              </small>
                            </span>
                            <strong
                              className="text underline"
                              style={{ float: "left" }}
                            >
                              {object.name}
                            </strong>
                            <br />
                            <p style={{ fontSize: "20px", float: "left" }}>
                              {object.text}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Comments;
