import HowToUse from "./HowToUse";

export default function Services()
{
    return (
        <div id="service">
    <div class="container-xxl py-5">
    <div class="container">
        <div class="row g-4">
        <h5 className="section-title ff-secondary text-start text-danger ">How to use the app</h5>
        
           
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="service-item rounded pt-3">
                    <div class="p-4">
                        <i class="fa fa-3x fa-lock text-danger mb-4"></i>
                        <h5>Authentication </h5>
                        <p>Authentication in order to access our application services you will have to complete the sign up process</p>
                    </div>
                </div>
            </div>
           
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="service-item rounded pt-3">
                    <div class="p-4">
                        <i class="fa fa-3x fa-credit-card text-danger mb-4"></i>
                        <h5>Choose payment method</h5>
                        <p>to make payment process easier we offer you an option to register your credit card you can also skip this section if you want to pay cash</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="service-item rounded pt-3">
                    <div class="p-4">
                        <i class="fa fa-3x fa-bell text-danger mb-4 mb-4"></i>
                        <h5>Ordering and FeedBack</h5>
                        <p>now you can order you  favorite meal and recieve a notification about the status of your order</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="service-item rounded pt-3">
                    <div class="p-4">
                        <i class="fa fa-3x fa-headset text-danger mb-4 mb-4"></i>
                        <h5>Payment</h5>
                        <p>once your meal is ready for delivery you can proceed to payment with either your credit card or cash </p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div></div>)
}