import React from 'react';
import { Link } from 'react-router-dom';
import logoTitle from '../../assets/images/logo-s.png';
import resume from '../../assets/Kazi-Shariful-Islam-Junior-React-Developer-resume.pdf';
import './index.scss';

const Home = () => {
    class DownloadLink extends React.Component {
        render() {
            return (
                <a className='flat-button' href={this.props.src} download>{this.props.children}</a>
            )
        }
    }
    return (
        <div className='container home-page'>
            <div className="text-zone">
                <h1> Hi, <br /> I'm
                    <img src={logoTitle} alt="Developer" />
                    hariful Islam <br />
                    React Developer
                </h1>
                <h2>Frontend Developer / React Expert</h2>
                {/* <a href="https://drive.google.com/file/d/19B_izzj-fUEHGfNSsSmRvDDOFnwEfWzl/view?usp=sharing" className='flat-button'>DOWNLOAD RESUME</a> */}
                <DownloadLink className="flat-button" src={resume}>DOWNLOAD RESUME</DownloadLink>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
};

export default Home;