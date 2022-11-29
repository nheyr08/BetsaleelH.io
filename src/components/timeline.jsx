import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="claudy-experience" data-section="timeline">
          <div className="claudy-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="claudy-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><b>Electronics Teaching Assistant(電子實驗大三小助教)<a style={{color: "#2c98f0"}} href=""></a> </b>  <span>(Sept 2020 - June 2021 )</span></h2>
                        <ul style={{fontSize: "18px"}}>I have joined the Electronics lab as a Teaching assistant. The major part of the work is to:
                          <li>Identify issues in sophomore students circuit experiments and  help them debug Electronic circuits</li>  
                          <li>Work collaboratively with other Teaching assistants to record technical experiment results </li>
                          <li>Ensure that performed work in the lab are in compliance with requirements </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><b>Undergraduate Degree at <a style={{color: "#2c98f0"}} href="https://www.nctu.edu.tw/en"> National Yangming ChiaoTung University </a> </b><span>(2019-2023)</span></h2>
                        <p style={{fontSize: "18px"}}>I am currently Majoring in Electrical and Computer Engineering at  National Yangming ChiaoTung University (4th grade) 
                        where I also gain useful knowledge about Electronics, IC design, Machine learning and Programming.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><b>Chinese Certificate at <a style={{color: "#2c98f0"}} href="https://www.ncu.edu.tw/en"> National Central University </a> </b><span>(2018-2019)</span></h2>
                        <p style={{fontSize: "18px"}}>在2019年，我在中央大學學習中文，一年之內中文檢定考試TOCFL中等。這個過程讓我從不一樣的角度來熟悉台灣文化、跟台灣人溝通、也常在交通大學用中文上專業課程等等。</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><b>High School Education at <a style={{color: "#2c98f0"}} href=""> Institution Mixte Le Semencier</a> </b> <span>(2012-2017)</span></h2>
                        <p style={{fontSize: "18px"}}>I have completed my High School Education at Instition Mixte Le Semencier </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}