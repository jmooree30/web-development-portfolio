import React, { Component } from "react";
import "../styles/comments.css";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      name: "",
      comment: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.getComments(this.props.type);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick(e) {
    let commentObj = {
      comment: this.state.comment,
      name: this.state.name,
      blog: this.props.type
    };
    fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(commentObj),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        let comments = this.state.comments;
        comments.push(response);
        this.setState({ comments: comments });
      })
      .catch(error => console.error("Error:", error));
  }

  getComments = type => {
    fetch("/api/comments")
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
                    {comments.map(function(object, i) {
                      return (
                        <li className="media">
                          <div className="media-body">
                            <span className="text-muted pull-right">
                              <small className="text-muted">
                                {object.date.substring(0, 10)}
                              </small>
                            </span>
                            <strong
                              className="text-success"
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
