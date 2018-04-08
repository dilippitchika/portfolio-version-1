import React from 'react';
import challengepath from './Images/challengepath.png';

const InsightsIntro = ()=>(
<div className='contentIntro'>
    <div className='introBg'>
        <div className='introText onBbgColor'>
            <div className='headingText'>
                Challenge
            </div>
            <p>
                Our team was developing a data driven feature for our users to narrow down where the ad money was being spent and whether it was profitable for the user or not. 
            </p>
            <p>
                This feature was first of its kind and the technology behind it was really complicated. My task was to ideate and prototype the interface so users can leverage the power of data.
            </p>
            <div className='headingText'>
                Background
            </div>
            <p>
                This feature helps identify where ad money is spent and instead where it should be spent. We were providing insights upfront to the customer by giving them directions based on these insights. This feature was completely new and users had no clue what this meant if they weren’t onboard to the feature.
            </p>
            <p>
                “What’s obvious to us, isn’t obvious to everyone”
            </p>
        </div>
    </div>
    <div>
        <img className='introImage' src={challengepath}/>
    </div>
</div>
);

export default InsightsIntro;