import React from "react";
import './PanelCentral.css'

function PanelCentral(props) {
   return (
      <div className="panel-principal estilos-paneles-principal">
         <div className="header-book">
            <span>Id</span>
            <span>Nombre Librería</span>
            <span>Descripción</span>
         </div>
         {props.children}
      </div>
   );
}
export { PanelCentral };