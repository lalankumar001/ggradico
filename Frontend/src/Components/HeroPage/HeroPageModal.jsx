import React, { useState } from "react";
import emailjs from "emailjs-com";
import Modalimg from "../../assets/HeroPageImg/poupupbgImg.jpeg";
import { GrClose, GrPhone } from "react-icons/gr";
import { FaUserTie, FaUserGraduate, FaCcVisa, FaUsers } from "react-icons/fa";
import { ImMail2 } from "react-icons/im";
import { BsPersonWorkspace } from "react-icons/bs";

import "./HeroPageModal.css";

const HeroPageModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    user_number: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_e5g7qiu";
    const templateID = "template_5l8knlm";
    const userID = "azlb9H78FvjVbmEpM";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Thank You for Reaching Out! Our Team Will Be in Touch Soon :", response);
        setFormData({
          name: "",
          user_number: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <div className="homepagePopup  p-1  w-75 rounded shadow">
          <div className="container row Popup_close_btn">
            <span className="text-end ">
              <button type="button" onClick={handleClosePopup}>
                <span className="fs-5 p-2 Popup_close">
                  {" "}
                  <GrClose />
                </span>
              </button>
            </span>
            <h1 className="text-center mb-2">
              Get In <b className="text-info">Touch</b> With Us For
            </h1>
            <div className="container text-center text-primary row">
              <div className="col ">
                <span>
                  <FaUserGraduate className="text-danger Abroad_edu" />{" "}
                  <b className="text-danger Abroad_text"> Abroad Education </b>
                </span>
              </div>
              <div className="col">
                <span>
                  <FaCcVisa className=" text-danger Abroad_edu" />{" "}
                  <b className="text-danger Abroad_text"> Student & Others Visa</b>
                </span>
              </div>
              <div className="col">
                <span>
                  <BsPersonWorkspace className="text-danger Abroad_edu" />{" "}
                  <b className="text-danger Abroad_text"> Work Permit </b>
                </span>
              </div>
              <div className="col">
                <span>
                  <FaUsers className="text-danger Abroad_edu" />{" "}
                  <b className="text-danger Abroad_text "> Immigiration </b>
                </span>
              </div>
            </div>
            <div className="col mt-2 ms-5">
              <div className="popup-content">
                <form onSubmit={handleSubmit}>
                  <div className="input-group my-2 ">
                    <div className="input-group-text">
                      <FaUserTie />
                    </div>
                    <input
                      type="text"
                      className="form-control rounded"
                      id="inlineFormInputGroupUsername"
                      required
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
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
                      name="user_number"
                      onChange={handleChange}
                      value={formData.user_number}
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
                      required
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="from-control">
                    <textarea
                      id="User_message"
                      cols="48"
                      rows="3"
                      className="rounded PopupModal_message"
                      required
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-warning w-100 p-2 mt-1"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col PopupModal_img">
              <img src={Modalimg} alt="img" width="520" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroPageModal;
