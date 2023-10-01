import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./Detail.css";

const Detail = (props) => {
  const { carList, setCarList } = props;
  const params = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    const URL =
      "https://raw.githubusercontent.com/Didage/parcial1/master/data/datos.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setCarList(data);
        setCar( carList.find((car) => car.id === Number(params.id)));
      });
  }, []);



  return (
    <div>
      <Row>
        <Col>
          <img variant="top" src={car.image} alt="Part" />
        </Col>
        <Col>
          <h1>{car.partName}</h1>
          <hr className="solid"></hr>
          <table>
            <tbody>
              <tr>
                <th className="category">Car Maker</th>
                <th>{car.carMaker}</th>
              </tr>
              <tr>
                <th className="category">Car Model</th>
                <th>{car.carModel}</th>
              </tr>
              <tr>
                <th className="category">Car Year</th>
                <th>{car.carYear}</th>
              </tr>

              <tr>
                <th className="category">Available offline</th>
                <th>
                  {car.available && <p>Yes</p>}
                  {!car.available && <p>No</p>}
                </th>
              </tr>
              <tr>
                <th className="category">Price</th>
                <th>{car.price}</th>
              </tr>
              <tr>
                <th className="description" colSpan="2">
                  <h4 className="category">Description</h4>
                  <p>{car.description}</p>
                </th>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );
};
export default Detail;
