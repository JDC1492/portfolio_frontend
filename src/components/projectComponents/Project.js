import React from 'react';

const Project = ({project}) => {
   
    return (
        <div className="projects">
           <img src={project.imgUrl} className='photo' alt="Not Available"/>
           <h1>{project.title}</h1>
           <p>{project.description}</p>
           <a href={project.gitLink}> View project </a>
           <br />
           <br /> 
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