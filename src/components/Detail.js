import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const Home = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    const URL =
      "https://raw.githubusercontent.com/Didage/parcial1/master/data/datos.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setCarList(data);
      });
  }, []);

  const showDetail = (car) => {
    
  };

  return (
    <div>
      <h1>HOLAAA</h1>
      <Row>
        {carList.map((car) => (
          <div>
            <Col>
              <Card style={{ width: "18rem" }} onClick={showDetail(car)}>
                <Card.Img variant="top" src={car.image} />
                <Card.Body>
                  <Card.Title>{car.partName}</Card.Title>
                  <Card.Text>
                    <h5>{car.carMaker}</h5>
                    <p>{car.price}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        ))}
      </Row>
    </div>
  );
};
export default Home;
