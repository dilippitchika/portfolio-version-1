import React from 'react';
import pathanalysisheader from './Images/pathanalysisheader.png'
import pathpic1 from './Images/pathpic1.png';
import pathpic2 from './Images/pathpic2.png';
import pathpic3 from './Images/pathpic3.png';
import InsightsIntro from './InsightsIntro';
import {Link} from 'react-router-dom';



const InsightsResearch = ()=>(
    <div className='textCardContainerpath'>
        <div className = 'pathpic1'>
            <img  src={pathpic1}/>
        </div>
        <div>
            <div className='headingText'>
                Redefining the challenge
            </div>
            <p>I identified the directions to explore and frame a better brief as the first part as this one was very vague. Our clients and customers aren’t exactly the same. The feature was immensely powerful but  only if the user is wise enough to know it’s power. So I conducted preliminary research about developing new features and jotted down ideas about the users journey.</p>
            <p>Before using the feature - Questions like: How is this beneficial for me, Do I need to use this, How much effort will it take, Do I have to learn again.</p>
            <p>These were the questions they asked me instantly which made me realise the friction involved in using a new feature.</p>
            <p>
                “Why would we change our habits, if we are already happy with what we have”
            </p>
            <p>
                During using the feature - Remarks like: Ok, this looks promising.  This was unexpected. I want to explore more and see whether it’s really useful.
            </p>
            <p>
                After using the feature - Remarks were like: I need to show this to my team, Let me change my spend to be as the feature showed.
            </p>
            <p>
                Once we are able to cross the threshold of value to the user, the extra effort put by the user will depend on the motivation a user has.
            </p>
        </div>

    </div>
);

const InsightsDefine = ()=>(
    <div className='textCardContainerpath'>
        <div>
            <div className='headingText'>
                Define
            </div>
            <p>I was able to define How might we questions based on research which are divided into before, during and after below.</p>
            <p>Prologue -</p>
            <ol>
                <li>How might we (HMW)  entice our users to use the feature</li>
                <li>HMW reduce the friction involved for users to start using the feature</li>
            </ol>
            <p>Chapters -</p>
            <ol>
                <li>HMW make the insights easy to digest for our users</li>
                <li>HMW increase system state visibility</li>
                <li> HMW help user to explore about each insight in depth.</li>
            </ol>
            <p>Epilogue -</p>
            <ol>
                <li>HMW help users collaborate and share these results</li>
                <li>HMW facilitate user to take action from this data</li>
            </ol>
            <div className='headingText'>
                Diverge
            </div>

            <p>Once I defined the HMW questions. I started going broad to explore the direction of the flow of the user using the feature.</p>
            <p>
                My ideas on getting the user input her requirements were validated completely on the basis of ease of use, speed and clarity. A lot of ideas were thus discarded. 
            </p>
        </div>
        <div className = 'pathpic1'>
            <img  src={pathpic2}/>
        </div>

    </div>
);

const InsightsDevelop = ()=>(
    <div className='textCardContainerpath'>
        <div className = 'pathpic1'>
            <img  src={pathpic3}/>
        </div>
        <div>
            <div className='headingText'>
                Develop
            </div>
            <p>
                I can’t show the completed prototype due to confidentiality clauses. However I will show a peek of the development process.
            </p>
            <p>
                Chapter 2 - How to improve system visibility
            </p>
            <p>
                The problem was staring right at us. How might we show user the system status regarding the bubble chart and the bubble she has clicked to drill down into. I made a lot of sketches and discarded them according as none of them felt right.  So, I started looking at visual design principles to help me improve the feature. 
            </p>
            <p>
                It was standing right there. All of this time, ‘I am such an Idiot’ was the thought that crossed my mind. The Gestalt principles. I quickly prototyped the idea and shared it with my team and it was an instant hit. 
            </p>
            <p>
                It reminded me that any complex problem can be solved by simple principles.
            </p>
        </div>
    </div>
);



const InsightsConclusion = () =>(
    <div>
        <p className = 'conclusionText'>
            This is where I would show the high fidelity prototypes that no can make sense out of but would applaud the visuals. If you want to see it, reach out to me. I can’t show them here due to confidentiality disclaimer.
        </p>
        <p className = 'conclusionText'>
            There wasn’t much freedom to explore in different directions for this problem due to deadlines and restrictions, but even then I was able to pull myself together to build this feature that would be the fastest adapted feature of the platform with more and more users realising the game changing power it holds.
        </p>
    </div>
);

const UserInsights = ()=>(
    <div>
        <div className='homeLink'>
            <Link to='/'>
            Home
            </Link>
        </div>
        <div className = 'contentHeading'>
            Design and Implementation of a data driven feature to drive user insights
        </div>
        <div>
            <img className='contentImage' src={pathanalysisheader}/>
        </div>
        <InsightsIntro/>
        <InsightsResearch/>
        <InsightsDefine/>
        <InsightsDevelop/>
        <InsightsConclusion/>
        <div className='backLink'>
                <Link to='/'>
                    Back
                </Link>
        </div>
    </div>
);

export default UserInsights;