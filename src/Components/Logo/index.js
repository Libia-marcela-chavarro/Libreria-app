import React from "react";
import image from "../../Imagenes/Logo.1.png";
import './Logo.css'

function Logo() {
    return(
        <div className="Logo">
           <img src={image} id="Logo" />
        </div>
    );
   
}
export { Logo };