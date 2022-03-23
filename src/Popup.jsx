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
                        <a target="_blank" rel="noopener" href="google.com">this is a link</a>
                        <a target="_blank" rel="noopener" href="amazon.com">also a link</a>
                        <a target="_blank" rel="noopener" href="abebooks.com">not a link</a>
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
