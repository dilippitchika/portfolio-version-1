import React from 'react'
import GoalsPageIntro from './GoalsPageIntro';
import {Link} from 'react-router-dom';
import goalheader from './Images/goalheader.png';
import goalpic1 from './Images/goalpic1.png';
import goalpic2 from './Images/goalpic2.png';
import goalpic3 from './Images/goalpic3.png'

const GoalsResearch=()=>(
    <div>
        <div className = 'centerCardContainer'>
            <div className='headingText'>
                Research
            </div>
            <p className='centerText'>
                Ideally when we set a long term goal ( Eg: I want to learn guitar by the end of this year).  The objective might be a bit hazy, meaning we cannot pinpoint how much we will learn specifically like which chords, songs or style and the time taken to achieve it is also fuzzy.
            </p>
            <p className='centerText'>
             However, in this long term goals there are quite a no. of short term goals involved. In this case it might be like I want to buy a guitar by the end of this week, which can again be split into sub goals like I want to google about the type of guitars tonight, ask my friends tomorrow etc. 
            </p>
            <p className='centerText'>
                Ideally the next step was to confirm my ideas and talk to inhouse marketing and support team to understand how they set goals.
            </p>
            <p className='centerText'>
                My questions were based on 
            </p>
            <p className='centerText'>
                How they set goals, how do they track them, what happens when they achieve or fail to achieve a goal.
            </p>    
            <p className='centerText'>
                I asked them to walk me through the process of how they set a goal and what goals they were currently tracking in the marketing campaign.
            </p>
            <p className='centerText'>
                They were using excel to track their goals because of the complexity involved due to multiple campaigns spanning across multiple domains and sub-domains. So they exported all the relevant data for the week into sheets and organized them according to their need.
            </p>
        </div>
    </div>
);

const GoalsDevelop=()=>(
    <div>
        <div className = 'centerCardContainer'>
            <div className='headingText'>
                Develop
            </div>
            <p className='centerText'>
                For the tracking interface, a wide number of inputs were needed to ensure smooth creation and tracking of goals. The below sequence of inputs shows how the user creates and filters goals to allocate subgoals and spends.
            </p>
        </div>
    </div>
);

const GoalsDevelop2 = ()=>(
    <div className = 'goalbg2'>
        <div className='goalImage'>
            <img className='goalpic2' src={goalpic2}/>
        </div>
    </div>
);

const GoalsDevelop3 = ()=>(
    <div className='goalbg3'>
        <div>
            <img className='goalpic3' src={goalpic3}/>
        </div>
    </div>
);

const GoalsConclusion = ()=>(
    <div>
        <p className='conclusionText'>
            This project was not implemented until after the end of my internship, so I have no tracking data of the usage statistics. The Interface was created on the basis of the above inputs along with dynamic editing capabilities, which will be shared over mail to people interested in discussing further.
        </p>
    </div>
)

const CentralGoals = ()=>(
    <div>
        <div className='homeLink'>
            <Link to='/'>
            Home
            </Link>
        </div>
        <div className = 'contentHeading'>
            Conceptualising a central goals page to track campaign performance dynamically
        </div>
        <div>
            <img className='contentImage' src={goalheader}/>
        </div>
        <GoalsPageIntro/>
        <GoalsResearch/>
        <GoalsDevelop/>
        <GoalsDevelop2/>
        <GoalsDevelop3/>
        <GoalsConclusion/>
        <div className='backLink'>
                <Link to='/'>
                    Back
                </Link>
        </div>
    </div>
); 

export default CentralGoals;