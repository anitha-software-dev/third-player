import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Custom
import LandingPageIndex from "views/home/landingPage/index"
import StoryPage from 'views/home/landingPage/storyPage';
import { AnchorScroll } from 'helper';

export default function Routes() {
    React.useEffect(() => {
        AOS.init();
        AnchorScroll()
    });
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={(props) => <LandingPageIndex {...props} />} />
                    <Route exact path="/story/page" render={(props) => <StoryPage {...props} />} />
                </Switch>
            </BrowserRouter>
        </>
    )
}