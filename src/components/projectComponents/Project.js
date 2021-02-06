import React from 'react';

const Project = ({project}) => {
   
    return (
        <div className="projectContainer">
           <img src={project.imgUrl} alt="Not Available"/>
           <h1>{project.title}</h1>
           <p>{project.description}</p>
           <a href={project.gitLink}> View project </a>
        </div>
    );
}

export default Project;
// import React, { Component } from 'react';

// class Project extends Component {
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//             {this.props.id}
        
                
//             </div>
//         );
//     }
// }

// export default Project;

