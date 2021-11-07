import "./App.css";
import {Button} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Navbar, Nav, NavDropdown, Container, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <div className="Col1">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Fried Chicken</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Order</Nav.Link>
                <NavDropdown title="Our Product" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Popcorn
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Chicken65
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Korean</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="Head-Description">
        <h1 className="title-m">Order Your Fried Chicken</h1>
        <p>
          Discover the Fried chicken places near.Compare your options, then
          place your Fried chicken order online.
        </p>
      </div>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <div className="option-m">
            <Form.Label>Size</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </Form.Select>
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Special Instructions</Form.Label>
          <Form.Control type="text" placeholder="Enter Your instructions" />
        </Form.Group>

        <Button variant="primary" type="submit" className="sub-but">
          Send Order
        </Button>
      </Form>
    </div>
  );
}

export default App;
