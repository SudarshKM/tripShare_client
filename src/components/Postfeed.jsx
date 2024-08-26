import React, { useContext, useState } from 'react'
import user from '../assets/user.png'
import { deletePostCard } from '../../server/allApi'
import { editResponseContext } from '../context/DataShare'

function Postfeed({moment }) {
  const [userName,setUserName]=useState(sessionStorage.getItem("userName"))
  const [postId , setPostId] = useState({
    id:moment._id
  })

  const {setEditResponse}=useContext(editResponseContext)

  const handleDeletePost =async(id)=>{
    const result = await deletePostCard(postId);
    if(result.status==200){
      setEditResponse(true)
    }
    console.log(result);
    
 }



  return (
    
    <div style={{backgroundColor:'white'}}>
        <div className='d-flex align-items-center '>
            <img src={user} alt="" width={'30px'} height={'30px'} />
            <h6>  {moment?.username}</h6>
        </div>

        <p>{moment?.comment}</p>
        <div className="row">
          <div className="col-10"></div>
          <div className="col-2">
          {moment?.username == `${userName}` &&
            <button className='btn mt-3' style={{backgroundColor:'#27192f',color:'white'}} variant="primary" onClick={()=>handleDeletePost(moment?.id)} >Delete</button>}
          </div>

        </div>
        <hr />

    </div>
    
  )
}

export default Postfeed