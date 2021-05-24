import PropTypes from 'prop-types';
import { useState } from 'react';

import {Card, Button, Form} from 'react-bootstrap';

/**
 * Renders the set dimensions panel.
 * @param {*} param0 
 * @return {ReactDOM}
 */
function SetDimensionsPanel({initialHeight, initialWidth, onDimensionsSet}) {
    const [height, setHeight] = useState(initialHeight);
    const [width, setWidth] = useState(initialWidth);
    const [isHeightValid, setIsHeightValid] = useState(true);
    const [heightValidationError, setHeightValidationError] = useState(null);
    const [isWidthValid, setIsWidthValid] = useState(true);
    const [widthValidationError, setWidthValidationError] = useState(null);

    /**
     * Validates the input
     * @param {number} input 
     * @return {string|null} string if is not valid, null if is valid
     */
    const validateInput = (input) => {
        const value = parseFloat(input);
        if (isNaN(value)) {
             return 'You should set this value';
        }
        else if (!Number.isInteger(value)) {
            return 'Only integer values are allowed';
        }
        else if (value <= 0) {
            return 'Value should be greater than zero';
        }
        else {
            return null;
        }
    }


    /**
     * Sets the height error
     * @param {string} msg 
     */
    const setHeightError = (msg) => {
        if (!msg) {
            setIsHeightValid(true);
            setHeightValidationError(null);
        } else {
            setIsHeightValid(false);
            setHeightValidationError(msg);
        }
    };

    /**
     * Sets the width error
     * @param {*} msg 
     */
    const setWidthError = (msg) => {
        if (!msg) {
            setIsWidthValid(true);
            setWidthValidationError(null);
        } else {
            setIsWidthValid(false);
            setWidthValidationError(msg);
        }
    };

    /**
     * Whenever the height value changes.
     * @param {*} evt 
     */
    const onHeightChange = (evt) => {
        const value = evt.target.value;
        setHeight(value);
        setHeightError(validateInput(value));
    }

    /**
     * Whenever the height value changes.
     * @param {*} evt 
     */
     const onWidthChange = (evt) => {
        const value = evt.target.value;
        setWidth(value);
        setWidthError(validateInput(value));
    }

    /**
     * Whenever the user clicks on the set dimensions button
     * @param {*} evt 
     */
    const onSetDimensionsButtonClick = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        
        // If height is not valid
        if (validateInput(height) !== null) { return; }

        // If width is not valid
        if (validateInput(width) !== null) { return; }

        // Notify parents element
        onDimensionsSet({
            height: parseInt(height),
            width: parseInt(width)
        });
    };


    return (
        <Card>
            <Card.Body>
                <Card.Title>Set the dimensions of the rover area</Card.Title>
                <Form>
                    <Form.Group controlId="height">
                        <Form.Label>Height</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder={height} 
                            defaultValue={height}
                            onChange={onHeightChange} 
                            isInvalid={!isHeightValid}/>
                        <Form.Text className="text-muted">
                            The height of the rover area
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            {heightValidationError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="width">
                        <Form.Label>Width</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder={width} 
                            defaultValue={width}
                            onChange={onWidthChange} 
                            isInvalid={!isWidthValid}/>
                        <Form.Text className="text-muted">
                            The width of the rover area
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            {widthValidationError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" onClick={onSetDimensionsButtonClick}>Set dimensions</Button>
                </Form>
            </Card.Body>
        </Card>
       
    );
}

SetDimensionsPanel.displayName = 'SetDimensionsPanel';
SetDimensionsPanel.propTypes = {
    onDimensionsSet: PropTypes.func.isRequired,
    initialWidth: PropTypes.number.isRequired,
    initialHeight: PropTypes.number.isRequired,
};

export default SetDimensionsPanel;