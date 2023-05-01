import React from 'react';
import { Card } from 'react-bootstrap';
import './Pet.css';

const Pet = (props) => {
    return ( 
        <div className='Pet'>
            <div className='fila'>
                <div className='mascotita'>
                    <Card.Text>Nombre: {props.name}</Card.Text>
                    <Card.Text>Especie: {props.specie}</Card.Text>
                    <img src={props.image} width={270} height={200} alt=''></img>
                 </div>
            </div>
        </div>
     );
}

export default Pet;
