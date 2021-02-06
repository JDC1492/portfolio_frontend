import React from 'react';
import AboutLink from '../components/navComponents/AboutLink';
import HomeLink from '../components/navComponents/HomeLink';
import ProjectsLink from '../components/navComponents/ProjectsLink';

const NavBarContainer = () => {
    return (
        <div>
            <HomeLink /> |
            <ProjectsLink/> |
            <AboutLink />    
        </div>
    );
}

export default NavBarContainer;
