import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contacts = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
    to_name : "Dattaprasad"
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
    // EmailJS configuration
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    // Send email using EmailJS
    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert('Mail sent successfully!');
      }, (err) => {
        console.error('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });
    
    // Reset form fields
    setFormData({
      from_name: '',
      from_email: '',
      subject: '',
      message: '',
      to_name: 'Dattaprasad'
    });
  };
  return (
    <div className='md:flex md:flex-col md:items-center md:justify-start min-h-screen dark:bg-gray-800 text-black dark:text-white overflow-auto'>
      <div className="md:w-2/3 p-2 dark:bg-gray-800 rounded shadow-md bg-slate-50">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="from_name">Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder='Your Name'
                value={formData.from_name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="from_email">Email</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                placeholder='yourmailid@gmail.com'
                value={formData.from_email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder='Want to discuss to build a project'
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder='Looking for proficient software developer skilled in backend development, React and system design etc.'
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
      </div>
    </div>
  );
};

export default Contacts;