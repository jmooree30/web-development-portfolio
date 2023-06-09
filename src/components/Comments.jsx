import React, { useState, useEffect } from "react";
import "../styles/comments.css";

const Comments = ({ type }) => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    getComments(type);
  }, [type]);

  const onChange = e => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "comment") {
      setComment(value);
    }
  };

  const onClick = e => {
    e.preventDefault();
    const commentObj = {
      comment: comment,
      name: name,
      blog: type
    };
    const url =
      process.env.NODE_ENV === "production"
        ? "https://jacobmoore.dev/.netlify/functions/add-comment"
        : "http://localhost:3000/.netlify/functions/add-comment";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(commentObj),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        setComments([...comments, response]);
      })
      .catch(error => console.error("Error:", error));
  };

  const getComments = type => {
    const url =
      process.env.NODE_ENV === "production"
        ? "https://jacobmoore.dev/.netlify/functions/get-comments"
        : "http://localhost:3000/.netlify/functions/get-comments";

    fetch(url)
      .then(res => res.json())
      .then(comments => {
        const commentsArr = comments.filter(e => e.blog === type).reverse();
        setComments(commentsArr);
      });
  };

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
                  onChange={onChange}
                />
                <br />
                <textarea
                  className="form-control"
                  placeholder="write a comment..."
                  name="comment"
                  onChange={onChange}
                  rows={3}
                  defaultValue={""}
                  required
                />
                <br />
                <button
                  type="submit"
                  className="btn btn-info pull-right"
                  onClick={onClick}
                >
                  Post
                </button>
                <div className="clearfix" />
                <hr />
                <ul className="media-list">
                  {comments.map(function (object, i) {
                    return (
                      <li className="media" key={i}>
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
};

export default Comments;
