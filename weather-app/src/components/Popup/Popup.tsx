import './Popup.css'

// TODO - tidy up the popup box: get the close button working, get the ok button positioned and styled, get the text styled.
const Popup = (props:any) => {
    return (
        <div className="popup-window">
            
        <div className="popupVisible">
            <div className="popup-navbar">
                <button className="popup-navbar-button">X</button>
            </div>
                <h3>This place doesnt exist.</h3>
                <button onClick={props.opacity}>OK</button>
            </div>
        </div>
    )
}

export default Popup;