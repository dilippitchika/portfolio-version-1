import React from 'react';
import ImagesHeroHeader from './ImagesHeroHeader';

const HeroHeader = ()=>(
    <div className="HeroDiv">
        <h1>Hi, I am <br/>Dilip Pitchika.</h1>
        <h2>I design, illustrate and code interfaces.</h2>
        <div className = 'outerdiv'>
            <ImagesHeroHeader className='Images'/>
        </div>
        <h3>I look forward to work with teams <br/>in building fast, intuitive and delightful interfaces.</h3>
    </div>

);

export default HeroHeader;