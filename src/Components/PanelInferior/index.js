import React from "react";
import { useBook } from "../../Context/books-context";
import './PanelInferior.css'

function PanelInferior() {
    const {setLoadFormLibrary} = useBook();
   return (
    <div className="contain-btn-add-library">
        <button onClick={()=>{setLoadFormLibrary(true)}} className="btn_agregar">Agregar</button>
    </div>
   )
}
export { PanelInferior};