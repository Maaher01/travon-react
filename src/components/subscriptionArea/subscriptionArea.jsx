const SubscriptionArea = () => {
  return (
    <>
      <section
        className=" "
        data-pos-for=".footer-wrapper"
        data-sec-pos="bottom-half"
        style={{ paddingBottom: "3rem" }}
      >
        <div className="container">
          <div
            className="newsletter-wrap"
            data-bg-src="/src/assets/img/bg/subscribe_bg_1.svg"
          >
            <h2 className="sec-title text-white mb-2">
              Get Special Offers And More From Travon
            </h2>
            <p className="text-white fs-md mb-4">
              Sign up now and get the best deals straight in your inbox!
            </p>
            <form className="newsletter-form">
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email Address"
                  required=""
                />
                <i className="fal fa-envelope" />
              </div>
              <button type="submit" className="ot-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubscriptionArea;
