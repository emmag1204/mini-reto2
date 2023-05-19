const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

const corsOptions = {
  origin: '*', // Cambiar esto por la URL de tu aplicación frontend si deseas limitar las solicitudes
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));


app.use(express.json());

const connection = mysql.createConnection({

 
});

app.get('/', (req, res) => {
  res.send('PET SOCIAL');
});

app.get('/api/pets', (req, res) => {
  connection.query('SELECT * FROM pets', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error retrieving pets from database');
    } else {
      res.send(results);
    }
  });
});

app.put('/api/pets/:owner_id', (req, res) => {
  const owner_id = req.params.owner_id;
  const pet = {
    name: req.body.name,
    age: req.body.age,
    species: req.body.species,
    image: req.body.image,
  };
  connection.query('UPDATE pets SET ? WHERE owner_id = ?', [pet, owner_id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error updating pet in database');
    } else if (results.affectedRows === 0) {
      res.status(404).send('Pet not found');
    } else {
      pet.owner_id = owner_id;
      res.send(pet);
    }
  });
});

app.post('/api/pets', (req, res) => {
    const pet = {
      name: req.body.name,
      age: req.body.age,
      species: req.body.species,
      image: req.body.image,
    };
    connection.query('INSERT INTO pets (name, age, species, image) VALUES (?, ?, ?, ?)', 
    [pet.name, pet.age, pet.species, pet.image], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error inserting pet into database');
        } else {
            const newPet = {...pet};
            res.send(newPet);
        }
    });
  });
  

app.delete('/api/pets/:owner_id', (req, res) => {
  const owner_id = req.params.owner_id;
  connection.query('DELETE FROM pets WHERE owner_id = ?', owner_id, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error deleting pet from database');
    } else if (results.affectedRows === 0) {
      res.status(404).send('Pet not found');
    } else {
      res.send(`Pet with owner_id ${owner_id} deleted`);
    }
  });
});

const port = process.env.PORT || 2002;
app.listen(port, () => console.log(`Listening on port ${port}...`));
