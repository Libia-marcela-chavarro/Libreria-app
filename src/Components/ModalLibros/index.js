import React from "react";
import ReactDOM from "react-dom";
import './ModalLibros.css'

function ModalLibros(props) {
    return ReactDOM.createPortal(
        <div className="principal-modal">
            {props.children}
        </div>,
        document.getElementById('modal')
    );
}
export { ModalLibros };