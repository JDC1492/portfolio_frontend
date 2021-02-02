import React, { Component }from 'react';
import HomeHeader from '../components/homeComponents/HomeHeader';
import HomeImg from '../components/homeComponents/HomeImg';
import { fetchProjects } from '../actions/ActIndex';

class HomeContainer extends Component{

    componentDidMount =() => {
        this.props.fetchProjects()
      }

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
