import React from "react";
import { useBook } from "../../Context/books-context";
import './PanelGridCentral.css'

function ItemBooks(props) {
  const { setLoadModal, setBooksSelected } = useBook();

  const onclickSelectedBooks = (id) => {
    setLoadModal(true);
    console.log(id);
    setBooksSelected(id);
  }

  return (
    <div className="item-book" onClick={() => {onclickSelectedBooks(props.id)}}>
      <span>{props.id}</span>
      <span>{props.nombre_libreria}</span>
      <span>{props.descripcion}</span>
    </div>
  );
}
export { ItemBooks };