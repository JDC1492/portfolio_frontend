import React from 'react';

const Project = ({project}) => {
    return (
        <div>
            <p>{project.imgUrl}</p>
            <p>{project.title}</p>
            <p>{project.description}</p>
            <p>{project.gitLink}</p>
            
        </div>
    );
}

export default Project;
