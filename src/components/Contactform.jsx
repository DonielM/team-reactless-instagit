

import '../styles/Contact.css';

function ContactForm() {
//   const [name, setTitle] =useState('')
//   const[tel, setTel]=useState('')
//   const[email,setEMail]=useState('')
return(
    <form className="new-form">
        <label>
          <span>Name:</span>
          <input type="text" />
        </label>


        <label>
          <span>Contact number:</span>
          <input type="text" />
        </label>
        <label>
          <span>Email</span>
          <input type="text" />
        </label>
        <label>
          <span>Leave me messages</span>
          <input type="text" />
        </label>
          <button>
          Submit
          </button>
      </form>
);
}

export default ContactForm;