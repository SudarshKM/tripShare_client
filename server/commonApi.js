import axios from 'axios'


export const commonApi =async (method ,url , reqBody )=>{

    const reqConfig = {
        method,
        url,
        data: reqBody,
        headers : "application/json"
      }
   return await axios(reqConfig).then((result)=>{
    return result
   }).catch((err)=>{
    return err
   });
}