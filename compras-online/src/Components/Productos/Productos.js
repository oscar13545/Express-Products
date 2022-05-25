import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';


export default function Productos() {
  return(
    <Card>
    <Card.Header><h2>ID Producto: {spring.Productos.Id_Producto}</h2></Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={spring.Productos.Imagen} height="600"  width="600"/>
        <Card.Text>
          Nombre: <p>{spring.Productos.Nombre}</p>
          Descripcion: <p>{spring.Productos.Descripcion}</p>
          Precio: <p>${spring.Productos.Precio}.00</p>
          Categoria: <p>{spring.Productos.Categoria}</p>
          Color: <p>{spring.SKU.Color}</p>
          Tamaño: <p>{spring.SKU.Tamaño} cm</p>
          Peso: <p>{spring.SKU.Peso} kg</p>
          Catidad: <p>{spring.Inventario.Cantidad}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
