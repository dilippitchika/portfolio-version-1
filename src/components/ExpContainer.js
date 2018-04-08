import React from 'react';
import {Link} from 'react-router-dom';

const ExpContainer = () =>(
    <div className='BlueBgContainer'>
        <div className='ContainerExperience'>
            <div className ='ExpText'>Experience</div>
            <div className = 'CompanyDetails'>
                <div className='CompanyName'>AdWyze (now Granularhq)</div>
                <div className='CompanyHeadline'>Data exploration and insights based on digital advertising for enterprises</div>
            </div>
            <div className='ExpDetails'>
                <div className='ExpName'>User Experience Intern</div>
                <div className='Duration'>May - July ‘17 (10 weeks)</div>
            </div>
            <div className='ContentLinksContainer'>
                <div className = 'ContentRow'>
                    <div className = 'ContentCell'><Link to='/dashboardproject' style={{color:'white'}}>Improving the learnability of dashboard with user research</Link> </div>
                    <div className = 'ContentCell'><Link to='/onboardingRedesign' style={{color:'white'}}>Redesigning the onboarding experience to decrease drop-off rates substantially</Link></div>
                </div>
                <div className = 'ContentRow'>
                    <div className = 'ContentCell'><Link to='/userInsights' style={{color:'white'}}>Design and Implementation of a data driven feature to drive user insights</Link></div>
                    <div className = 'ContentCell'><Link to='/centralGoals' style={{color:'white'}}>Conceptualising a central goals page to track campaign performance dynamically</Link></div>
                </div>
            </div>
        </div>
    </div>
);

export default ExpContainer;