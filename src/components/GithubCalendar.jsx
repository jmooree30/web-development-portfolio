import React, { Component } from "react";
import GitHubCalendar from "github-calendar";

class GithubCalendar extends Component {
  componentDidMount() {
    new GitHubCalendar(".calendar", "jmooree30", { responsive: true });
  }
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/IonicaBizau/github-calendar/gh-pages/dist/github-calendar.css"
        />
        <div className="calendar">Loading the data just for you.</div>
      </div>
    );
  }
}

export default GithubCalendar;
