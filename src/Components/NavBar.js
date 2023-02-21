import ukFlag from './uk.png';
import frFlag from './fr.png';
export default function NavBar()
{
    return (
    
      <div class="container-xxl position-relative">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-8 px-lg-5 py-3 py-lg-0 ">
          <a href="" class="navbar-brand p-0">
              <h1 class="text-danger m-0"><img src="img/Logo.png"/></h1>
             
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span class="fa fa-bars"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav ms-auto py-0 pe-4">
                  <a href="#index" class="nav-item  nav-link active">Home</a>
                  <a href="#about" class="nav-item nav-link">About</a>
                
                  <a href="#service" class="nav-item nav-link">How to use the app</a>
                  <a href="#SDG" class="nav-item nav-link">SDG</a>
                 

                  <a href="#footer" class="nav-item nav-link">Contact</a>
                  <a href="/" class="nav-item nav-link"><img src={ukFlag} width="80px" height="40px"/></a>
                  <a href="/welcomeFr" class="nav-item nav-link"><img src={frFlag} width="80px" height="40px"/></a>
              </div>
          </div>
      </nav>
      <div class="container-xxl py-5 mx-0 bg-white hero-header mb-2">
          <div class="container my-5 py-5 mx-0 ">
              <div class="row align-items-center ">
                  <div class="col-lg-6 text-center text-lg-start">
                      <h1 class="display-3 text-white animated slideInLeft">Welcome<br></br>to our official website</h1>
                      <p class="text-white animated slideInLeft mb-4 pb-2">one of leading platforms for restauration services since 2020 Ordear has been one of the trending platforms for restaurant services
                      with over 2M+ users across canada and the united states this is due to the flexibility of the application we ensure that our app  operates within an immediate time frame to achieve better service and receive better ratings </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
 )
}