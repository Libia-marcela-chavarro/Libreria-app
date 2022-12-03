import React from "react";
import { useBook } from "../../Context/books-context";
import './PanelModalPrincipal.css'

function PanelModalPrincipal(props) {
    const { setLoadModal } = useBook();
    return (
        <div className="modalPrincipal">
            <button className="cerrar" onClick={() => { setLoadModal(false) }}>X</button>
            {props.children}
        </div>
    );
}
export { PanelModalPrincipal };