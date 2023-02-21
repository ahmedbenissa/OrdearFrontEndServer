import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import About from "./About"

import {FaArrowCircleUp,FaArrowAltCircleDown} from 'react-icons/fa';
import NavBar from "./NavBar"
import Services from "./Services";
import Footer from "./Footer";
import Products from "./Products";
export default function Header()
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
<Products></Products>
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