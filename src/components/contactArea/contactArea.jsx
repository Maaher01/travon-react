const ContactArea = () => {
  return (
    <>
      <div
        className="space-bottom"
        data-bg-src="/src/assets/img/bg/contact_bg_1.png"
      >
        <div className="container">
          <form
            action="mail.php"
            method="POST"
            className="contact-form ajax-contact"
          >
            <h3 className="form-title">Make An Appointment</h3>
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control style3"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
                <i className="fal fa-user" />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  className="form-control style3"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
                <i className="fal fa-envelope" />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="tel"
                  className="form-control style3"
                  name="number"
                  id="number"
                  placeholder="Phone Number"
                />
                <i className="fal fa-phone" />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control style3"
                  name="subject"
                  id="subject"
                  placeholder="Queary Topic"
                />
                <i className="fal fa-file-invoice" />
              </div>
              <div className="form-group col-12">
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={3}
                  className="form-control style3"
                  placeholder="Your Message"
                  defaultValue={""}
                />
                <i className="fal fa-pencil" />
              </div>
              <div className="form-btn col-12">
                <button className="ot-btn">Send Message Now</button>
              </div>
            </div>
            <p className="form-messages mb-0 mt-3" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
