import React from 'react';
import onBchallengeHeader from './Images/onBchallengeHeader.png';
const OnboardingPageIntro = ()=>(
<div className='contentIntro'>
    <div className='introBg'>
        <div className='introText onBbgColor'>
            <div className='headingText'>
                Challenge
            </div>
            <p>
                I was tasked with redesigning the onboarding experience to decrease drop off rates and increase the anticipation of users for endeavors in the platform. 
            </p>
            <p>
                The redesign was targeted to decrease customer support time towards helping users onboard to the platform and focus more on what benefits they get from the platform.
            </p>
            <div className='headingText'>
                Background
            </div>
            <p>
                Onboarding in Business Intelligence platforms is complex and time consuming due to it’s back and forth process and validation. 
            </p>
            <p>
                Our Onboarding suffered with bugs that left the user looping and with an uninspiring visual design that let users drop off with little motivation left to proceed. Eventually our team had to intervene everytime and complete the process for potential users. 
            </p>
        </div>
    </div>
    <div>
        <img className='introImage' src={onBchallengeHeader}/>
    </div>
</div>
);

export default OnboardingPageIntro;