import emailjs from '@emailjs/browser';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);
    const refForm = useRef();
    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm(
            'service_kyiqz8c',
            'template_nvlh9gn',
            refForm.current,
            'coqTwiQUsFqtQcwZF'
        ).then(
            (response) => {
                alert('Message sent successfully');
                // window.location.reload(false);
                console.log(response.status, response.text);
            },
            (error) => {
                alert('Faild!! Try again.');
                console.log(error)

            }
        )
    }
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArr={['C', 'o', 't', 'a', 'c', 't', ' ', 'm', 'e.']} idx={15} />
                    </h1>
                    {/* contact form  */}
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li><input type="text" name="subject" placeholder='Subject' required /></li>
                                <li><textarea name="message" id="" cols="30" rows="10" required></textarea></li>
                                <li><input type="submit" value="Send Message" placeholder='Your Message' className='flat-button' /></li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Kazi Shariful Islam <br />
                    <FontAwesomeIcon icon={faPhone} /> 01612178331 <br />
                    <FontAwesomeIcon icon={faEnvelope} /> kazisharifulislam52@gmail.com

                </div>
                <div className="map-wrap">
                    <MapContainer center={[23.460657, 91.180908]} zoom={13} >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[23.460657, 91.180908]}>
                            <Popup>Kazi Shariful Islam is here! <br /> Let's get in touch </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;