import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Portfolio from './Portfolio';
import Dashboardprojects from './Dashboardprojects';
import OnboardingRedesign from './OnboardingRedesign';
import UserInsights from './UserInsights';
import CentralGoals from './CentralGoals';

const NotFoundPage = () =>(
    <div>
        Hey man, this page doesn't exist bro.
        <Link to='/'>Let's go home</Link>
    </div>
);
const AppRouter = ()=>(
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Portfolio} exact={true}/>
            <Route path='/dashboardproject' component={Dashboardprojects} />
            <Route path='/onboardingRedesign' component={OnboardingRedesign} />
            <Route path='/userInsights' component={UserInsights} />
            <Route path='/centralGoals' component={CentralGoals} />
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;