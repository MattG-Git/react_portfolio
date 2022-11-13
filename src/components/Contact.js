import React, { useState } from 'react';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
    <div>
      <form 
      className="form" 
      onBlur={alertRequired}
      >
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleInputChange}
          required
        />
        <input
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email Address"
          required
        />
        <textarea
          className="form-control"
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="What's on your mind?"
          required
        ></textarea>
        <button className="btn btn-primary" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
