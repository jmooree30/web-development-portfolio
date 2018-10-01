import React, { Component } from "react";
import cw from "../assets/cw.png";
import ss from "../assets/ss.png";
import chess from "../assets/chess.png";
import book from "../assets/book.png";
import calc from "../assets/calc.png";
import git from "../assets/git.png";
import bubbleBlog from "../assets/bubble-blog.jpg";
import alex from "../assets/alex.jpeg";
import vlad from "../assets/vlad.jpeg";
import mern from "../assets/mern.jpg";
import more from "../assets/more.png";
import reactLogo from "../assets/react-logo.png";
import { HashLink as Link } from "react-router-hash-link";
import fancyMac from "../assets/fancy-mac.jpg";
import hands from "../assets/hands.jpg";
import skills from "../assets/skills.png";
import GitHubCalendar from "github-calendar";

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
      website: "",
      phone: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollEventHandler = this.scrollEventHandler.bind(this);
    this.isScrolledIntoView = this.isScrolledIntoView.bind(this);
    this.isScrolledIntoViewTwo = this.isScrolledIntoViewTwo.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick(e) {
    e.preventDefault();
    let emailObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      company: this.state.company,
      message: this.state.message,
      website: this.state.website,
      phone: this.state.phone
    };
    fetch("https://desolate-gorge-20931.herokuapp.com/api/email", {
      method: "POST",
      body: JSON.stringify(emailObj),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        alert("message sent!");
        window.location.reload();
      })
      .catch(error => console.error("Error:", error));
  }

  handleScroll() {
    this.scrollEventHandler("first-slide", "left");
    this.scrollEventHandler("second-slide", "right");
    this.scrollEventHandler("third-slide", "left");
    this.scrollEventHandler("fourth-slide", "right");
    this.scrollEventHandler("fifth-slide", "left");
    this.scrollEventHandler("sixth-slide", "right");
    this.scrollEventHandler("seventh-slide", "left");
    this.scrollEventHandler("first-recomend", "fr");
    this.scrollEventHandler("second-recomend", "sr");
  }

  scrollEventHandler(element, direction) {
    if (this.isScrolledIntoView(document.getElementById(`${element}`))) {
      let view = document.getElementById(`${element}`);
      if (direction == "left") {
        view.dataset.slideleft = "1";
        view.style.visibility = "visible";
      }
      if (direction == "right") {
        view.dataset.slideright = "1";
        view.style.visibility = "visible";
      }
    }
    if (this.isScrolledIntoViewTwo(document.getElementById(`${element}`))) {
      let view = document.getElementById(`${element}`);
      if (direction == "fr") {
        view.dataset.fr = "1";
        view.style.visibility = "visible";
      }
      if (direction == "sr") {
        view.dataset.fr = "1";
        view.style.visibility = "visible";
      }
    }
  }

  isScrolledIntoView(el) {
    if (el.style.visibility != "visible") {
      var elemTop = el.getBoundingClientRect().top;
      var elemBottom = el.getBoundingClientRect().bottom;
      var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
      return isVisible;
    }
  }
  isScrolledIntoViewTwo(el) {
    if (el.style.visibility != "visible") {
      const elemTop = el.getBoundingClientRect().top;
      const elemBottom = el.getBoundingClientRect().bottom;
      const isMobile =
        navigator.userAgent.match(/iphone|android|blackberry/gi) || false;
      let isVisible;
      if (isMobile) {
        isVisible = elemTop >= 0 && elemBottom - 280 <= window.innerHeight;
      } else {
        isVisible = elemTop >= 0 && elemBottom - 120 <= window.innerHeight;
      }
      return isVisible;
    }
  }

  componentDidMount() {
    new GitHubCalendar(".calendar", "jmooree30", { responsive: true });
    window.scrollTo(0, 0);
    let firstSlide = document.getElementById("first-slide");
    let secondSlide = document.getElementById("second-slide");
    let thirdSlide = document.getElementById("third-slide");
    let fourthSlide = document.getElementById("fourth-slide");
    let fifthSlide = document.getElementById("fifth-slide");
    let sixthSlide = document.getElementById("sixth-slide");
    let seventhSlide = document.getElementById("seventh-slide");
    let firstRecomend = document.getElementById("first-recomend");
    let secondRecomend = document.getElementById("second-recomend");
    firstSlide.style.visibility = "hidden";
    secondSlide.style.visibility = "hidden";
    thirdSlide.style.visibility = "hidden";
    fourthSlide.style.visibility = "hidden";
    fifthSlide.style.visibility = "hidden";
    sixthSlide.style.visibility = "hidden";
    seventhSlide.style.visibility = "hidden";
    firstRecomend.style.visibility = "hidden";
    secondRecomend.style.visibility = "hidden";
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }
  render() {
    return (
      <div id="landing-top">
        <div className="top-container">
          <div className="header-wrapper">
            <img src={reactLogo} className="react-logo" />
            <div className="header" id="header">
              JACOB MOORE
            </div>
            <div className="mini-header">- Full Stack Developer</div>
          </div>
          <div className="elipse">
            <div className="background-image" />
          </div>
        </div>
        <br />
        <img
          src={skills}
          style={{ height: "225px", width: "375px", border: "none" }}
        />
        <br />
        <br />
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/IonicaBizau/github-calendar/gh-pages/dist/github-calendar.css"
        />
        <div className="calendar">Loading the data just for you.</div>

        <div className="container" id="first-slide">
          <div className="sidebar-left">
            <img classname="heroku" src={mern} />
          </div>
          <div className="article-left">
            <h3 className="article-header">
              <span className="heroku">Heroku</span>
              <i className="devicon-heroku-original" />
            </h3>
            <p className="article-content">
              This portfolio was built with the MERN stack. The React front-end
              is hosted with Netlify and communicates with a Nodejs/Express
              back-end hosted with Heroku. Most of the site is broken up into
              React components, utilizing the React router for navigation. The
              Express back end handles sending emails and serving comments for
              the blog section that is currently{" "}
              <span className="underline">under construction</span> .
            </p>
          </div>
        </div>
        <div className="container" id="second-slide">
          <div className="sidebar-right">
            <a href="https://companywide.com">
              <img src={cw} />
            </a>
          </div>
          <div className="article-right">
            <h3 className="article-header">
              <i className="devicon-meteor-plain colored" />
              <span className="ruby">&nbsp;Meteorjs </span>
              &amp;
              <i className="devicon-mongodb-plain colored" />
              <span style={{ color: "green" }}>MongoDB</span>
            </h3>
            <p className="article-content">
              While working for CompanyWide, I picked up this Node based
              framework along with MongoDB databases. With over 800 on the clock
              hours, creating full stack web applications with Meteor has become
              second nature. The picture shows a feature I built that utilized
              the Google Maps API to create a map and plot the locations of
              current job listings based off of the longitude and latitudes
              gathered with the Geocode API.{" "}
            </p>
          </div>
        </div>
        <div className="container" id="third-slide">
          <div className="sidebar-left">
            <a href="https://jmooree30.github.io/css-grid-framework/">
              <img src={ss} />
            </a>
          </div>
          <div className="article-left">
            <h3 className="article-header">
              <span className="html">HTML</span>
              <i className="devicon-html5-plain colored" /> &amp;&nbsp;
              <span className="css">CSS</span>
              <i className="devicon-css3-plain colored" />
            </h3>
            <p className="article-content">
              In this day and age websites need to look good on a wide range of
              devices with different screen sizes. I create 100% responsive web
              sites that will look amazing no matter the device. Along with
              HTML5 and CSS3, I have experience using Bootstrap. I created the
              website pictured with my own personal CSS framework that mimics
              Bootstraps 12 column grid layout.
            </p>
            <a
              href="https://github.com/jmooree30/css-grid-framework"
              id="black"
              className="underline"
            >
              View project
            </a>
          </div>
        </div>
        <div className="container" id="fourth-slide">
          <div className="sidebar-right">
            <a href="https://github.com/jmooree30/Chess">
              <img src={chess} />
            </a>
          </div>
          <div className="article-right">
            <h3 className="article-header">
              <i className="devicon-ruby-plain colored" />
              <span className="ruby">&nbsp;Ruby</span>
            </h3>
            <p className="article-content">
              My primary focus is on object oriented programming along with data
              structures, algorithms and testing. In this project I built a
              command line Chess game where two players can play against each
              other.
            </p>
            <a
              className="underline"
              href="https://github.com/jmooree30/Chess"
              id="black"
            >
              View project
            </a>
          </div>
        </div>
        <div className="container" id="fifth-slide">
          <div className="sidebar-left">
            <a href="https://fast-citadel-52170.herokuapp.com/">
              <img src={book} />
            </a>
          </div>
          <div className="article-left">
            <h3 className="article-header">
              <i className="devicon-rails-plain colored" />
              <span className="ruby">&nbsp;Ruby on Rails</span>
            </h3>
            <p className="article-content">
              I have built a handful of applications using this server side web
              application framework and have a full understanding of the MVC
              paradigm. This project was modeled similiarly to it's bigger
              brother.
            </p>
            <p />
            <a
              id="black"
              className="underline"
              href="https://github.com/jmooree30/Jakebook"
            >
              View project
            </a>
          </div>
        </div>
        <div className="container" id="sixth-slide">
          <div className="sidebar-right">
            <a href="https://jmooree30.github.io/calculator/">
              <img src={calc} />
            </a>
          </div>
          <div className="article-right">
            <h3 className="article-header">
              <i
                className="devicon-javascript-plain"
                style={{ color: "orange" }}
              />
              <span className="javascript">&nbsp;JavaScript</span>
            </h3>
            <p className="article-content">
              Along with "The Odin Projects" curriculum and book "You Don't Know
              JavaScript", I have completed Wes Bos's "React JS", Brad
              Traversy's "MERN(Front to Back)" and Andrew Mead's "complete
              Nodejs" courses. Javascript is my language of choice and not a day
              goes by where I don't try to learn something new with it. In this
              project I used JS along with HTML and CSS to create a simple
              calculator.
            </p>
            <a
              id="black"
              className="underline"
              href="https://github.com/jmooree30/calculator"
            >
              View project
            </a>
          </div>
        </div>
        <div className="container" id="seventh-slide">
          <div className="sidebar-left">
            <a href="https://github.com/jmooree30">
              <img src={git} />
            </a>
          </div>
          <div className="article-left">
            <h3 className="article-header">
              <i className="devicon-github-plain colored" />
              <span className="git">&nbsp;Git</span>
            </h3>
            <p className="article-content">
              Using some form of version control is important and beneficial
              while working with a team of developers on a project. I've been
              using Git for almost two years now, whether it be for my own
              projects or working with other developers. You can check out the
              repository for this website in the link below. Commit commit
              commit...
            </p>
            <a
              id="black"
              className="underline"
              href="https://github.com/jmooree30/portfolio"
            >
              View project
            </a>
          </div>
        </div>
        <br />
        <br />
        <div className="container testimonials">
          <div className="recomendation-wrapper" id="first-recomend">
            <img className="recomendation-image" src={alex} />
            <br />
            <i className="recomendation-text">
              "Jacob is one of the hardest working web developers I have met.
              During his internship at CompanyWide, which we happily extended
              from its original duration, he diligently worked on tasks of all
              complexity levels, and was a dedicated team player. He could be
              trusted with all types of work, never failed to live up to the
              challenges we gave him, and listened close for learning from our
              manager of development. I have high hopes for Jacob now that he
              has left CompanyWide to pursue learning React Native full time. I
              highly recommend him for his next position, and hope that he
              continues to fulfil his full potential."
            </i>
            <br />
            <br />
            <div className="recomendation-person">
              - Alexander R. Neary
              <br />
              <br />
              President of CompanyWide, LLC.
            </div>
          </div>
          <br />
          <br />
          <div className="recomendation-wrapper" id="second-recomend">
            <img className="recomendation-image" src={vlad} />
            <br />
            <i className="recomendation-text">
              "I worked with Jacob on numerous projects at the Odin Project an
              open source curriculum. His ability to learn new things and break
              down problems quickly never fails to astound me. He constantly
              takes initiative to build new interesting things which improve the
              project and he never backs down from a problem. The determination
              and motivation that Jacob has makes him a very well-versed
              software developer."
            </i>
            <br />
            <br />
            <div className="recomendation-person">
              {" "}
              - Vlad Saraev <br />
              <br />
              Full-Stack Developer
            </div>
          </div>
        </div>
        <br />
        <br />
        <div>Looking for a Web Developer?</div>
        <br />
        <div className="hands-wrapper">
          <img className="border-center" src={hands} />
        </div>
        <br />
        <br />
        <div id="fifty" />
        <div className="contact-container" id="max">
          <form action="https://formspree.io/jmooree30@gmail.com" method="POST">
            <div className="input-container">
              <label>First Name</label>
              <br />
              <input
                onChange={this.onChange}
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="input-container">
              <label>Last Name</label>
              <br />
              <input
                onChange={this.onChange}
                type="text"
                name="lastName"
                required
              />
            </div>
            <div className="input-container">
              <label>Phone Number</label>
              <br />
              <input onChange={this.onChange} type="tel" name="phone" />
            </div>
            <div className="input-container">
              <label>Website</label>
              <br />
              <input
                onChange={this.onChange}
                type="text"
                name="website"
                required
              />
            </div>
            <div className="input-container">
              <label>Company</label>
              <br />
              <input
                onChange={this.onChange}
                type="text"
                name="company"
                required
              />
            </div>
            <div className="input-container">
              <label>Email</label>
              <input
                onChange={this.onChange}
                type="text"
                name="email"
                required
              />
            </div>
            <div className="textarea-container">
              <label>Message</label>
              <textarea
                onChange={this.onChange}
                rows={5}
                name="message"
                cols={30}
              />
            </div>
            <button
              className="btn btn-success"
              type="submit"
              name="submit"
              onClick={this.onClick}
              required
            >
              &nbsp;&nbsp;&nbsp;
              <i class="fa fa-envelope">&nbsp;&nbsp;</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
