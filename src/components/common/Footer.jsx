import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Medical Center</h5>
            <p>Providing quality healthcare services since 1995</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light">Home</Link></li>
              <li><Link to="/services" className="text-light">Services</Link></li>
              <li><Link to="/doctors" className="text-light">Doctors</Link></li>
              <li><Link to="/contact" className="text-light">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li>123 Medical Center Drive</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@medicalcenter.com</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Medical Center. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;