import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import UncontrolledExample from "./Carousel";
import NavBar from "./NavBar";
import Footer from "./Footer";
import About from "./About";
import SDG from './SuistainableDevelomentGoals'
export default function HowToUse(){
    const [text,settext]=useState()
  
    return(<div>
        <NavBar></NavBar>
        <div id="service">
        <div className="container-xxl position-relative">  
    <div class="container">
        <div class="row g-4">
        <h5 className="section-title ff-secondary text-start text-danger ">how to use the app "Ordear"</h5>
                <UncontrolledExample></UncontrolledExample>                     
        </div>
        </div>
        </div>
        </div>
        <About></About>
        <SDG></SDG>
        <Footer></Footer>
        </div>
        
    )
}