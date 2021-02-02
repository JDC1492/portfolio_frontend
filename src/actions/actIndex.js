export const fetchProjects = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/projects')
            .then(resp => resp.json())
            .then(projects => {
                dispatch({type: "SET_PROJECTS", payload: projects})
            }
        )
    }
}

export const addProject = project => {
    return (dispatch) => {
        return fetch('http://localhost:3000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({project:project})
        })
        .then(resp => resp.json())
        .then(project => {
            dispatch({type: 'ADD_PROJECT', payload: project})
        }
        )
    }
}