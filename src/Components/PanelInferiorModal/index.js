import React from "react";
import { useBook } from "../../Context/books-context";
import './PanelInferiorModal.css'

function PanelInferiorModal() {

    const { setLoadFormBook } = useBook();
    return (
        <div className="contain-btn-add-boock">
            <button onClick={() => { setLoadFormBook(true) }} className="btn_Agregar">Agregar</button>
        </div>
    )
}
export { PanelInferiorModal };