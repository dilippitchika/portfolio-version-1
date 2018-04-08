import React from 'react';
import { Link } from 'react-router-dom';
import OnboardingPageIntro from './OnboardingPageIntro';
import headeronB from './Images/headeronB.png';
import onbp1 from './Images/onbp1.png';
import onbp2 from './Images/onbp2.png';
import onb3 from './Images/onb3.png';

const OnboardingResearch = ()=>(
        <div>
            <div className = 'centerCardContainer'>
                <div className='headingText'>
                    Research
                </div>
                <p className='centerText'>
                    To conduct user research, the biggest restriction was talking to users.
                </p>
                <p className='centerText'>
                “I don’t think you should talk to our users, they are very busy and don’t like to be disturbed.” <br/>This is what the response was from my manager when I had asked for interacting with users. So, How was I supposed to improve the platform without users.                 
                </p>

                <p className='centerText'>
                    I realised the next best option was conducting research with my co-interns and record their thoughts and experiences as they onboard into the platform.  
                </p>

                <p className='centerText'>
                    So I created a research script determined to do guerrilla user testing and had a small session with them letting them know what I would be testing for. With their help I documented all the bugs and usability issues with the onboarding process and was able to understand their thoughts to define my How might we questions.
                </p>    
                <p className='centerText'>A few of those questions were</p>
                <ol className='centerText'>
                    <li>How might we (HMW) increase the ease and speed of onboarding?</li>
                    <li>HMW raise users anticipation while onboarding them to the platform?</li>
                    <li>HMW help users recover from errors and offer freedom?</li>
                </ol>
                <p className='centerText'>
                    I was more focused on visual design for this process, as we didn’t want to iterate over the existing interface but start from scratch.
                </p>
            </div>
        </div>
);

const OnboardingDevelop1 = ()=>(
    <div className='bgOnb1'>
        <div className='textCardContainerOnB'>
            <div className='onBContentText'>
                <div className = 'headingText'>
                    Redesigned Sign Up screen
                </div>
                <p>
                    To generate leads for our platorm, our signup screen needed to be simple, efficient and in one place. 
                </p>
                <p>
                    The copy was structured to be benefit oriented to help users undertstand the value we offer.
                </p>
                <p>
                    The testimonial helps with gaining trust and establishing our clientele.
                </p>
                <p>
                    The contrast in the page drives the users towards our CTA albeit the form they need to fill out.
                </p>
            </div>
            <div >
                <img  className='onBImage' src={onbp1}/>
            </div>
        </div>
    </div>
);

const OnboardingDevelop2 = ()=>(
    <div className='bgOnb2'>
        <div className='textCardContainerOnB'>
            <div>
                <img  className='onBImage' src={onbp2}/>
            </div>
            <div className='onBContentText'>
                <div className = 'headingText'>
                    Connecting Advertising channels
                </div>
                <p>
                    The first step of the onboarding process was connecting advertising channels of the user. 
                </p>
                <p>
                    This screen was designed such that it was clear where the user was and her next step was also specified.
                </p>
                <p>
                    The division of channels into various categories helped user identify which her prime advertising accounts were.
                </p>
            </div>
        </div>
    </div>
);

const OnboardingDevelop3 = ()=>(
    <div className='bgOnb1'>
        <div className='textCardContainerOnB'>
            <div className='onBContentText'>
                <div className = 'headingText'>
                    Connecting Advertising channels
                </div>
                <p>
                    This is the next step after connecting the advertising channels. It follows the same rationale as previous step.
                </p>
                <p>
                    With the topnav indicating where the user currently is in the platform. It clearly establishes that there aren’t many more steps before completing the onboarding process.
                </p>
            </div>
            <div>
                <img className='onBImage' src={onb3}/>
            </div>
        </div>
    </div>
);

const OnboardingConclusion = ()=>(
    <div className='conclusionpara'>
        <p className='conclusionText'>
            These are a few screens that show a peek at the new onboarding process of the platform, with more importance given to contrasting colors. It helps users identify where they are in the process of onboarding. Due to non disclosure agreement, I cannot reveal everything about the project here. 
        </p>
         <p></p>
        <p className='conclusionText'>
            If interested in knowing more, the complete prototype can be seen and would be explained by me as I walk you step by step in the process. This new design is currently implemented and helped decrease the drop off rates by 50%.
        </p>
    </div>
);

const OnboardingRedesign = ()=>(
    <div>
        <div className='homeLink'>
            <Link to='/'>
            Home
            </Link>
        </div>
        <div className = 'contentHeading'>
            Redesigning the onboarding experience to decrease drop-off rates substantially
        </div>
        <div>
            <img className='contentImage' src={headeronB}/>
        </div>
        <OnboardingPageIntro/>
        <OnboardingResearch/>
        <OnboardingDevelop1/>
        <OnboardingDevelop2/>
        <OnboardingDevelop3/>
        <OnboardingConclusion/>
        <div className='backLink'>
                <Link to='/'>
                    Back
                </Link>
        </div>
    </div>
);

export default OnboardingRedesign;