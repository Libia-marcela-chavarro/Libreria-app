import React from "react";
import { useBook } from "../../Context/books-context";
import './PanelBusqueda.css'

function PanelBusqueda() {

    const { searchBooks, setSearchBooks } = useBook();

    return (
        <div className="pnl-contain">
            <div className="pnl1">
                <span className="buscador">Buscar</span>
            </div>
            <div className="pnl2">
                <input onChange={(e) => { setSearchBooks(e.target.value) }} className="visor" value={searchBooks} type="text" id="0" />
            </div>
        </div>
    );
}

export { PanelBusqueda };