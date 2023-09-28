import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

  return (
    <div>
      <h1>HOLAAA</h1>
      {carList.map((car) => (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={car.image} />
            <Card.Body>
              <Card.Title>{car.partName}</Card.Title>
              <Card.Text>
                <h5>{car.carMaker}</h5>
                <p>{car.price}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default Home;
