export default function Popup(props) {
    let { popup, setPopup } = props;

    function closePopup() {
        setPopup(false)
    }

    let closeBtn = (
        <div >
            <button className="close-btn" onClick={closePopup}>close</button>
        </div>
    );

    return (
      <div className={`popup-container ${popup ? "" : "off"}`}>
        {popup === "purchase" && (
          <div className="popup-content">
            <div className="links">
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
            <form className="contact-form" action="submit">
              <label className="contact-section">
                name/email
                <input type="text" />
              </label>
              <label className="contact-section">
                message
                <input className="contact-body" type="text" />
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
