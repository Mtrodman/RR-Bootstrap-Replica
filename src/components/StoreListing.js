import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Badge } from 'react-bootstrap';

function Stores() {
    return (        <>
        <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center" }}>Choose your store in Kansas</h2>
        <Container>
            <Row>
                <Col>
                    <Badge bg="success" style={{width:"300px",height:"70px", margin:"5px", paddingTop:"10px"}}>
                    <h4>Sprouts Farmers Market</h4>
                     <p>Delivery & Pickup</p>
                    </Badge>{' '}

                </Col>
                <Col>
                    <Badge bg="success" style={{width:"300px",height:"70px", margin:"5px"}}>
                    <h4>Aldi</h4>
                    <p>Delivery & Pickup</p>
                    </Badge>{' '}
                </Col>
                <Col>
                    <Badge bg="success" style={{width:"300px",height:"70px", margin:"5px"}}>
                    <h4>Price Choppers</h4>
                    <p>Delivery & Pickup</p>
                    </Badge>{' '}
                </Col>
            </Row>
            <Row>
            <Col>
                    <Badge bg="success" style={{width:"300px",height:"70px", margin:"5px"}}>
                    <h4>The Wine Shop</h4>
                    <p>Delivery</p>
                    </Badge>{' '}
                </Col>
                <Col>
                    <Badge bg="success" style={{width:"300px",height:"70px", margin:"5px"}}>
                    <h4>Sunbasket</h4>
                    <p>Delivery</p>
                    </Badge>{' '}
                </Col>
                <Col>
                    <Badge bg="success" style={{width:"300px",height:"70px", margin:"5px"}}>
                        <h4>Meat Market</h4>
                    </Badge>{' '}
                </Col>
            </Row>
        </Container>
    </>
);
}

export default Stores