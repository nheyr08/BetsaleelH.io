import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-claudy-nav-toggle claudy-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="claudy-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/claude.JPG)'}} />
              <h1 id="claudy-logo"><a href="index.html">Betsaleel Wilsonsom D. Henry</a></h1>
              <span className="email"><i className="icon-mail"></i> henrybetsaleel@gmail.com</span>
              <br/>
              <br/>
            </div>

            <nav id="claudy-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="claudy-main-menu">
              <ul>
              	<li><a href="https://www.linkedin.com/in/betsaleel-w-d-henry/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
              	<li><a href="https://github.com/nheyr08/" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              	<li><a href="https://www.instagram.com/nherypic/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a></li>
                <li><a href="https://www.facebook.com/Betsaleel.Henry" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://medium.com/" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav>
            <div className="claudy-footer">
              
              <p>
               <b> Let's achieve great things together! </b>
              </p>
            </div>
            
          </aside>
        </div>
      </div>
    )
  }
}