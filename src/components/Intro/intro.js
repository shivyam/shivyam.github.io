import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';
import bg from '../../assets/portfolio-2.png';
import btnImg from '../../assets/hireme.png';

const Intro=()=>{
    return(
        <section id="intro" >
            <div className="introContent">
                <p className="hello">Hello, </p>
                <p className="introText">I'm <span className="introName">Shivya</span> </p>
                <p className="introParagraph"> A third year <b>software engineering</b> student at McMaster University!</p>
            </div>
            
            <img src={bg} alt="profile" className="bg" />
            
        </section>

    )
};


export default Intro;