import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Popup(props) {
	const form = useRef()
    let { popup, setPopup } = props;

    function closePopup() {
        setPopup(false)
    }

    let closeBtn = (
        <div >
            <button className="close-btn" onClick={closePopup}>close</button>
        </div>
    );

		function sendEmail(e) {
			e.preventDefault();

			emailjs
        .sendForm(
          "service_4dz4pbo",
          "template_jjk0hgk",
          form.current,
          "FN0kgaiyoK4JrPv1h"
        )
        .then(
          (res) => {
            console.log(res.txt);
          },
          (error) => {
            console.log(error.text);
          }
        );
		}

    return (
      <div className={`popup-container ${popup ? "" : "off"}`}>
        {popup === "purchase" && (
          <div className="popup-content">
            <div className="links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bookshop.org/books/soon-i-ll-be-from-the-soil-someday-essays-on-plants-and-loss/9780578390802"
              >
                Bookshop
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.barnesandnoble.com/w/soon-ill-be-from-the-soil-someday-eleanor-amicucci/1141262741?ean=9780578390802"
              >
                Barnes & Noble
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.amazon.com/dp/0578390809?tag=bookfinder-test-b2-20&linkCode=osi&th=1&psc=1&language=en_US&selectObb=new"
              >
                Amazon
              </a>
            </div>
            {closeBtn}
          </div>
        )}
        {popup === "contact" && (
          <div className="popup-content contact-content">
            <form ref={form} className="contact-form" onSubmit={sendEmail} >
              <label className="contact-section">
                name
                <input type="text" name="name" />
              </label>
              <label className="contact-section">
                email
                <input type="email" name="email" />
              </label>
              <label className="contact-section">
                message
                <textarea className="contact-body" name="body" />
              </label>
              <button type="submit" className="send-btn">
                Send!
              </button>
            </form>
            {closeBtn}
          </div>
        )}
      </div>
    );
}
