import React from 'react';
import NavHeader from './NavHeader';
import HeroHeader from './HeroHeader';
import LinkContent from './LinkContent';
import ExpContainer from './ExpContainer';
import Footer from './Footer';
import AboutMe from './AboutMe';

export default class Portfolio  extends React.Component{


    state={
        // <LinkContent contents={this.state.contents}/>
        contents:
            [{
                url:'http://placehold.it/400x300',
                heading:'UX Intern AdWyze',
                subtext:'Improved Onboarding and Dashboard',
                tags:'User Research, Journey mapping, Visual Design'
            },
            {
                url:'http://placehold.it/400x300',
                heading:'Content Header',
                subtext:'Subtitle',
                tags:'Tags and work'
            },
            {
                url:'http://placehold.it/400x300',
                heading:'Content Header',
                subtext:'Subtitle',
                tags:'Tags and work'
            }]
    };

    render(){
        return(
        <div>
            <NavHeader/>
            <HeroHeader/>
            <ExpContainer />
            <AboutMe/>
            <Footer />
        </div>
        );
    };

};


