import { Button, TextareaAutosize, TextField } from "@mui/material";

import './../App.css'
import MuiPhoneNumber from 'material-ui-phone-number';
import { useState } from "react";
import { faFacebook, faGoogle, faTwitter,faPinterest } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer()
{
    const [value, setValue] = useState()
 return (
    <div id="footer">
    <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                                            </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-danger fw-normal mb-4">Contact</h4>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>Ordear@gmail.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-lg-square btn-secondary" href=""><i class="fab fa-twitter"></i></a><br></br>
                            <a class="btn btn-lg-square btn-secondary" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-lg-square btn-secondary" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-lg-square btn-secondary" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                                         </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-danger fw-normal mb-4">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div class="position-relative mx-auto" >
                            <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
 )
}