import { movies } from "../../data"
import { ADDMOVIE, FILTERBYNAME } from "../actionTypes/actiontypes"
const initstate={
    liste: movies,filtedrname:""
}
export const moviesreducer=(state=initstate, action)=>{
   switch (action.type) {
    case ADDMOVIE:
        return {...state, liste:[...state.liste,action.payload]}
        
        case FILTERBYNAME:
            return {...state,filterdname:action.payload}
        

    default:
       return state
}

}