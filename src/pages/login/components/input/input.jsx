import React from 'react';
import './input.css';

const Input = ({ attribute, handleChange, param }) =>{
    return (
        <div>
            <input 
            //Se necesita que los atributos sean dinamicos
            id={attribute.id} 
            name={attribute.name} //temas de accesibilidad para trabajar con funciones dinamicas
            placeholder={attribute.placeholder}//Lo que siempre se ve, por ejemplo "Ingrese Usuario"
            type={attribute.type}
            onChange={(e) => handleChange(e.target.name, e.target.value)} //Manejador de Eventos
            className={ param ? 'input-error' : 'regular-style'}
            />
        </div>
    );
}

export default Input;