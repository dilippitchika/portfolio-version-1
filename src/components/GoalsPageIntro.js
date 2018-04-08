import React from 'react';
import goalpic1 from './Images/goalpic1.png';
const GoalsPageIntro = ()=>(
<div className='contentIntro'>
    <div className='introBg'>
        <div className='introText goalBgColor'>
            <div className='headingText'>
                Challenge
            </div>
            <p>
                I was tasked with creating the experience of new soon-to-be rolled out features like a goals page, where users can set and track goals at any level. 
            </p>
            <p>
                This feature was similar to most goal tracking services yet had to be tailored specifically for marketers and campaigns giving feedback accordingly.
            </p>
            <div className='headingText'>
                Background
            </div>
            <p>
                Every marketer is judged on the basis of the goals they can achieve. Whether it is campaign performance or minimimal spending yet achieving profitability. The idea was to cater clients who wanted to track their employee performance and give appraisals accordingly.
            </p>
            <p>
                “We always follow goals. Some are set by us, some are not”
            </p>
        </div>
    </div>
    <div>
        <img className='introImage' src={goalpic1}/>
    </div>
</div>
);

export default GoalsPageIntro;