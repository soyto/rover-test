import PropTypes from 'prop-types';
import cx from 'classnames';
import { prefix } from 'helpers/constants';
import {useEffect} from 'react';


/**
 * Renders the title
 * @param {*} param0 
 * @return {ReactDOM}
 */
function Title({title}) {

    useEffect(() => {
        window.document.title = title;
    });

    return (
        <h1 className={cx(`${prefix}page-title`)}>{title}</h1>
    )
};


Title.displayName = 'Title';
Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;