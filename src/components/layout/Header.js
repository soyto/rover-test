import PropTypes from 'prop-types';
import cx from 'classnames';

import {Navbar} from 'react-bootstrap';

/**
 * Renders the header component
 * @return {ReactDOM}
 */
function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Rover test</Navbar.Brand>
        </Navbar>
    );
}

Header.displayName = 'Header';
Header.propTypes = {

};
export default Header;