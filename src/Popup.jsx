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
                        <a target="_blank" rel="noopener" href="google.com">link 1</a>
                        <a target="_blank" rel="noopener" href="amazon.com">link 2</a>
                        <a target="_blank" rel="noopener" href="abebooks.com">link 3</a>
                    </div>
                    {closeBtn}
                </div>
            )}
            {popup === "contact" && (
                <div className="popup-content">
                    <div className="">

                    </div>
                    {closeBtn}
                </div>
            )}
        </div>
    );
}
