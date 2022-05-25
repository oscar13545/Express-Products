import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Carousel} from 'react-bootstrap';
import './HomeExpress.css';
import Ima1 from  './1.jpg';
import Ima2 from  './2.jpg';
import Ima3 from  './3.jpg';

export default function HomeExpress() {
  return(
    <>
    <div class = "Information">
      
    <Card className="text-center" bg="dark">
      <Card.Body>
        <Card.Title><h2>Express Products</h2></Card.Title>
        <Card.Text>
        Es un aplicación de índole web, que su función se basa en llevar un registro de la manera fácil de los cobros que se han hecho y de los productos que cuenta, y en la cual se pueda llevar un control del mismo, ya que si un negocio tiene ya un sistema de cobros conectado a una base de datos, esta aplicación hace que pueda ver la información registrada.
        </Card.Text>
      </Card.Body>
    </Card>

    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Ima1} height="600"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>
  </>
  );
}
