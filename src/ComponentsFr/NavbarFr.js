
import ukFlag from '../Components/uk.png';
import frFlag from '../Components/fr.png';
export default function NavBar()
{
    return (
    
      <div class="container-xxl position-relative">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-8 px-lg-5 py-3 py-lg-0 ">
          <a href="" class="navbar-brand p-0">
              <h1 class="text-danger m-0"><img src="img/Logo.png"/>Ordear</h1>
             
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span class="fa fa-bars"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav ms-auto py-0 pe-4">
                  <a href="#index" class="nav-item  nav-link active">Home</a>
                  <a href="#about" class="nav-item nav-link">About</a>
                  <a href="#service" class="nav-item nav-link">Service</a>
                  <a href="#SDG" class="nav-item nav-link">SDG</a>
                  <div class="nav-item dropdown">
                      <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">choose language</a>
                      <div class="dropdown-menu m-0">
                          <a href="/welcome" class="dropdown-item"><img src={ukFlag} width="80px" height="40px"></img>EN</a>
                          <a href="/welcomeFr" class="dropdown-item"><img src={frFlag} width="100px" height="40px"></img>FR</a>     
                      </div>
                  </div>
                  <a href="#footer" class="nav-item nav-link">Contact</a>
              </div>
          </div>
      </nav>
      <div class="container-xxl py-5 mx-0 bg-white hero-header mb-2">
          <div class="container my-5 py-5 mx-0 ">
              <div class="row align-items-center ">
                  <div class="col-lg-6 text-center text-lg-start">
                      <h1 class="display-3 text-white animated slideInLeft">Bienvenue<br></br>dans notre site officiel</h1>
                      <p class="text-white animated slideInLeft mb-4 pb-2">L'une des meilleures platform en-ligne de restauration</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
 )
}