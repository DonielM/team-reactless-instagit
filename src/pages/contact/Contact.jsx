import "./Contact.css";
import Footer from "../../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import ContactForm from "../../components/contactForm/ContactForm.jsx";

function Contact() {
  return (
    <>
      <div className="header-contact">
        <div className="container-build py-5 inner-header flex">
          <h1>Share your REPO !!</h1>
          <h1>Get connected to our insights</h1>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
