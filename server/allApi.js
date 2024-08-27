
import {commonApi} from './commonApi';
// const serverURl = "http://localhost:4000"
const serverURl = 'https://tripshare-server.onrender.com/'

//register
export const registerUserApi=async(reqBody)=>{
    return await commonApi('POST',`${serverURl}/register`,reqBody) 
}

//getUser
export const loginUserApi = async(reqBody)=>{
    return await commonApi("POST", `${serverURl}/login`,reqBody )
}


//host a trip api
export const hostApi = async(reqBody)=>{
    return await commonApi('POST',`${serverURl}/host`,reqBody)
}

//code to get allhostdetails
export const getAllHostApi=async (searchKey)=>{
    return await commonApi('GET',`${serverURl}/host?search=${searchKey}`,"")
 }

 //code to get allhostdetails : no search
export const getAllHostnosearchApi=async ()=>{
    return await commonApi('GET',`${serverURl}/hostnosearch`,"")
 }



//add a feed
export const postfeedApi=async(reqBody)=>{
    return await commonApi ('POST',`${serverURl}/post`,reqBody)
}

//code to get allpostdetails
export const getAllPostApi=async ()=>{
    return await commonApi('GET',`${serverURl}/post`,"")
 }


 //code to add profile
 export const setTheProfileApi=async(reqBody)=>{
    return await commonApi ('POST',`${serverURl}/profile`,reqBody)
}

//code to get user profile
export const getProfileApi=async ()=>{
    return await commonApi('GET',`${serverURl}/profile`,"")
 }

//code to delete trip host
export const deleteTripCard = async(reqBody)=>{
    return await commonApi('DELETE',`${serverURl}/host`,reqBody)
 } 

 export const updateProfile = async(reqBody)=>{
    return await commonApi('PUT',`${serverURl}/profile`,reqBody)
 } 

 //code to delete trip host
export const deletePostCard = async(reqBody)=>{
    return await commonApi('DELETE',`${serverURl}/Post`,reqBody)
 } 
