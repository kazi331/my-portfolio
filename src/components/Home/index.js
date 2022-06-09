import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoTitle from '../../assets/images/logo-s.png';
import resume from '../../assets/Kazi-Shariful-Islam-Junior-React-Developer-resume.pdf';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    class DownloadLink extends React.Component {
        render() {
            return (
                <a className='flat-button' href={this.props.src} download>{this.props.children}</a>
            )
        }
    }

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['h', 'a', 'r', 'i', 'f', 'u', 'l', ' ', 'I', 's', 'l', 'a', 'm']
    const jobArray = ['R', 'e', 'a', 'c', 't', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    return (
        <div className='container home-page'>
            <div className="text-zone">
                <h1>
                    <span className={`${letterClass}`}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I'</span>
                    <span className={`${letterClass} _14`}>m</span>
                    <img src={logoTitle} alt="Developer" />
                    <AnimatedLetters letterClass={letterClass} strArr={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArr={jobArray} idx={28} />
                </h1>
                <h2>Frontend Developer / React Expert</h2>
                <DownloadLink className="flat-button" src={resume}>DOWNLOAD RESUME</DownloadLink>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                {/* <a href={resume} className='flat-button'>DOWNLOAD RESUME</a> */}
                {/* <a href="https://drive.google.com/file/d/19B_izzj-fUEHGfNSsSmRvDDOFnwEfWzl/view?usp=sharing" className='flat-button'>DOWNLOAD RESUME</a> */}
            </div>
        </div>
    );
};

export default Home;