import React, { Component } from "react";
import FlipContainer from "./FlipContainer";
import GithubCalendar from "./GithubCalendar";
import Contact from "./Contact";
import cw from "../assets/cw.png";
import ss from "../assets/ss.png";
import chess from "../assets/chess.png";
import book from "../assets/book.png";
import calc from "../assets/calc.png";
import alex from "../assets/alex.jpeg";
import vlad from "../assets/vlad.jpeg";
import game from "../assets/game.png";
import hands from "../assets/hands.jpg";
import skills from "../assets/projects.gif";
import prec from "../assets/prec.png";
import portfolio from "../assets/portfolio.png";
import gameboy from "../assets/gameboy.png";
import z80 from "../assets/z80.Default";

export default class Landing extends Component {
  handleScroll = () => {
    this.scrollEventHandler("first-recomend", "fr");
    this.scrollEventHandler("second-recomend", "sr");
  };

  scrollEventHandler = (element, direction) => {
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
  };

  isScrolledIntoView = el => {
    if (el.style.visibility != "visible") {
      const elemTop = el.getBoundingClientRect().top;
      const elemBottom = el.getBoundingClientRect().bottom;
      const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
      return isVisible;
    }
  };
  isScrolledIntoViewTwo = el => {
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
  };

  componentDidMount() {
    const p = document.getElementById("text");
    p.innerHTML = "";
    let n = 0;
    const str =
      "Hello, I'm Jacob! I'm a Full Stack Web Developer from Boston, currently developing for Software Alternatives in Sioux Falls, South Dakota. Outside of work, I'm part of the moderation team at 'The Odin Project' and always enjoy helping new Web Developers reach their goals! ";
    let typeTimer = setInterval(function() {
      n = n + 1;
      p.innerHTML = "> " + str.slice(0, n);
      if (n === str.length) {
        clearInterval(typeTimer);
        p.innerHTML = "> " + str;
        n = 0;
        setInterval(function() {
          if (n === 0) {
            p.innerHTML = "> " + str + "|";
            n = 1;
          } else {
            p.innerHTML = "> " + str;
            n = 0;
          }
        }, 500);
      }
    }, 45);

    window.scrollTo(0, 0);
    let firstRecomend = document.getElementById("first-recomend");
    let secondRecomend = document.getElementById("second-recomend");
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
            <div className="cmd-top">
              <span className="controls red" />
              <span className="controls yellow" />
              <span className="controls green" />
            </div>
            <div class="cmd" id="text" />
          </div>
          <div className="background-image" />
        </div>
        <br />
        <img
          src={skills}
          style={{ height: "300px", width: "300px", border: "none" }}
        />
        <br />
        <p className="projects">PROJECTS</p>
        <br />
        <div className="container" id="container">
          <FlipContainer
            project={chess}
            icon="devicon-ruby-plain colored"
            url="https://github.com/jmooree30/Chess"
          ></FlipContainer>

          <FlipContainer
            project={calc}
            icon="devicon-javascript-plain"
            style="orange"
            url="https://github.com/jmooree30/calculator"
          ></FlipContainer>

          <FlipContainer
            project={cw}
            icon="devicon-meteor-plain colored"
            url="https://www.companywide.com"
          ></FlipContainer>

          <FlipContainer
            project={game}
            icon="devicon-html5-plain colored"
            url="https://jmooree30.github.io/canvas/"
          ></FlipContainer>

          <FlipContainer
            project={ss}
            icon="devicon-css3-plain colored"
            url="https://github.com/jmooree30/css-grid-framework"
          ></FlipContainer>

          <FlipContainer
            project={book}
            icon="devicon-rails-plain colored"
            url="https://fast-citadel-52170.herokuapp.com/"
          ></FlipContainer>

          <FlipContainer
            project={prec}
            icon="devicon-vuejs-plain colored"
            url="https://www.precisionreloading.com/checkout"
          ></FlipContainer>

          <FlipContainer
            project={portfolio}
            icon="devicon-react-original colored"
            url="https://jacobmoore.netlify.com/"
          ></FlipContainer>

          <FlipContainer
            project={gameboy}
            url="https://github.com/jmooree30/GBZ80-ASM-Gameboy-Project"
            source={z80}
          ></FlipContainer>
        </div>
        <GithubCalendar></GithubCalendar>
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
        <Contact></Contact>
      </div>
    );
  }
}
