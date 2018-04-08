import React from 'react';
import {Link} from 'react-router-dom';
const AboutMe = ()=>(
    <div className='AboutMebg'>
        <div className = 'ContainerExperienceAbout'>
            <div className='AboutHead'>About Me</div>
            <p className='quote'>To tell a great story, the audience needs to flow with our imagination. To craft a great experience, our imagination needs to flow with our audience.</p>
            <p> This quote describes my idea of an outstanding experience. Hey, thanks a lot for checking out my work. I don't have much experience yet, but my dedication to be better makes me a great choice.</p>
            <p> I am a final year Mechanical student at Indian Institute of Technology, Kharagpur graduating in May 2018. I stumbled upon UX design when I was leading my team in a competition and have never left it. It's a long story, but it's worth it.</p>
            <p> So If you want to know more about me, my work or this crazy story of my career please hit me up. I would be happy to share my thoughts, no matter which field you are into.</p>
            <p> You can find in depth writing in my medium posts describing the process I follow for own projects in <a href='http://medium.com/@Dilippitchika'>here</a></p>
            <div className='ExpDetails2'>
                    <div className='ExpName'>Personal</div>
                    <div className='Duration'>Published Medium Articles</div>
            </div>
            <div className='ContentLinksContainer'>
                    <div className = 'ContentRow'>
                        <div className = 'ContentCell'><Link to='https://medium.com/@Dilippitchika/match-your-math-scientific-calculator-app-design-89e808d6cc75' style={{color:'#1D1C1C'}}>Match your math : Scientific Calculator app design</Link> </div>
                        <div className = 'ContentCell'><Link to='https://blog.prototypr.io/collaboration-for-compassion-heres-how-sports-made-me-a-better-designer-ecb73d03697d' style={{color:'#1D1C1C'}}>Collaboration for compassion, here’s how sports made me a better designer</Link></div>
                    </div>
            </div>
        </div>
    </div>
);

export default AboutMe;