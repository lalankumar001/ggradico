import React, { useState } from "react";
import Modalimg from "../../assets/Modalbgimg.png";
import { GrClose, GrPhone } from "react-icons/gr";
import { FaUserTie } from "react-icons/fa";
import { ImMail2 } from "react-icons/im";
import "./HeroPageModal.css";

const HeroPageModal = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    alert("Thanks for Connecting with Us, Our team will be back to you very soon.");
    // Handle form submission logic here

    // After form submission, close the popup
    handleClosePopup();
  };
  return (
    <div>
      {showPopup && (
        <div className="homepagePopup  p-3 rounded shadow">
          <div className="container row Popup_close_btn">
            <span className="text-end ">
              <button type="button" onClick={handleClosePopup}>
                <span className="fs-5 p-2 bg-white shadow rounded">
                  {" "}
                  <GrClose/>
                </span>
              </button>
            </span>
            <h1 className="text-start">
              Get In <b className="text-info">Touch</b> With Us For <b className="text-danger">PR</b> and <b className="text-danger">Study Visa</b>
            </h1>
            <div className="col mt-2 ms-2">
              <div className="popup-content w-100">
                <form onSubmit={handleSubmitForm}>
                  <div className="input-group my-2 ">
                    <div className="input-group-text">
                      <FaUserTie />
                    </div>
                    <input
                      type="text"
                      className="form-control rounded"
                      id="inlineFormInputGroupUsername"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="input-group my-2">
                    <div className="input-group-text">
                      <GrPhone />
                    </div>
                    <input
                      type="number"
                      className="form-control rounded"
                      id="inlineFormInputGroupUsername"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="input-group my-2">
                    <div className="input-group-text">
                      <ImMail2 />
                    </div>
                    <input
                      type="email"
                      className="form-control rounded"
                      id="inlineFormInputGroupUsername"
                      placeholder="Email"
                      required
                      
                    />
                  </div>
                  <div>
                    <select className="form-select rounded" id="inlineFormSelectPref" required>
                      <option selected>Let's choose from here..</option>
                      <option value="1">PR Visa Services</option>
                      <option value="2">Global Education Consultancy</option>
                      <option value="3">Website Design and Development</option>
                      <option value="4">Travel Packages</option>
                      <option value="5">Static / Dynamic Web Development</option>
                      <option value="6">Social Media Optimization</option>
                    </select>
                  </div>
                  <div className="from-control my-2">
                    <textarea name="" id="" cols="37" rows="3" className="rounded PopupModal_message" placeholder=" Message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-warning w-100 p-2 mt-2">Submit</button>
                </form>
              </div>
            </div>
            <div className="col PopupModal_img">
              <img src={Modalimg} alt="img" width='620' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroPageModal;

