import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import About from "../ComponentsFr/AboutFr"

import {FaArrowCircleUp,FaArrowAltCircleDown} from 'react-icons/fa';
import NavBar from "../ComponentsFr/NavbarFr"
import Services from "../ComponentsFr/ServicesFr";
import Footer from "../Components/Footer";
import Products from "../ComponentsFr/ProductsFr";
export default function WelcomeFr()
{
    async function translate(){const res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
            q: "i went to the mall",
            source: "en",
            target: "es",
            format: "text",
            api_key: ""
        }),
        headers: { "Content-Type": "application/json" }
    });
    
    console.log(await res.json());}
    
   
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