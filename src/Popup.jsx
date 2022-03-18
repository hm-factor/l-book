export default function Popup(props) {
    let { popup, setPopup } = props;

    function closePopup() {
        setPopup(false)
    }

    let closeBtn = (
      <div>
        <button onClick={closePopup}>close</button>
      </div>
    );

    return (
        <div className={`popup-container ${popup ? "" : "off"}`}>
            {popup === "purchase" && (
                <div className="popup-content ">
                    <div className="links">
                        <a href="google.com">google</a>
                        <a href="amazon.com">amazon</a>
                        <a href="abebooks.com">abe</a>
                    </div>
                    {closeBtn}
                </div>
            )}
            {popup === "contact" && (
                <div>
                    contact
                    {closeBtn}
                </div>
            )}
        </div>
    );
}
