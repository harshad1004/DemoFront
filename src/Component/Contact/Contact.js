import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const initialValue = { name: "", email: "", subject: "", message: "" };
  const [contact, setContact] = useState(initialValue);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
    //console.log(contact);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  
    axios
       .post("http://localhost:5000/api/contactUs", contact)
       .then((data) => {
          if(data.status) {
              alert();
              toast.success(data.data.message);
              console.log(data,"success");
              setContact(initialValue);
          }
       })
       .catch((err)  => {
          //console.log("catch", err.response.data);
          toast.error(err.response.data.Error);
       })
  };
  return (
    <>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Contact us</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end inner page section -->
      <!-- why section --> */}
      <section className="why_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="full">
                <form >
                  <fieldset>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      name="name"
                      required
                      value={contact.name}
                      onChange={handleInputChange}
                    />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      name="email"
                      required
                      value={contact.email}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="Enter subject"
                      name="subject"
                      required
                      value={contact.subject}
                      onChange={handleInputChange}
                    />
                    <textarea
                      placeholder="Enter your message"
                      required
                      name="message"
                      value={contact.message}
                      onChange={handleInputChange}
                    />
                  <button type="submit" onClick={(e) => submitHandler(e)}>
                     Submit
                  </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Contact;
