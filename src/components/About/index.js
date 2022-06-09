import { faCss3, faGithub, faHtml5, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                            strArr={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus inventore recusandae cum consequatur sunt explicabo, amet neque alias dolore repudiandae omnis sint unde illo earum fuga id. Aliquam, quis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus inventore recusandae cum consequatur sunt explicabo, amet neque alias dolore repudiandae omnis sint unde illo earum fuga id. Aliquam, quis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus inventore recusandae cum consequatur sunt explicabo, amet neque alias dolore repudiandae omnis sint unde illo earum fuga id. Aliquam, quis.</p>
                </div>

                {/* right side  */}
                <div className="stage-cube-cont">
                    <div className="cube-spinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faHtml5} color="#dd0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faReact} color="#dd0031" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faGithub} color="#dd0031" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faNodeJs} color="#dd0031" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#dd0031" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faCss3} color="#dd0031" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    );
};

export default About;