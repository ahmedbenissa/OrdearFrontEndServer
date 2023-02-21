import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import About from "../Components/About"

import {FaArrowCircleUp,FaArrowAltCircleDown} from 'react-icons/fa';
import NavBar from "../Components/NavBar"
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import SDG from "../Components/SuistainableDevelomentGoals";
import HowToUse from "../Components/HowToUse";

export default function Welcome()
{
 const [showScroll, setShowScroll] = useState(false)

     const checkScrollTop = () => {
       if (!showScroll && window.pageYOffset > 400){
         setShowScroll(true)
       } else if (showScroll && window.pageYOffset <= 400){
         setShowScroll(false)
       }
     };
     const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };
      const scrollDown = () =>{
        window.scrollTo({top: 1850, behavior: 'smooth'});
      };
    
      window.addEventListener('scroll', checkScrollTop)
    return (
       <div> 
<NavBar></NavBar>
<About></About>
<Services></Services>
<SDG></SDG>

<Footer></Footer>
<FaArrowCircleUp 
   className="scrollTop" 
   onClick={scrollTop} 
   style={{height: 40}}
/>
<FaArrowAltCircleDown 
   className="scrollDown" 
   onClick={scrollDown} 
   style={{height: 40}}
/>





</div>
        
    )
}