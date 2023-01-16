import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <div className='aboutme container'>
            <div className='row'>
                <div className='col'>
                    <img src={require('../../assets/images/photo.png')} alt='jkadfkasjhgkj' />
                </div>
                <div className='col'>
                    <div className='jumbotron'>
                        <h1 className='display-4'>Giovanna "Gigi" DeBortoli</h1>
                        <h3>Web Developer: Fullstack</h3>
                        <hr className='my-4' />
                            <h5 className="lead">She/Her/Hers</h5>
                    </div>
                </div>
            </div>
            <br />
            <p>
                Hello! I am a recent graduate from the University of Oregon Fullstack Web Development bootcamp. I have a strong passion for coding and learning new skills and languages. I plan on continuing my education and finding a job in the field. 
            </p>
        </div>
            );
}

export default About; 