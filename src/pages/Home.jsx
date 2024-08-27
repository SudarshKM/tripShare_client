import React, { useContext, useEffect } from "react";
import Feedcard from "../components/Feedcard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Postfeed from "../components/Postfeed";
import { useState, lazy, Suspense } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Search from "../components/Search";
import { getAllPostApi, hostApi } from "../../server/allApi";
import { getAllHostApi } from "../../server/allApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { editResponseContext } from "../context/DataShare";
import Swal from 'sweetalert2'

/* const ComponentA = lazy(() => import('../components/Feedcard'));
const ComponentB = lazy(() => import('../components/Postfeed')); */

function Home() {
  const [component, setComponent] = useState("Feedcard");
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState(sessionStorage.getItem("userName"));
  const [allHostDetails, setAllHostDetails] = useState([]);
  const [allPostDetails, setAllPostDetails] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  // const [updated , setUpdated]=useState(false)

  const [hostDetails, setHostDetails] = useState({
    username: `${userName}`,
    title: "",
    startingpoint: "",
    destination: "",
    startdate: "",
    enddate: "",
    price: "",
    people: "",
    description: "",
  });
  // console.log(hostDetails);

  const { editResponse, setEditResponse } = useContext(editResponseContext);

  const handleClose = () => {
    setShow(false);
    handleClose1();
  };
  const handleShow = () => setShow(true);

  const handleButtonClick = (componentName) => {
    setComponent(componentName);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const {
      username,
      title,
      startingpoint,
      destination,
      startdate,
      enddate,
      price,
      people,
      description,
    } = hostDetails;
    if (
      !username ||
      !title ||
      !startingpoint ||
      !destination ||
      !startdate ||
      !enddate ||
      !price ||
      !people ||
      !description
    ) {
      // alert(`please fill the form completely`);
      Swal.fire({
        title: 'Wow!',
        text: 'please fill the form completely',
        icon: 'error',
      })
    } else {
      const result = await hostApi(hostDetails);
      // alert("successfully hosted a trip");
      Swal.fire({
        title: 'Wow!',
        text: 'successfully hosted a trip',
        icon: 'success',
        // confirmButtonText: 'Cool'
      })
      getAllHostDetails();

      setShow(false);
      setHostDetails({
        username: `${userName}`,
        title: "",
        startingpoint: "",
        destination: "",
        startdate: "",
        enddate: "",
        price: "",
        people: "",
        description: "",
      });
    }
  };

  const handleClose1 = () => {
    setHostDetails({
      username: `${userName}`,
      title: "",
      startingpoint: "",
      destination: "",
      startdate: "",
      enddate: "",
      price: "",
      people: "",
      description: "",
    });
  };

  const getAllHostDetails = async () => {
    const result = await getAllHostApi(searchKey);
    // console.log(result);
    setAllHostDetails(result.data.reverse());
  };

  const getAllPostDetails = async () => {
    const result = await getAllPostApi();
    // console.log(result.data);
    setAllPostDetails(result.data.reverse());
  };

  useEffect(() => {
    getAllHostDetails();
    setEditResponse(false);
  }, [searchKey, editResponse]);
  useEffect(() => {
    getAllPostDetails();
    setEditResponse(false);
  }, [editResponse]);

  return (
    <>
      <Header />
      <div className="row w-100">
        <div id="parent-hytcard" className="col-md-5 p-4 d-flex justify-content-center align-items-center bg-light rounded">
          <div
            className="hytcard card rounded d-flex justify-content-center align-items-center"
            id="hytcard"
          >
            <div className="">
              <h3 className="text-light"> </h3>
              <button
                className="btn btn-light w-100"
                variant="primary"
                onClick={handleShow}
              >
                Host a Trip
              </button>
            </div>
            <div>
              <button
                className="btn btn-light mt-3"
                onClick={() => handleButtonClick("Feedcard")}
                id="hytbutton"
              >
                Events
              </button>
            </div>

            <div>
              <button
                className="btn btn-light mt-3"
                onClick={() => handleButtonClick("Postfeed")}
                id="hytbutton"
              >
                Feed
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-md-7"
          id="homeleft"
          style={{ overflowY: "scroll", height: "100vh" }}
        >
          <div className="my-4 ">
            {/* <Search /> */}

            <div
              className="search d-flex justify-content-center p-md-2 shadow mt-2 rounded"
              style={{ border: "1px solid darkslateblue" }}
            >
              <input
                onChange={(e) => setSearchKey(e.target.value)}
                type="text"
                placeholder="Destination"
                className="m-2 rounded form-control"
              />
              {/* <button className='btn btn-info rounded-5 mx-3'><FontAwesomeIcon icon={faMagnifyingGlass} /></button> */}
            </div>
          </div>

          {component === "Feedcard" ? (
            allHostDetails ? (
              allHostDetails?.map((item) => <Feedcard trips={item} />)
            ) : (
              <p>No Trips Available</p>
            )
          ) : allPostDetails ? (
            allPostDetails?.map((item) => <Postfeed moment={item} />)
          ) : (
            <p>No Posts Available</p>
          )}
        </div>

        <Modal show={show} onHide={handleClose} size="md">
          <Modal.Header closeButton>
            <Modal.Title>It's your turn to show up!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center flex-column align-items-center">
            <div className="mb-3 w-100 d-flex justify-content-center flex-column align-items-center">
              <input
                type="text"
                placeholder="title"
                className="form-control w-100"
                onChange={(e) =>
                  setHostDetails({ ...hostDetails, title: e.target.value })
                }
                value={hostDetails.title}
              />
            </div>
            <div className="mb-3 d-flex justify-content-center align-items-center w-100">
              <input
                type="text"
                placeholder="Starting point"
                className="form-control me-2"
                value={hostDetails.startingpoint}
                onChange={(e) =>
                  setHostDetails({
                    ...hostDetails,
                    startingpoint: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Destination"
                className="form-control"
                onChange={(e) =>
                  setHostDetails({
                    ...hostDetails,
                    destination: e.target.value,
                  })
                }
                value={hostDetails.destination}
              />
            </div>
            <div className="mb-3 d-flex justify-content-center align-items-center w-100">
              <input
                type="date"
                placeholder="start date"
                className="form-control me-2"
                onChange={(e) =>
                  setHostDetails({ ...hostDetails, startdate: e.target.value })
                }
                value={hostDetails.startdate}
              />
              <input
                type="date"
                placeholder="end Date"
                className="form-control"
                onChange={(e) =>
                  setHostDetails({ ...hostDetails, enddate: e.target.value })
                }
                value={hostDetails.enddate}
              />
            </div>
            <div className="mb-3 d-flex justify-content-center align-items-center w-100">
              <input
                type="text"
                placeholder="Estd. Price in rupees"
                className="form-control me-2"
                onChange={(e) =>
                  setHostDetails({ ...hostDetails, price: e.target.value })
                }
                value={hostDetails.price}
              />
              <input
                type="text"
                placeholder="no.of people"
                className="form-control"
                onChange={(e) =>
                  setHostDetails({ ...hostDetails, people: e.target.value })
                }
                value={hostDetails.people}
              />
            </div>
            <div className="mb-3 w-100">
              <textarea
                name=""
                placeholder="Describe your trip"
                rows={5}
                className="form-control"
                onChange={(e) =>
                  setHostDetails({
                    ...hostDetails,
                    description: e.target.value,
                  })
                }
                value={hostDetails.description}
              ></textarea>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose1}>
              Discard
            </Button>
            <Button variant="success" onClick={handleAdd}>
              Host
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <Footer />
    </>
  );
}

export default Home;
