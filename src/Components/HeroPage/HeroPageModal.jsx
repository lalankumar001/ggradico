import React, { useState } from "react";
import Modalimg from "../../assets/Modalimage.png";
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
        <div className="homepage opacity-100 p-3 rounded shadow">
          <div className="container row">
            <span className="text-end">
              <button type="button" onClick={handleClosePopup}>
                <span className="fs-5 p-2 bg-white rounded">
                  {" "}
                  <GrClose />
                </span>
              </button>
            </span>
            <h1 className="text-center text-white">
              Get In <b className="text-info">Touch</b> With Us
            </h1>
            <div className="col mt-2 ms-2">
              <div className="popup-content w-75">
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
                      <option selected>What's Your need ?</option>
                      <option value="1">Website Design</option>
                      <option value="2">Custom Website Development</option>
                      <option value="3">WordPress Web Development</option>
                      <option value="4">eCommerce Web Development</option>
                      <option value="5">Static / Dynamic Web Development</option>
                      <option value="6">Social Media Optimization</option>
                      <option value="7">Abroad Education Consultancy</option>
                    </select>
                  </div>
                  <div className="from-control my-2">
                    <textarea name="" id="exampleFormControlTextarea1" cols="33" rows="3" className="rounded" placeholder=" Message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-warning w-100 p-2">Submit</button>
                </form>
              </div>
            </div>
            <div className="col">
              <img src={Modalimg} alt="img" width="100%" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroPageModal;

{
  /* <div className="card">
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
</div>

 */
}

//  .card {
//   width: 210px;
//   height: 254px;
//   border-radius: 4px;
//   background: #212121;
//   display: flex;
//   gap: 5px;
//   padding: .4em;
// }

// .card p {
//   height: 100%;
//   flex: 1;
//   overflow: hidden;
//   cursor: pointer;
//   border-radius: 2px;
//   transition: all .5s;
//   background: #212121;
//   border: 1px solid #ff5a91;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .card p:hover {
//   flex: 4;
// }

// .card p span {
//   min-width: 14em;
//   padding: .5em;
//   text-align: center;
//   transform: rotate(-90deg);
//   transition: all .5s;
//   text-transform: uppercase;
//   color: #ff568e;
//   letter-spacing: .1em;
// }

// .card p:hover span {
//   transform: rotate(0);
// }
