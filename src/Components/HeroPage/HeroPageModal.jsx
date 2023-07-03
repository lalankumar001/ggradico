
import React, { useState } from 'react';
import Modalimg from '../../assets/Modalimg.jpg'
import './HeroPageModal.css'

const HeroPageModal = () => {
    const [showPopup, setShowPopup] = useState(true);
    const handleClosePopup = () => {
        setShowPopup(false);
      };
    
      const handleSubmitForm = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    
        // After form submission, close the popup
        handleClosePopup();
      };
  return (
    <div>
      {showPopup && (
        <div className="homepage bg-white opacity-100 mt-5 p-5 rounded">
      <div className="container row">
       <span className='mx-5'>
        <button type="button" onClick={handleClosePopup}>
              X
            </button>
            </span>
        <div className="col">
       <img src={Modalimg} alt="img" width='100%'/>
        </div>
        <div className="col">
        <div className="popup-content">
          <h5>Popup Form</h5>
          <form onSubmit={handleSubmitForm}>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <br />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClosePopup}>
              Close
            </button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, placeat.</p>
          </form>
          </div>



          
        </div>
      </div>
      </div>
    )}
  </div>
);
};


export default HeroPageModal



{/* <div class="card">
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
</div>

 */}

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