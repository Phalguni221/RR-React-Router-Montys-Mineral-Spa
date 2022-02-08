import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


function App() {
  
  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']


  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>
            <Container>
              <Nav defaultActiveKey="/" variant="tabs" fill>
                <ul>
                  <Nav.Item>
                    <Nav.Link href="/">
                  <Link to="/">Home</Link>
                  </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="about">
                  <Link to="/about">About Us</Link>
                  </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/packages">
                  <Link to="/packages">Our Packages</Link>
                  </Nav.Link>
                  </Nav.Item>
                </ul>
                </Nav>
                <>
                <Button variant="primary" onClick={handleShow}>
                  Cick here to see special message!
                </Button>
          
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                   Come to our SPA!!! (to close this message. click either "Close" or "Understood")
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                  </Modal.Footer>
                </Modal>
              </>
            );
            </Container>
            </header>
          

        <div className="display">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/packages" render={() => <Packages packages={packages}/>}  />
        </div>

      </Router>

    </div>
  );
}

export default App;





