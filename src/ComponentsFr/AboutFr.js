import { useState } from "react";
import Partners from "../Components/Partners";

export default function About(){
    const [text,settext]=useState()
  
    return(
        <div id="about">
        <div className="container-xxl py-5">
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
                        <h5 className="section-title ff-secondary text-start text-danger ">a propos de nous</h5>
                        <h1 className="mb-4">Welcome to <i className="fa fa-utensils text-danger me-2"></i>Ordear</h1>
                        <p className="mb-4">solution cross-platforme (mobile/web) spesializé dans
                                            les services de restauration on a plusieures partenaires comme 
                                            restaurant chains,payment services   
                                            personalizer votre meal and commander , payer  dans quelques clicks
                                            </p> 
<p className="mb-4">why choose us?</p>
                        <p className="mb-4">Avec Ordear, vous pourrez économiser du temps et de l'argent en automatisant certaines tâches fastidieuses, telles que la gestion des commandes et des paiements. De plus, notre solution est sécurisée pour protéger vos données sensibles. En choisissant Ordear, vous choisissez un partenaire fiable pour votre entreprise de restauration</p> 
                        <p className="mb-4">Ordear, vous propose une solution innovante pour améliorer la qualité de votre service et la rapidité de vos commandes. Nous avons conçu notre application avec une interface intuitive et facile à utiliser pour vous permettre de gérer votre restaurant plus efficacement</p>
                        <p className="mb-4"></p>
                        <Partners></Partners>
                        <div className="row g-4 mb-4">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-danger px-3">
                                    <h1 className="flex-shrink-0 display-5 text-danger mb-0" data-toggle="counter-up">15</h1>
                                  
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-danger px-3">
                                    <h1 className="flex-shrink-0 display-5 text-danger mb-0" data-toggle="counter-up">50</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Popular</p>
                                        <h6 className="text-uppercase mb-0">Master Chefs</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div></div>
    )
}