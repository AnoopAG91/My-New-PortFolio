import React from 'react'
import './About.css'
import myImage from '../images/MyImage.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdSchool } from 'react-icons/md'
import { AiTwotoneStar } from 'react-icons/ai'

function About() {
    return (
        <div className='about' id='about'>
            <div className='about-title'>
                <h1 className='slide-in-left'>About Me</h1>
                <div className='about-content'>
                    <img src={myImage} alt='my-img'/>
                    <p><span className='content-hi'>Hi,</span> I am Anoop. A passionate Front-End Developer with a strong foundation in web development.
                     I embarked on my journey in the world of web development by completing a comprehensive Front-End Development training program 
                     at FunctionUp. In addition, I am a self-taught Front-End Developer, having gained substantial knowledge and skills through 
                     online resources and YouTube. Since then, 
                    I've been on a mission to craft visually stunning and highly functional web applications.
                        <br /><br />
                        Throughout my journey as a Front-End Developer, I've had the opportunity to work on various projects, 
                        where I've applied my knowledge and
                         expertise to develop websites that not only meet but exceed client expectations.</p>

                </div>

                <div className='education-section'>
                    <h2>Education And Experience</h2>
                    <VerticalTimeline lineColor='#3e497a'>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2023"
                            iconStyle={{ background: 'rgb(202 76 12)', color: '#fff' }}
                            icon={<MdWork />}
                        >
                            <h3 className="vertical-timeline-element-title">Front-end Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Front-end Developer Training</h4>
                            <p>
                                FunctionUp
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2017 - 2021"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<MdSchool />}
                        >
                            <h3 className="vertical-timeline-element-title">Graduation (B.A History)</h3>
                            <h4 className="vertical-timeline-element-subtitle">Annamalai University</h4>
                            <p>
                                Tamilnadu
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2008 - 2009"
                            iconStyle={{ background: 'rgb(202 76 12)', color: '#fff' }}
                            icon={<MdSchool />}
                        >
                            <h3 className="vertical-timeline-element-title">Higher Secondary (12th)</h3>
                            <h4 className="vertical-timeline-element-subtitle">University of Calicut</h4>
                            <p>
                                Wisdom College, Kozhikode, Kerala
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2005 - 2007"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<MdSchool />}
                        >
                            <h3 className="vertical-timeline-element-title">10th (SSLC)</h3>
                            <h4 className="vertical-timeline-element-subtitle">Ghss Beypore</h4>
                            <p>
                                Kozhikode
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(227 133 60)', color: '#fff' }}
                            icon={<AiTwotoneStar />}
                        >
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>

        </div>
    )
}

export default About