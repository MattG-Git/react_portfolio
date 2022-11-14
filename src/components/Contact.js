import React, { useState } from 'react';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
// I should try changing the onChange events to onBlur events for each input field and adding a second layer of boolean logic to check if the value === an empty string. Remove from the general form element.
  const handleInputChange = (e) => {
    switch(e.target.name) { 
      case name:
        setName(e.target.value)
        break; 
      case email:
        setEmail(e.target.value)
        break;
      case message:
        setMessage(e.target.value)
        break; 
      default: 
        return;
    }
    console.log(this.name)
  };

  const alertRequired = (e) => {
    e.preventDefault(); 
    if (name){ 
      alert('all fields are required'); 
    } return; 
  }; 

  const handleFormSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="container mt-5 mb-5">
      <h1>Contact Me</h1>
      <form 
      className="form " 
      onBlur={alertRequired}
      >
        <div className="row mb-3">
          <label className="form-label">Name:</label>
          <input 
            name="name"
            type="text"
            placeholder="John Smith"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="row mb-3">
          <label className="form-label">Email Address: </label>
          <input 
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Sample@gmail.com"
            required
          />
        </div>
        <div className="form-control form-control-lg row">
          <label className="form-label">Message: </label>
          <textarea
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="What's on your mind?"
            required> 
          </textarea>
        </div>
        <button className="btn btn-success mt-4" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
