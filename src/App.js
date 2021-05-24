
import { Header, Title } from 'components/layout';

import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

/**
 * Application component
 * @return {ReactDOM}
 */
function App() {
  return (
    <>
    <Header />
    <Container fluid>
      <Row>
        <Col>
          <Title title="Rover test" />
        </Col>
      </Row>
      <Row>
        <Col>
          Here the user will produce the input, so this should be a panel.
        </Col>
        <Col>
          Here the output should be done.
        </Col>
      </Row>
    </Container>
    </>
  );
}

App.displayName = 'App';
App.propTypes = {

};
export default App;
