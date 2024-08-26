import React, { useContext, useEffect, useState } from "react";
import dp from "../assets/dp.jpg";
import Editprofile from "./Editprofile";
import Uploadfeed from "./Uploadfeed";
import { getProfileApi } from "../../server/allApi";
import Updateprofile from "./Updateprofile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLanguage,
  faLocationDot,
  faMobile,
  faSchool,
  faSmoking,
  faUser,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import { editResponseContext } from "../context/DataShare";


function UserProfile() {
  const [profileDetails, setProfileDetails] = useState([]);
  const [userName, setUserName] = useState(sessionStorage.getItem("userName"));
  const { editResponse, setEditResponse } = useContext(editResponseContext);

  const getprofiledetails = async () => {
    const result = await getProfileApi();

    // console.log(result.data);
    
    setProfileDetails(
      result.data
        .map((item) => item)
        .filter((item) => item.username == `${userName}`)
    );
  };

  // console.log(profileDetails);
   
  // console.log(profileDetails);
  sessionStorage.setItem("userProfileId", profileDetails[0]?._id);

  useEffect(() => {
    getprofiledetails();
    setEditResponse(false);

  }, [editResponse]);

  return (
    <>
      {profileDetails[0] ? (
        <div className="container shadow rounded my-4 p-3 ">
          <div className="text-center">
            <img
              src={dp}
              alt=""
              style={{ width: "50px", borderRadius: "50%" }}
            />

            <h2 className="fw-bold mt-3">{profileDetails[0]?.username}</h2>

            <p style={{ textAlign: "justify" }}>{profileDetails[0]?.bio}</p>
          </div>

          <div className="row ">
            <div className="col-md-5 text-center">
              <h5 className="fw-bold">Personal Details</h5>
              <p>
                {profileDetails[0]?.gender && <FontAwesomeIcon icon={faUser} />}{" "}
                {profileDetails[0]?.gender} {profileDetails[0]?.age}
              </p>
              <p>
                {profileDetails[0]?.phonenum && (
                  <FontAwesomeIcon icon={faMobile} />
                )}{" "}
                {profileDetails[0]?.phonenum}
              </p>
              <p>
                {profileDetails[0]?.education && (
                  <FontAwesomeIcon icon={faSchool} />
                )}{" "}
                {profileDetails[0]?.education}
              </p>
              <p>
                {profileDetails[0]?.location && (
                  <FontAwesomeIcon icon={faLocationDot} />
                )}{" "}
                {profileDetails[0]?.location}
              </p>
            </div>
            <div className="col-md-2 d-flex justify-content-around align-items-center">
              <div
                className="border bordered-dark"
                style={{
                  height: "100%",
                  width: "2px",
                  backgroundColor: "black",
                }}
              ></div>
            </div>
            <div className="col-md-5 text-center">
              <h5 className="fw-bold">Other Details</h5>
              <p>
                {profileDetails[0]?.language && (
                  <FontAwesomeIcon icon={faLanguage} />
                )}{" "}
                {profileDetails[0]?.language}{" "}
              </p>
              <p>
                {profileDetails[0]?.drinking && (
                  <FontAwesomeIcon icon={faWineGlass} />
                )}{" "}
                {profileDetails[0]?.drinking}
              </p>
              <p>
                {profileDetails[0]?.smoking && (
                  <FontAwesomeIcon icon={faSmoking} />
                )}{" "}
                {profileDetails[0]?.smoking}
              </p>
              <p>
                {profileDetails[0]?.relationship && (
                  <FontAwesomeIcon icon={faHeart} />
                )}{" "}
                {profileDetails[0]?.relationship}
              </p>
            </div>
          </div>

          <div className="mb-3 my-5 d-flex justify-content-around align-items-center">
            <Updateprofile data={profileDetails[0]}/>
            <Uploadfeed />
          </div>
        </div>
      ) : (
        <div className="w-100 p-5 ms-md-5 ">
          <div className="ms-md-5">
            <Editprofile />
          </div>
        </div>
      )}
    </>
  );
}

export default UserProfile;
