import PropTypes from 'prop-types';

import { useState } from 'react';
import { validateRoverInputs } from 'services';
import { Card, Button, Form } from 'react-bootstrap';

/**
 * Renders the rover input controls
 * @param {*} param0 
 */
function RoverInputControlsPanel({onAction}) {
    const [instructions, setInstructions] = useState('');
    const [areInstructionsValid, setAreInstructionValids] = useState(true);
    const [instructionErrors, setInstructionErrors] = useState(null);

    /**
     * Whenever the user attempts to send the instructions
     */
    const onSendInstructionsClick = () => {
        const errors = validateRoverInputs(instructions);

        if (errors.length > 0) {
            setAreInstructionValids(false);
            setInstructionErrors(errors);
        }
        else {
            setAreInstructionValids(true);
            setInstructionErrors(null);
            onAction({
                type: 'instructions',
                instructions: instructions.split('')
                    .filter(x => 'alr'.indexOf(x.toLowerCase()) >= 0)
                    .map(x => x.toUpperCase()),
            });
        }
    };

    /**
     * Whenever the user clicks on the reset position.
     */
    const onResetPositionClick = () => {
        onAction({
            type: 'reset-position'
        });
    };

    /**
     * Whenever the user clicks on reset dimensions.
     */
    const onResetDimensionsClick = () => {
        onAction({
            type: 'reset-dimensions'
        });
    }


    return (
        <Card>
            <Card.Body>
                <Card.Title>Input</Card.Title>

                <Form>

                    <Form.Group controlId="instructions">
                        <Form.Label>Instructions</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3}
                            onChange={evt => setInstructions(evt.target.value)}
                            isInvalid={!areInstructionsValid} />
                        <Form.Control.Feedback type="invalid">
                            {instructionErrors && (
                                <ul>
                                    {instructionErrors.map((x, i) => (<li key={i}>{x}</li>) ) }
                                </ul>
                            )}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <div className="d-flex justify-content-between">
                        <Button onClick={onSendInstructionsClick}>Send instructions</Button>
                        <Button variant="secondary" onClick={onResetPositionClick}>Reset position</Button>
                        <Button variant="outline-secondary" onClick={onResetDimensionsClick}>Reset dimensions</Button>
                    </div>
                    

                </Form>
            </Card.Body>
        </Card>
    );
}

RoverInputControlsPanel.displayName = 'RoverInputControlsPanel';
RoverInputControlsPanel.propTypes = {
    /**
     * Whenever the control panel wants to do an action
     */
    onAction: PropTypes.func.isRequired
};

export default RoverInputControlsPanel;