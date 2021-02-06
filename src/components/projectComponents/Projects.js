import React, { Component } from 'react';
import Project from './Project';
import { fetchProjects } from '../../actions/actIndex';
import { connect } from 'react-redux';

class Projects extends Component {
    
    componentDidMount = () => {
        this.props.fetchProjects()
    }
    
    render() {
        debugger
        const eachProject = this.props.projects.map((project,i) => <Project key={i} project={project} />)
            // Create variable assignment of the passed down prop being mapped through and returning a <Project key={i} project={project}/>

        return (
            <div>
                {eachProject}           
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{projects: state}
}

export default connect(mapStateToProps, { fetchProjects })(Projects);