import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup} from 'react-bootstrap';

export default function Cobros() {
  return(
<>
    <CardGroup>
  <Card>
  <Card.Header>ID Cobro: {spring.Ordenes.Id_Orden}</Card.Header>
    <Card.Body>
      <Card.Title>Express Products</Card.Title>
      <Card.Text>
        Producto: <p href="/Productos">{spring.Ordenes.Id_Producto}</p>
        Cliente: <p href="/Clientes">{spring.Ordenes.Id_Cliente}</p>
        Precio Total: <p>${spring.Ordenes.Precio}.00</p>
        Factura: <p>{spring.Ordenes.Factura}</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{spring.Ordenes.Fecha}</small>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Header>ID Cobro: {spring.Ordenes.Id_Orden}</Card.Header>
    <Card.Body>
      <Card.Title>Express Products</Card.Title>
      <Card.Text>
        Producto: <p href="/Productos">{spring.Ordenes.Id_Producto}</p>
        Cliente: <p href="/Clientes">{spring.Ordenes.Id_Cliente}</p>
        Precio Total: <p>${spring.Ordenes.Precio}.00</p>       
        Factura: <p>{spring.Ordenes.Factura}</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{spring.Ordenes.Fecha}</small>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Header>ID Cobro: {spring.Ordenes.Id_Orden}</Card.Header>
    <Card.Body>
      <Card.Title>Express Products</Card.Title>
      <Card.Text>
        Producto: <p href="/Productos">{spring.Ordenes.Id_Producto}</p>
        Cliente: <p href="/Clientes">{spring.Ordenes.Id_Cliente}</p>
        Precio Total: <p>${spring.Ordenes.Precio}.00</p>
        Factura: <p>{spring.Ordenes.Factura}</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{spring.Ordenes.Id_Orden}</small>
    </Card.Footer>
  </Card>
</CardGroup>
<br/>
<CardGroup>
  <Card>
  <Card.Header>ID Cobro: {spring.Ordenes.Id_Orden}</Card.Header>
    <Card.Body>
      <Card.Title>Express Products</Card.Title>
      <Card.Text>
        Producto: <p href="/Productos">{spring.Ordenes.Id_Cliente}</p>
        Cliente: <p href="/Clientes">{spring.Ordenes.Id_Cliente}</p>
        Precio Total: <p>${spring.Ordenes.Precio}.00</p>
        Factura: <p>{spring.Ordenes.Factura}</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{spring.Ordenes.Fecha}</small>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Header>ID Cobro: {spring.Ordenes.Id_Orden}</Card.Header>
    <Card.Body>
      <Card.Title>Express Products</Card.Title>
      <Card.Text>
        Producto: <p href="/Productos">{spring.Ordenes.Id_Producto}</p>
        Cliente: <p href="/Clientes">{spring.Ordenes.Id_Cliente}</p>
        Precio Total: <p>${spring.Ordenes.Precio}.00</p>
        Factura: <p>{spring.Ordenes.Factura}</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{spring.Ordenes.Fecha}</small>
    </Card.Footer>
  </Card>
  <Card>
  
  </Card>
</CardGroup>
</>
  );
}
