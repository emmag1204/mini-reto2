# Mini Reto 2

Esta es una pagina web en la que puedes agregar mascotas y ver las mascotas que ya has agregado.

Primero, debes ingresar al sitio web https://petsocial-front.herokuapp.com/. Si es la primera vez que lo visitas, tendrás que registrarte. Para hacerlo, busca el botón de "Log in" y sigue los pasos que te indiquen, proporcionando un usuario, y una contraseña segura.

Una vez que hayas ingresado tus datos de registro y hayas iniciado sesión en el sitio, podrás agregar mascotas. Para hacerlo, busca la opción "New Pet" y sigue los pasos que se te presenten. Se te solicitaran detalles como el nombre de tu mascota, su raza, su edad y una foto.

Una vez que hayas agregado una mascota, podrás verla en la pestaña "Home". Desde aquí, podrás ver todas las mascotas que se han agregado .

¡Y eso es todo! Ahora ya sabes cómo agregar mascotas y ver las mascotas que se han agregado en esta web. ¡Disfruta de la experiencia!
## API Reference

#### Get all items

```http
  GET /api/pets
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | Get all items in DB |

#### Get item

```http
 GET /api/pets/:owner_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` |  Id of item to fetch |

#### POST item

```http
 POST /api/pets
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name,age,species,img`      | `string` |  Insert a new pet |


#### DELETE item

```http
 DELETE /api/pets/:owner_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` |  Id of item to delete |




## Authors
Emma Gabriela Alfaro de la Rocha

Pablo Gutierrez Costales


