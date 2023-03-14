import Navbar from '../components/Navbar';

function Contact() {
  return (
    <div className="hex-bg-pattern contact overflow-handler">
      <Navbar />
      <h1 className="page-header center-text">Contact</h1>
      <div className="contact-div">
        <form action="">
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
              name="message-body"
              className="contact-field contact-message"
            />
          </div>
          <div className="contact-btn-div">
            <button type="submit" className="contact-btn contact-submit">
              Submit
            </button>
            <button type="reset" className="contact-btn contact-reset">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
