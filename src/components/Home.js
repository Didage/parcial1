import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Detail from "./Detail";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";


const Home = (props) => {
  const {carList, setCarList} = props;
  const [selectedCar, setSelectedCar] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const URL =
      "https://raw.githubusercontent.com/Didage/parcial1/master/data/datos.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setCarList(data);
      });
  }, []);

  const goToDetail = () => {
    console.log(selectedCar);
    navigate(selectedCar);
  };

  return (
    <div>
      <Row>
        {carList.map((car) => (
          <div>
            <Col>
              <Card style={{ width: "18rem" }} onClick={() => {setSelectedCar(String(car.id)); goToDetail();}}>
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
