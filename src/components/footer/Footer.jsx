import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <>
      <footer>
        <section id="ContactInfo">
          <div className="footer">
            <div className="sectionHeading">
              <h3 className="display-2 text-center">Contact Information</h3>
            </div>
            <div className="info container">
              <div className="row">
                <div className="col-md-6 text-left">
                  <h4>📞 Phone: (+44) 077xx xxxxxx</h4>
                  <h4>🏡Address: Rmxx, 1 Street, Birmingham B..xxx</h4>
                  <h4>
                    📧Email:<a href="mailto:abc@gmail.com"> abv@gmail.com</a>{" "}
                  </h4>
                </div>

                <div className="col-md-6 text-center">
                  <div id="subscription_area">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="subscribe_now">
                            <h4>Share your repo</h4>
                            <p>Get connected to our insights</p>
                            <form className="subscribe_form">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  style={{fontSize:"16px"}}
                                  name="email"
                                  placeholder="Enter your  Github user name"
                                ></input>
                                <span className="input-group-btn">
                                  <button
                                    className="btn btn-outline-warning"
                                    type="button"
                                  >
                                    Happy to share
                                  </button>
                                </span>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
