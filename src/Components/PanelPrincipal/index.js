import React from "react";
import './PanelPrincipal.css'

function PanelPrincipal(props) {
    return (
        <div className="panelPrincipal">
            <h1 className="titulo-libreria">LIBRERIA CSMART</h1>
            {props.children}
        </div>
    );
}
export { PanelPrincipal };