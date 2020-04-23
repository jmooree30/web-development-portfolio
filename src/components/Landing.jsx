import React, { Component } from 'react';
import FlipContainer from './FlipContainer';
import Contact from './Contact';
import cw from '../assets/cw.png';
import ss from '../assets/ss.png';
import chess from '../assets/chess.png';
import book from '../assets/book.png';
import calc from '../assets/calc.png';
import alex from '../assets/alex.jpeg';
import vlad from '../assets/vlad.jpeg';
import huiyi from '../assets/hc.jpeg';
import briggs from '../assets/be.jpeg';
import game from '../assets/game.png';
import webdev from '../assets/webdev.gif';
import skills from '../assets/projects.gif';
import prec from '../assets/prec.png';
import portfolio from '../assets/portfolio.png';
import gameboy from '../assets/gameboy.png';
import z80 from '../assets/z80.Default';

export default class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);

    const p = document.getElementById('text');
    p.innerHTML = '';
    let n = 0;
    const str =
      "Hello, I'm Jacob! I'm a Software Engineer, currently developing for Liberty Mutual in Boston, Massachusetts. Outside of work, I'm part of the moderation team at 'The Odin Project' and always enjoy helping new Web Developers reach their goals! ";
    let typeTimer = setInterval(function() {
      n = n + 1;
      p.innerHTML = '> ' + str.slice(0, n);
      if (n === str.length) {
        clearInterval(typeTimer);
        p.innerHTML = '> ' + str;
        n = 0;
        setInterval(function() {
          if (n === 0) {
            p.innerHTML = '> ' + str + '|';
            n = 1;
          } else {
            p.innerHTML = '> ' + str;
            n = 0;
          }
        }, 500);
      }
    }, 20);
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
            <div className="cmd" id="text" />
          </div>
          <div className="background-image" />
        </div>
        <br />
        <img
          src={skills}
          style={{ height: '180px', width: '180px', border: 'none' }}
          alt=""
        />
        <br />
        <p className="header-text">PROJECTS</p>
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
            color="orange"
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
            url="https://github.com/jmooree30/portfolio"
          ></FlipContainer>

          <FlipContainer
            project={gameboy}
            url="https://github.com/jmooree30/GBZ80-ASM-Gameboy-Project"
            source={z80}
          ></FlipContainer>
        </div>
        <br />
        <br />
        <div className="container testimonials">
          <div className="recomendation-wrapper" id="first-recomend">
            <img className="recomendation-image" src={alex} alt="" />
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

          <div className="recomendation-wrapper" id="first-recomend">
            <img className="recomendation-image" src={briggs} alt="" />
            <br />
            <i className="recomendation-text">
              "Jacob is a very versatile developer able to overcome any
              challenge I've thrown at him; from traversing legacy code, to
              implementing new features on an unfamiliar tech stack. He is great
              at digging deep into solving problems and understanding everything
              around it. When he's not writing code at work, he goes home to
              hone his skills as a developer and continues to study and learn.
              He has been an amazing part of my team and he has my up-most
              respect, not only as a developer, but as a person."
            </i>
            <br />
            <br />
            <div className="recomendation-person">
              - Briggs Elsperger
              <br />
              <br />
              Web Developer at Software Alternatives
            </div>
          </div>
          <br />
          <br />

          <div className="recomendation-wrapper" id="first-recomend">
            <img className="recomendation-image" src={huiyi} alt="" />
            <br />
            <i className="recomendation-text">
              "I was particularly impressed by Jacob's ability to solve even the
              most complex problem when I worked with him at CompanyWide. Jacob
              is always able to take genuine commitment to tasks as a web
              developer in my team. He had a quick insight into troubleshooting
              and always had the initiative to learn new concepts, generate
              original solutions, and suggest improvements. He is a talented
              self-taught programmer and has both patience and ability to
              expertly handle complex assignments. Jacob is always willing to
              listen and keep calm no matter how mass the problem is. I believe
              Jacob would make a great contribution to any team."
            </i>
            <br />
            <br />
            <div className="recomendation-person">
              - Huiyi Chen
              <br />
              <br />
              Full Stack Development Manager
            </div>
          </div>
          <br />
          <br />

          <div className="recomendation-wrapper" id="second-recomend">
            <img className="recomendation-image" src={vlad} alt="" />
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
              {' '}
              - Vlad Saraev <br />
              <br />
              Full-Stack Developer
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="header-text">
          Let's make something awesome together.
        </div>
        <br />
        <div className="hands-wrapper">
          <img className="border-center" src={webdev} alt="" />
        </div>
        <br />
        <br />
        <Contact></Contact>
      </div>
    );
  }
}
