import React, { Component }from 'react';

// import { connect } from 'react-redux';
import HomeHeader from '../components/homeComponents/HomeHeader';
import HomeImg from '../components/homeComponents/HomeImg';

class HomeContainer extends Component{
    render() {
        return (
            <div>
                <HomeHeader />
                <HomeImg />                
            </div>
        );
    }
}

export default HomeContainer;
