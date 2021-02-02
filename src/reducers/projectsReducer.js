
export default function projectsReducer(
    state=[], action){
        switch (action.type){
        case 'SET_PROJECTS':
            return[...action.payload]
        case 'ADD_PROJECT':
            return[...state, action.payload]    
        default:
            return state
        }
}