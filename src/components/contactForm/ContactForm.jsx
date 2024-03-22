import { useState, useEffect } from "react";
import "./ContactForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    setFormData({
      name: "",
      contactNumber: "",
      email: "",
      message: "",
    });
  };

  return (
    <form className="new-form " onSubmit={handleSubmit}>
      <label>
        <span>Name:</span>
        <input
          type="text"
          className="form-control border border-primary"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        <span>Contact number:</span>
        <input
          type="text"
          className="form-control border border-primary"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
        />
      </label>

      <label>
        <span>Email</span>
        <input
          type="text"
          className="form-control border border-primary"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label>
        <span>Leave me messages</span>
        <input
          type="text"
          className="form-control border border-primary"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
