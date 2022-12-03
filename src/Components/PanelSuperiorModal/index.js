import React from "react";
import { useBook } from "../../Context/books-context";
import './PanelSuperiorModal.css'

function PanelSuperiorModal() {
    const {searchBook, setSearchBook} = useBook();
    return (
        <div className="pnl-contain">
            <div className="pnl1">
                <span className="buscador">Buscar</span>
            </div>
            <div className="pnl2">
                <input onChange={(e)=>{setSearchBook(e.target.value)}} value={searchBook} className="visor" type="text" id="0" />
            </div>
        </div>
    );

}
export { PanelSuperiorModal};