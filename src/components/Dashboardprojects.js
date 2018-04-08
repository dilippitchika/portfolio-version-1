import React from 'react';
import { Link } from 'react-router-dom';
import DashboardImage from './Images/DashboardImage.png';
import DashboardPageIntro from './DashboardPageIntro';
import dashbp2 from './Images/dashbp2.png';
import dashbp3 from './Images/dashbp3.png';
import dashbp4 from './Images/dashbp4.png';
import dashbp5 from './Images/dashbp5.png';

const DashboardResearch = ()=>(
    <div className='textCardContainer'>
        <div className = 'dashbp2'>
            <img  src={dashbp2}/>
        </div>
        <div>
            <div className='headingText'>
                Research
            </div>
            <p>With some vague ideas in my mind being documented in my notes. I realised I needed a direction to proceed with. So I started with user research. There was a catch here.</p>
            <p>I wasn’t allowed to interact directly with our clients. I being an intern who might be irresponsible. This staggered me, though I was given the option of interacting with executives to know more about our clients. </p>    
            <p>With this obstacle, I set to find out what I have. We did have fullstory, that records sessions of all users. I had a team of similar interns who were working in the company for the first time and were clueless about the dashboard.</p>    
            <p>
                I scoured through hours and hours of fullstory data to identify what users were and weren’t doing in the dashboard. After hours of training data, I had identified what users were doing and categorised their cases accordingly.
            </p>
        </div>

    </div>
);

const DashboardDefine = ()=>(
    <div className='textCardContainer'>
        <div>
            <div className='headingText'>
                Define
            </div>
            <p>After conducting research I started arranging all the data, I had to make some sense in the next direction to proceed in. From quantitative data I had identified the direction we need to move.</p>
            <p>Most of our users were beginner and intermediate users on the basis of tasks the frequently performed on the dashboard.</p>
            <p>I realised that users were struggling with the idea of editing the dashboard according to their needs. It was understood that the learnability of the dashboard was compromised and users found it difficult to work their way around it.</p>
            <p>
                With these insights I defined How Might We (questions) based on jobs to be done framework so that I could ideate solutions accordingly
            </p>
            <ol>
                <li>How Might We (HMW) improve the learnability of the dashboard?</li>
                <li>HMW reduce user errors in the dashboard?</li>
                <li>HMW increase the time spent by user on the dashboard?</li>
            </ol>
        </div>
        <div className = 'dashbp2'>
            <img  src={dashbp5}/>
        </div>

    </div>
);

const DashboardIdeate1 = ()=>(
    <div className='textCardContainer'>
        <div className = 'dashbp3'>
            <img  src={dashbp3}/>
        </div>
        <div>
            <div className='headingText'>
                Ideate and Prototype
            </div>
            <p>
                Due to confidentiality agreement, I can’t provide details of every HMW questions framed above. Instead I will answer the first one.
            </p>
            <p>
                HMW increase the learnability of the dashboard?
            </p>
            <p>
                Users weren’t comfortable with the idea of exploring the dashboard on their own. We realised they needed a guide to help them onboard into the dashboard better. 
            </p>
            <p>
                When a user lands into the dashboard for the first time, he’s given a blank space or a completed dashboard based on his account leaving him no scope for learning about how to use the features of the dashboard.
            </p>
            <p>
                Our users were marketers who were always in a hurry and felt comfortable moving things around in excel. They were occupied with achieving their goals faster and minimise losses in spend.
            </p>
            <p>
                I started documenting all the possible ideas to improve the learnability. I narrowed it down to 2 top contenders based on opinions of my team. 
            </p>
            <p>
                1. Video tutorials - Short video tutorials are used by a lot of teams to explain their services, these are well made but they are not contextual. A user has to recall that this is what she has to do.
            </p>
            <p>
                2. Product walkthroughs - This is more commonly used in today’s platforms. These are the guided walkthroughs that show you where to click by blacking out other areas and context aware. The problem though is that they restrict the freedom and are too lengthy.
            </p>
        </div>
    </div>
);

const DashboardIdeate2 = ()=>(
    <div className='textCardContainer'>
        <div>
            <p>
                I wasn’t however convinced that this is way we should go, given these two ideas are just solutions to the right problem. I wanted to solve it the right way as well because it could a make or break the dashboard completely. 
            </p>
            <ol>
                <li>Context aware learning</li>
                <li>Freedom of usage</li>
                <li>Unobtrusive</li>
                <li>Ease of access</li>
            </ol>
            <p>
                Then one day I was using Trello to update my team about other projects. This was the ah-ha! moment, it was staring right at my face all this time. It was Trello’s way of onboarding by letting the users do tasks on their own if they need to figure out the platform. 
            </p>
            <p>
                It fit all my criteria for evaluation. The best part this would totally work on our dashboard as well. So, I defined the set of tasks user can perform by interacting with the dashboard to learn more by making use of gamification and dividing our system into levels of progress.
            </p>
        </div>
        <div className = 'dashbp2'>
        <img  src={dashbp4}/>
    </div>
    </div>
);

const DahsboardConclusion = () =>(
    <div className = 'textCardContainer'>
        <p className = 'conclusionText'>
            The solution cannot be shown here because it’s completely native to the platform and independent of any other tools and softwares. It was this idea and it’s rapid execution in 4 days that helped me land a full time offer at AdWyze as the dashboard drop off rate was cut down by 60%.
        </p>
    </div>
);

const Dashboardprojects = ()=>(
    <div>
        <div className='homeLink'>
            <Link to='/'>
            Home
            </Link>
        </div>
        <div className = 'contentHeading'>
            Improving the learnability of dashboard with user research 
        </div>
        <div>
            <img className='contentImage' src={DashboardImage}/>
        </div>
        <DashboardPageIntro/>
        <DashboardResearch/>
        <DashboardDefine/>
        <DashboardIdeate1/>
        <DashboardIdeate2/>
        <DahsboardConclusion/>
        <div className='backLink'>
                <Link to='/'>
                    Back
                </Link>
        </div>
    </div>
);

export default Dashboardprojects;