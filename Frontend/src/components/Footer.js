import {Container, Row, Col} from 'react-bootstrap';

const Footer = ()=> {
    return (
        <footer>
        <Container fluid>
          <Row className="mt-5">
            <Col className="bg-dark text-white text-center py-5">Copyright ©GlobalTrends:All rights reserved</Col>
          </Row>
        </Container>

        </footer>
        
      );
}
export default Footer;
