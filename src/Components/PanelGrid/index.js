import React from "react";
import './PanelGrid.css'

function PanelGrid(props) {
    return (
        <div className="PanelSecundario">
                {props.children}
        </div>
    );
}
export { PanelGrid };