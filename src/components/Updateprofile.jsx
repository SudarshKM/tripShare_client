import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import user from '../assets/user.png';
import Form from 'react-bootstrap/Form';
import { getProfileApi, updateProfile } from '../../server/allApi';
import Swal from 'sweetalert2';
import { editResponseContext } from '../context/DataShare';

function Updateprofile({data}) {
  const [userName,setUserName]=useState(sessionStorage.getItem("userName"))
  const [profileDetails, setProfileDetails] = useState([]);

  const [userProfileId,setuserProfileId]=useState(sessionStorage.getItem("userProfileId"))


  const [show, setShow] = useState(false);
  const [ editUser , setEditUser] = useState({
    username: userName,
    bio: data.bio,
    phonenum: data.phonenum,
    gender: data.gender,
    age: data.age,
    education: data.education,
    location: data.location,
    language: data.language,
    drinking: data.drinking,
    smoking: data.smoking,
    relationship: data.relationship,
    userProfileId
  })

  const {setEditResponse}=useContext(editResponseContext)


  // console.log(editUser);
  
   

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  async function handleUpdate  (){

    // const id = userProfileId
    const reqBody = editUser
    
    const result = await updateProfile(reqBody)

    if(result.status==200) {
      sessionStorage.setItem("userName",result.data.username)
      Swal.fire({
        title: 'Wow!',
        text: 'Profile successfully updated',
        icon: 'success',
        // confirmButtonText: 'Cool'
      })
      setEditResponse(true);
    }

    console.log(result);
    setShow(false)
  }

  // const getprofiledetails = async () => {
  //   const result = await getProfileApi();
  //   setProfileDetails(
  //     result?.data
  //       .map((item) => item)
  //       .filter((item) => item.username == `${userName}`)
  //   );
  //   // console.log(result.data);
  // }

  // console.log(profileDetails[0]?.bio);
  
  // useEffect(() => {
  //   getprofiledetails();
  // }, []);

  return (
    <>
  <button className='btn' style={{color:'white',backgroundColor:'#27192f'}} variant="primary" onClick={handleShow}>Edit Profile</button>

      <Modal show={show} onHide={handleClose} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bold'>
          <div className='d-flex'>
            <img src={user} alt="" width={'30px'} height={'30px'} />
            <h6>{userName}</h6>
          </div>

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='w-100'>
          <textarea name="" placeholder='Tell about Yourself' rows={5} className='form-control' value={editUser.bio} onChange={(e)=>setEditUser({...editUser,bio:e.target.value})}></textarea>
          </div>

          <div className="row p-3">
            <div className="col-md-6">

              <input type="text" value={editUser.phonenum} placeholder='Phone Number' className='form-control m-2' onChange={(e)=>setEditUser({...editUser,phonenum:e.target.value})}/>
              
              <div className='w-100 d-flex align-items-center justify-content-center m-2'>
              <Form.Select value={editUser.gender} aria-label="Default select example" className='me-2' onChange={(e)=>setEditUser({...editUser,gender:e.target.value})}>
                <option>Gender</option>
                <option >Male</option>
                <option >Female</option>
                <option >Transgent</option>
              </Form.Select>

              <input type="text" value={editUser.age} placeholder='Age' className='form-control' onChange={(e)=>setEditUser({...editUser,age:e.target.value})} />
              </div>

              <input type="text" value={editUser.location} placeholder='Location' className='form-control m-2' onChange={(e)=>setEditUser({...editUser,location:e.target.value})}/>

              <Form.Select value={editUser.education} aria-label="Default select example" className='m-2' onChange={(e)=>setEditUser({...editUser,education:e.target.value})} >
                <option>Education Level</option>
                <option >High School</option>
                <option >Trade/Tech School</option>
                <option >In College</option>
                <option >Undergraduate Degree</option>
                <option >In Grade School</option>
                <option >Graduate Degree</option>
              </Form.Select>


            </div>
            <div className="col-md-6" >

            <input type="text" value={editUser.language} placeholder='Language' className='form-control m-2' onChange={(e)=>setEditUser({...editUser,language:e.target.value})}/>

            <Form.Select value={editUser.drinking} aria-label="Default select example" className='m-2' onChange={(e)=>setEditUser({...editUser,drinking:e.target.value})} >
                <option>Drinking</option>
                <option>Socially</option>
                <option>Never</option>
                <option>Frequently</option>
                <option>Sober</option>
              </Form.Select>

              <Form.Select value={editUser.smoking} aria-label="Default select example" className='m-2' onChange={(e)=>setEditUser({...editUser,smoking:e.target.value})}>
                <option>Smoking</option>
                <option>Socially</option>
                <option>Regularly</option>
                <option>Never</option>
              </Form.Select>


              <Form.Select value={editUser.relationship} aria-label="Default select example" className='m-2' onChange={(e)=>setEditUser({...editUser,relationship:e.target.value})}>
                <option>Relationship status</option>
                <option>Single</option>
                <option>Committed</option>
                <option>Married</option>
                <option>Divorced</option>
              </Form.Select>


            </div>
          </div>



         
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Discard
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Updateprofile;