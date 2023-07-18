import React from 'react'
import PackageImg from '../../assets/Package.png'
import {
    BsUsbC,BsArrowRight,
  } from "react-icons/bs";
import './Package.css'

const Package = () => {
  return (
    <div className='Package_bg'>
        <div className="p-5">
            <div className="row Package">
                <div className="col">
                    <div className="Package_heading">
                 <h3>" Unlock a world of possibilities with our exclusive package deals."</h3>
                 <span className='btn btn-danger w-50 mt-5 p-2'>Our Packages &nbsp; <BsArrowRight className='fs-2 fw-bold' /></span>
                </div>
                </div>
                <div className="col Package_img" >
                    <img src={PackageImg} alt="PackageImg" width="100%" height="100%"/>
                </div>
            </div>
            <br />
            <h1 className="fs-1 fw-bold text-center text-dark"><BsUsbC/></h1>
            <h1 className='text-center'>PACKAGES</h1>
            <div className="row">
                <div className="col card">
                <div class="card_Package">
      <div class="Package_content">
        <div class="Package_title">Personal edition</div>
        <div class="Package_price">$39.99</div>
        <div class="Package_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
      </div>
        <button>
          Buy now
        </button>
  </div>
                </div>
                <div className="col card">a</div>
                <div className="col card">a</div>
            </div>
        </div>
    </div>
  )
}

export default Package