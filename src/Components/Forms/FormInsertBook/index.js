import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useBook } from "../../../Context/books-context";

import './FormInsertBook.css';

function FormInsertBook() {

    const { setLoadFormBook, addBookToList } = useBook();

    const [inpNameBook, setInpNameBook] = useState("");
    const [inpGender, setInpGender] = useState("");
    const [inpLocation, setInpLocation] = useState("");

    return ReactDOM.createPortal(
        <div className="principal-modal">
            <div className="estilos-paneles principal">
                <label>Nombre Libro</label>
                <input onChange={(e)=>{setInpNameBook(e.target.value)}} value={inpNameBook} />
                <label> Genero </label>
                <input onChange={(e)=>{setInpGender(e.target.value)}} value={inpGender} />
                <label> Ubicacion </label>
                <input onChange={(e)=>{setInpLocation(e.target.value)}} value={inpLocation} />
                <div className="btnAniadir"><button onClick={() => { addBookToList(inpNameBook, inpGender, inpLocation) }}> Añadir Libro </button></div>
                <button onClick={() => { setLoadFormBook(false) }}> Cancelar </button>
            </div>
        </div>,
        document.getElementById('modal-addbook')
    );
}

export { FormInsertBook };