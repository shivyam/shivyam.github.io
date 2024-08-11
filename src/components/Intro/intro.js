import React from 'react';
import './intro.css';
import photo from '../../assets/face2.png';

const Intro=()=>{
    
    return(

        
        <section id="intro" >
            <div className="introContent">
                <p className="hello">Hello, </p>
                <p className="introText">I'm <span className="introName">Shivya</span> </p>
                <p className="introParagraph1"> A third year <b>software engineering</b> student at McMaster University!</p>
    
                <p className="introParagraph2"> Originally from Burnaby, BC, I moved to Ontario for university, motivated by a desire for diverse experiences 
                    and opportunities. I am an enthusiastic, hardworking individual who thrives on taking on new challenges. 
                    Fueled by a passion for learning, I approach every task with a positive attitude and a growth mindset. 
                    Eager to make a meaningful contribution, I aspire to achieve great things in the ever-evolving field 
                    of software development.</p>
                    <a href="ShivyaMehtaResume.pdf" download="ShivyaMehtaResume.pdf"><button id="cv-button"  className="cv-button" >Download CV</button></a>
            
            
            </div>
            
            <img src={photo} alt="profile" className="photo" download />
            
        </section>

    )
};


export default Intro;