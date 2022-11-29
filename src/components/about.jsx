import React, { Component } from 'react'

export default class About extends Component {
  render() {
      
    return (
      <div>
        <section className="claudy-about" data-section="about">
        <div className="claudy-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span  className="heading-meta"><b>Know more about me</b></span>
                    <h2 className="claudy-heading">Who Am I?</h2>
                    <p style={{fontSize: "18px"}}>Since I was a little boy, I have always nourished a strong passion for understanding and learning the core technologies that drive the World Wide Web and Mobile applications.
                    That passion pushes me to constantly explore new technologies. Which makes me always open to collaboration.</p>
                    <p style={{fontSize: "18px"}}> Besides technology, I also enjoy playing music, work out and travel</p>
                     
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="claudy-about">
        <div className="claudy-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta"><b>What I do?</b></span>
                <h2 className="claudy-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Machine learning Frameworks </h3>
                    <p style={{fontSize: "18px"}}>I have experience Programming with python's, Tensorflow and Pytorch. I also explore Python's OpenCV library to build the AI track project, as well as Scikit-learn during my Machine learning Class</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-code" />
                </span>
                <div className="desc">
                    <h3>Data Structure and Algorithms</h3>
                    <p style={{fontSize: "18px"}}>I have a good understanding in Data Structure and Algorithms from my classes at NYCU I am also comfortable using Virtual Studio code, Git and Linux to get the optimal solution to problems involving Programming</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-database" />
                </span>
                <div className="desc">
                    <h3>Motto</h3>
                    <p style={{fontSize: "18px"}}> As you navigate through the rest of your life, be open to collaboration. Other people and other people’s ideas are often better than your own. </p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}