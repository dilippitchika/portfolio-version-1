import React from 'react';
import dashbIntro from './Images/dashbIntro.png'
const DashboardPageIntro = ()=>(
<div className='contentIntro'>
    <div className='introBg'>
        <div className='introText dashbgColor'>
            <div className='headingText'>
                Challenge
            </div>
            <p>
                Brief given in the first interaction with my manager<br/> 
                Improve the dashboard for our users.
            </p>
            <p>
                After quantitative user research session I narrowed down to improve the learnability of the dashboard to facilatate exploration of data. 
            </p>
            <div className='headingText'>
                Background
            </div>
            <p>
                Dashboard of the platform is the central place where a user can see all that is happening with his account. The dashboard was intended to let users explore the data on their own by slicing and dicing it. 
            </p>
            <p>
                It was recently modified to accommodate this change. However adaptability of the dashboard fell and users were not sticking on it for long. We wanted to explore why. Thus the brief "Fix the dashboard" was given to me.
            </p>
        </div>
    </div>
    <div>
        <img className='introImage' src={dashbIntro}/>
    </div>
</div>
);

export default DashboardPageIntro;