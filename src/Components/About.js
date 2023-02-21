import { useState } from "react";
import Partners from "./Partners";

export default function About(){
    const [text,settext]=useState()
  
    return(
        <div id="about">
        <div className="container-xxl ">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="img/1.jpg"/>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="img/mobileapp.png" />
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="img/about-3.jpg"/>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="img/about-4.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h5 className="section-title ff-secondary text-start text-danger">About Us</h5>
                        <h1 className="mb-4">Welcome to Ordear</h1>
                        <p className="mb-4">we are an online cross-platform app (mobile/web) spesialized in 
restaurant services we have numerous trusted partners such us 
restaurant chains,payment services   
customize you meal and order , pay  it in a few clicks</p> 
<p className="mb-4">why choose us?</p>
                        <p className="mb-4">Ordear is an innovative solution to improve the quality of service and ensures faster ordering process .our interface makes it easier for the user to manage his own restaurant</p> 
                        <p className="mb-4">with ordear you can save your time and money thanks to an automated process such as orders management and payments besides ordear provides a secure solution to protect sensitive data .</p>
                        <p className="mb-4"></p>
                        <Partners></Partners>
                    </div>
                </div>
            </div>
        </div></div>
    )
}