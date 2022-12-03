import React from "react";
import './PanelCentralModal.css'

function PanelCentralModal(props) {
    return (
        <div className="panel-principal estilos-paneles-principal">
            <div className="header-book">
                <span>Id</span>
                <span>nombre libro</span>
                <span>genero</span>
                <span>ubicacion</span>
            </div>
            {props.children}
        </div>
    );
}
export { PanelCentralModal };