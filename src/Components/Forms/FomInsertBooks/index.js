import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useBook } from "../../../Context/books-context";
import './FormInsertBooks.css';

function FormInsertBooks() {
    const { setLoadFormLibrary, addBooksToList } = useBook();

    const [inpNombreLibreria, setInpNombreLibreria] = useState("");
    const [inpDescripcion, setInpDescripcion] = useState("");

    return ReactDOM.createPortal(
        <div className="principal-modal">
            <div className="estilos-paneles-principal panel-principal">
                <label >Nombre Libreria</label>
                <input value={inpNombreLibreria} onChange={(e) => { setInpNombreLibreria(e.target.value) }} />
                <label > Descripción </label>
                <input value={inpDescripcion} onChange={(e) => { setInpDescripcion(e.target.value) }} />
                <div className="btnAniadir" >
                    <button onClick={()=>{addBooksToList(inpNombreLibreria, inpDescripcion)}}> Añadir Libreria </button>
                    <button onClick={() => { setLoadFormLibrary(false) }}> Cancelar </button>
                </div>
            </div>
        </div>,
        document.getElementById('modal-addlibrary')
    );
}

export { FormInsertBooks };