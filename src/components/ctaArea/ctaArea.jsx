const CtaArea = () => {
  return (
    <>
      <section className="" data-pos-for="#tour-sec" data-sec-pos="bottom-half">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30 mb-xl-0">
              <div
                className="offer-card"
                data-bg-src="/src/assets/img/bg/offer_bg_1.jpg"
              >
                <h2 className="offer-card__offer">45% OFF</h2>
                <h3 className="offer-card__text box-title">
                  Explore The World Tour Hotel Booking.
                </h3>
                <a href="contact.html" className="ot-btn">
                  Book Now
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="offer-card"
                data-bg-src="/src/assets/img/bg/offer_bg_2.jpg"
              >
                <h2 className="offer-card__offer">35% OFF</h2>
                <h3 className="offer-card__text box-title">
                  On Flight Ticket Grab This Now.
                </h3>
                <a href="contact.html" className="ot-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaArea;
