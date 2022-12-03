import React from "react";
import { useBook } from "../../Context/books-context";
import './PanelGridCentralModal.css'

function ItemBook(props) {
    return (<div className="item-book">
        <span>{props.id}</span>
        <span>{props.nombre_libro}</span>
        <span>{props.genero}</span>
        <span>{props.ubicacion}</span>
    </div>);
}
export { ItemBook };