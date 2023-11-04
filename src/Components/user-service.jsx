import { myaxios } from "./Helper";
export const service=(user)=>{
    return myaxios.post('/portal/save',user).then((response)=>response.data)
}