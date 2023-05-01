import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './PostForm.css';
import axios from 'axios'

class PostForm extends Component {
    state = { 
        name: '',
        age: '',
        species: '',
        image: '',
    }
    
    ageChangeHandler = (e) => {
        this.setState({age: e.target.value})    
    }
    nameChangeHandler = (e) => {
        this.setState({name: e.target.value})    
    }
    speciesChangeHandler = (e) => {
        this.setState({species: e.target.value})    
    }
    onImageChange = event => {
        this.setState({
            image: event.target.value
        });
    };
    
    
    addPetsHandler = (event) => {
        event.preventDefault(); //Evita que la página se actualice
        const petData = {
            name: this.state.name,
            age: this.state.age,
            species: this.state.species,
            image: this.state.image,
        };

        console.log('Enviando los siguientes datos: ', petData);
    
        axios({
            method: 'post',
            url: 'http://localhost:2002/api/pets/',
            data: petData,
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => {
            console.log('POST realizado correctamente:', response);
            this.props.updatePets();
            this.setState({
                name: '',
                age: '',
                species: '',
                image: '',
            });
        })
        .catch(error => {
            console.log('No se puede conectar a la API: ', error);
        });
    }
    

    render() { 
        return (
            <Form className='nueva' onSubmit={this.addPetsHandler}>
                <h2>Agregar Mascota:</h2>
                <h4>Nombre:</h4><input type='text' className='form-control' value={this.state.name} onChange={this.nameChangeHandler}/>
                <h4>Edad:</h4><input type='text' className='form-control' value={this.state.age} onChange={this.ageChangeHandler}/>
                <h4>Especie:</h4><input type='text' className='form-control' value={this.state.species} onChange={this.speciesChangeHandler}/>
                <h4>URL de la imagen:</h4><input type='text' className='form-control' value={this.state.image} onChange={this.onImageChange}/>
                <br />
                <Button className='botonsito' type='submit' variant='info'>Subir</Button>
            </Form>
        );
    }
}
export default PostForm;