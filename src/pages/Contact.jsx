import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import SocialMedia from '../components/SocialMedia';

function Contact() {
  useEffect(() => {
    window.addEventListener('submit', (event) => {
      console.log(
        `===Contact===\n` +
          `Name: ${event.target.name.value}\n` +
          `Email: ${event.target.email.value}\n` +
          `Message: ${event.target.message.value}`
      );
      window.location.href = '/';
      event.preventDefault();
    });
  });

  return (
    <div className="hex-bg-pattern overflow-handler">
      <Navbar />
      <h1 className="page-header center-text">Contact</h1>
      <div className="contact-div">
        <div className="find-me-div">
          <p className="find-me-text">
            You can find me on LinkedIn and GitHub here:
          </p>
          <div className="contact-media-div center-text">
            <SocialMedia />
          </div>
        </div>
        <p className="find-me-text form-prompt">
          If you need to reach me personally, please contact me using the form
          (non-functioning) below:
        </p>
        <form>
          <div className="label-section">
            <label htmlFor="name" className="contact-label">
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="contact-field"
            />
          </div>
          <div className="label-section">
            <label htmlFor="email" className="contact-label">
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="contact-field"
            />
          </div>
          <div className="label-section msg-div">
            <label htmlFor="message" className="contact-label">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="contact-field contact-message"
            />
          </div>
          <div className="contact-btn-div">
            <input
              type="submit"
              className="contact-btn contact-submit"
              value="Submit"
            />
            <input
              type="reset"
              className="contact-btn contact-reset"
              value="Reset"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
