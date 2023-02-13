import { ADDMOVIE, FILTERBYNAME } from "../actionTypes/actiontypes"
export const addmovier =(newmovie)=>{
    return{
        type:ADDMOVIE,
        payload:newmovie
}
}
export const filterbyname =(name)=>{
    return{
        type:FILTERBYNAME,
        payload:name
}
}