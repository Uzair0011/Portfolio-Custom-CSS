import "./style.css";

export default function Contact() {
  return (
    <div className="first" id="Contact">
      <div className="map">
        <iframe
          className="ifrmeMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.278633353217!2d67.00983400867011!3d24.854331445414985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e0f140f7ec7%3A0x9deea907ba213923!2sPakistan%20Chowk%2C%20Saddar%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1730883902400!5m2!1sen!2s"
          width="700"
          height="500"
          loading="lazy"
        ></iframe>
      </div>
      <div className="textContact">
        <h1 className="contactHeading">Contact</h1>
        <form action="">
          <fieldset>
            <legend>Name</legend>
            <input
              className="form1"
              type="text"
              placeholder=" type your name"
            />
          </fieldset>
          {/* email */}
          <br />
          <fieldset>
            <legend>Email</legend>
            <input
              className="form1"
              type="email"
              placeholder=" type your email"
            />
          </fieldset>
          {/* message */}
          <br />
          <fieldset>
            <legend>Message</legend>
            <textarea
              className="form12"
              name="message"
              id="message"
              placeholder="type your message"
              rows={4}
              required
            ></textarea>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
