import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

function UncontrolledExample() {
  return (
    <>
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='carouselitem1'
        itemId={1}
        height="600px"
        alt='...'
      >
        <h5 className='ktibat'>First Step</h5>
        <p className='ktiba'>Authentication in order to access our application services you will have to complete the sign up process</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='carouselitem2'
        itemId={2}
        height="600px"
       
        alt='...'
      >
        <h5 className='ktibat'>Enter Billing details</h5>
        <p className='ktiba'>to make payment process easier we offer you an option to register your credit card you can also skip this section if you want to pay cash</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='carouselitem3'
        itemId={3}
        height="600px"
     
        alt='...'
      >
           <h5 className='ktibat'>choose your meal</h5>
        <p className='ktiba'>after signing up and registering your billing details you can order you  favorite meal   </p>
        </MDBCarouselItem>
        <MDBCarouselItem
        className='carouselitem4'
        itemId={4}
        height="600px"
       
        alt='...'
      >
          <h5 className='ktibat'>wait for order approval</h5>
        <p className='ktiba'>now you will have to wait for your order . the orders manager will have to determine if your order is accepted or rejected depending on the availability of the meal chosen
        and you will be notified or emailed in both cases</p> 
      </MDBCarouselItem>
      <MDBCarouselItem
        className='carouselitem5'
        itemId={5}
      
       height='600px'
        alt='...'
      >
          <h5  className='ktibat'>wait for order</h5>
        <p className='ktiba'>now you will notified once your meal is ready for delivery</p> 
      </MDBCarouselItem>
    </MDBCarousel>
    </>
  );
}

export default UncontrolledExample;