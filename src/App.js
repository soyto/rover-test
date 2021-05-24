
import { Header, Title } from 'components/layout';
import {RoverControlPanel} from 'components';

import {
  Container
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
      <Title title="Rover test" />
      <RoverControlPanel />
    </Container>
    </>
  );
}

App.displayName = 'App';
App.propTypes = {

};
export default App;
