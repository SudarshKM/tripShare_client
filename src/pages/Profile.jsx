import React, { useContext, useEffect, useState } from "react";
import Feedcard from "../components/Feedcard";
import UserProfile from "../components/UserProfile";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Postfeed from "../components/Postfeed";
import { getAllHostApi, getAllPostApi } from "../../server/allApi";
import { editResponseContext } from "../context/DataShare";

function Profile() {
  const [allPostDetails, setAllPostDetails] = useState([]);
  const [userName, setUserName] = useState(sessionStorage.getItem("userName"));
  const [allHostDetails, setAllHostDetails] = useState([]);

  const { editResponse, setEditResponse } = useContext(editResponseContext);

  const getAllHostDetails = async () => {
    const result = await getAllHostApi();
    /*  console.log(result); */
    setAllHostDetails(result.data.reverse());
    // console.log(result);
  };

  const getAllPostDetails = async () => {
    const result = await getAllPostApi();
    /*  console.log(result); */
    setAllPostDetails(result.data.reverse());
    //  console.log(result);
  };

  useEffect(() => {
    getAllHostDetails();
    setEditResponse(false);
  }, [editResponse]);
  useEffect(() => {
    getAllPostDetails();
    setEditResponse(false);
  }, [editResponse]);

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <UserProfile />
          </div>
          <div
            className="col-md-7"
            style={{ overflowY: "scroll", height: "100vh" }}
          >
            <div className="container">
              <div>
                <Tabs defaultActiveKey="My Post" id="" className="my-3 ">
                  <Tab eventKey="My Activity" title="My Activity">
                    {allHostDetails.filter(
                      (item) => item.username == userName
                    ) ? (
                      allHostDetails
                        ?.filter((item) => item.username == userName)
                        .map((item) => <Feedcard trips={item} />)
                    ) : (
                      <p>No Posts Available</p>
                    )}
                  </Tab>
                  <Tab eventKey="My Post" title="My Post">
                    {allPostDetails.filter(
                      (item) => item.username == userName
                    ) ? (
                      allPostDetails
                        ?.filter((item) => item.username == userName)
                        .map((item) => <Postfeed moment={item} />)
                    ) : (
                      <p>No Posts Available</p>
                    )}
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
