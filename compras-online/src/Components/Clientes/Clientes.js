import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup} from 'react-bootstrap';

export default function Clientes() {
  return(
    <CardGroup>
    <Card>
    <Card.Header>ID Cliente: {spring.Clientes.Id_Cliente}</Card.Header>
      <Card.Body>
        <Card.Title>Express Products</Card.Title>
        <Card.Text>
          Nombre: <p>{spring.Clientes.Nombre}</p>
          Apellido: <p> {spring.Clientes.Apellido}</p>
          Edad: <p> {spring.Clientes.Edad}</p>
          Correo: <p> {spring.Clientes.Correo}</p>
          Telefono: <p> {spring.Clientes.Telefono}</p>
          Direccion: <p> {spring.Dirrecion.Calle}</p>
          Metodos de pago: <p> {spring.Metodo_de_pago.Tipos_de_pago}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
    <Card.Header>ID Cliente:  {spring.Clientes.Id_Cliente}</Card.Header>
      <Card.Body>
        <Card.Title>Express Products</Card.Title>
        <Card.Text>
        Nombre: <p>{spring.Clientes.Nombre}</p>
          Apellido: <p>{spring.Clientes.Apellido}</p>
          Edad: <p>{spring.Clientes.Edad}</p>
          Correo: <p>{spring.Clientes.Correo}</p>
          Telefono: <p>{spring.Clientes.Telefono}</p>
          Direccion: <p>{spring.Dirrecion.Calle}</p>
          Metodos de pago: <p>{spring.Metodo_de_pago.Tipos_de_pago}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </CardGroup>
  );
}
