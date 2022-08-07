import React from 'react';
import plusValues from "../data";

// créer une fonction qui render la totalité de l'array en fonction du type de données

const Title = (object) => {
    object.map((item, index) => (
        <h1 key={index}>item.title</h1>
    ))
}


const CheckBoxRendering = () => {

  return (
    <div>
        {Title(plusValues)}
    </div>
  )
}

export default CheckBoxRendering