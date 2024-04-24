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
                    <p style={{fontSize: "18px"}}> Im an avid programmer with 4 and half years of coding and computer engineering graduate student with a strong interest in AI engines and integrated circuit design. 
                    Since I was a little boy in Haiti, I have always nourished a strong passion for the core technologies that drive the World we live in today. 
                    That passion has drove me to pursue my dream program in Electrical and Computer Engineering at the second most prestious university in Taiwan.
                    However My journey across the globe was not without it's fair share of challenges. Those experiences shaped me unto the person Im today. 
                    So let's connect and have a chat!</p>
                     
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
                    <p style={{fontSize: "18px"}}>I have experience Programming with Python for Neural Architecture Search to leverage efficiency, Model Compression and Acceleration. I have worked in Computer Vision projects as well as LLM for Edge devices.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-code" />
                </span>
                {/* <div className="desc">
                    <h3>Data Structure and Algorithms</h3>
                    <p style={{fontSize: "18px"}}>I have a good understanding in Data Structure and Algorithms from my classes at NYCU I am also comfortable using Virtual Studio code, Git and Linux to get the optimal solution to problems involving Programming</p>
                </div> */}
                <div className="desc">
                    <h3>Embedded Systems</h3>
                    <p style={{fontSize: "18px"}}>I have experience in designing and implementing embedded systems using C and C++ for microcontrollers and FPGAs. I have worked on projects involving the design of a 4-bit CPU and a 16-bit RISC-V CPU.</p>
                </div>
            </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Integrated Circuit Design</h3>
                    <p style={{fontSize: "18px"}}>I have experience in designing and implementing digital circuits using Verilog and SystemVerilog. I have worked on projects involving AI Engine for the Sianameze Neural Network as well as CNN architectures.</p>
                </div>
                </div>
            </div>
            {/* <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-database" />
                </span>
                <div className="desc">
                    <h3>Motto</h3>
                    <p style={{fontSize: "18px"}}> As you navigate through the rest of your life, be open to collaboration. Other people and other people’s ideas are often better than your own. </p>
                </div>
                </div>
            </div> */}
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}