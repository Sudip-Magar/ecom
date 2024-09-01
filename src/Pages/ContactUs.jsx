import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-success">Contact Us</h2>
      <div className="row">
        <div className="col-md-6 my-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-control" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-control" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="form-control" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              ></textarea>
            </div>

            <button type="submit" className="btn btn-success mt-3">Submit</button>
          </form>
        </div>
        <div className="col-md-5 offset-lg-1 my-4">
          <h4 className='py-3'>Our Contact Information</h4>
          <p>Email: Spsuudeep730@gmail.com</p>
          <p>Phone: 9823564435</p>
          <p>Address: Teku, Kalimati</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
