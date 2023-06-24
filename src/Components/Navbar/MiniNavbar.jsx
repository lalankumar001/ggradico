import React from 'react'
import {FaSearchLocation,FaDonate} from "react-icons/fa";
import { MdOutlineComputer, MdOutlineDiversity2,MdOutlinePhonelink } from "react-icons/md";

const MiniNavbar = () => {
  return (
    <div>
        <div className='w-100'>
                <ul className="nav nav-pills nav-fill gap-2 small bg-dark container rounded-5 shadow-sm" id="pillNav2" role="tablist">
        <li className="nav-item" role="presentation">
            <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true"> <span className='fs-4'><MdOutlineDiversity2 /></span> Digital Marketing</button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false"><span className='fs-4'><FaSearchLocation /></span> Social Media Marketing</button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false"><span className='fs-4'><FaDonate /></span> Pay Per Click</button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false"><span className='fs-4'><MdOutlineComputer /></span> Website Development</button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false"><span className='fs-4'><MdOutlinePhonelink /></span> Website Design</button>
        </li>
        </ul>
        </div>
    </div>
  )
}

export default MiniNavbar