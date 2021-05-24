import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { parseRoverInstruction } from 'services';
import { Card, ListGroup } from 'react-bootstrap';

/**
 * Transforms the cardinal to something user friendly
 * @param {*} cardinal 
 * @returns 
 */
function transformCardinals(cardinal) {
    switch (cardinal) {
        case 'N': return 'North';
        case 'W': return 'West';
        case 'S': return 'South';
        case 'E': return 'East';
        default: return null;
    }
}

/**
 * Renders the rover input controls
 * @param {*} param0 
 */
function RoverOutputControlsPanel({roverInitialPosition, instructions, roverAreaDimension}) {
    const [roverPosition, setRoverPosition] = useState(roverInitialPosition);
    const [roverInstructionResults, setRoverInstructionResults] = useState([]);

    useEffect(() => {
        let roverPosition = {...roverInitialPosition};
        const instructionResults = [];

        for(let instruction of instructions) {
            const instructionResult = parseRoverInstruction(roverPosition, roverAreaDimension, instruction);

            // Set the new position
            roverPosition = instructionResult.position;

            // Add the result into the instruction results
            instructionResults.push(instructionResult);
        }

        setRoverPosition(roverPosition);
        setRoverInstructionResults(instructionResults);
    }, [instructions]);
    
    return (
        <Card>
            <Card.Body>
                <Card.Title>Output</Card.Title>
                <b>
                    Current Rover position: [{roverPosition.x}, {roverPosition.y}] heading [{transformCardinals(roverPosition.heading)}]
                </b>
                <ListGroup>
                    {roverInstructionResults.map( (x, i) => (
                        <ListGroup.Item variant={x.result ? "" : "danger"} key={i}>
                            Position: [{x.position.x}, {x.position.y}], heading [{transformCardinals(x.position.heading)}]
                            <br />
                            <pre>({x.result ? 'True': 'False'}, {x.position.heading}, ({x.position.x}, {x.position.y}))</pre>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

RoverOutputControlsPanel.displayName = 'RoverOutputControlsPanel';
RoverOutputControlsPanel.propTypes = {
    /**
     * Initial rover position
     */
     roverInitialPosition: PropTypes.object.isRequired,

     /**
      * The isntructions
      */
     instructions: PropTypes.array.isRequired,

     /**
      * The rover area dimension
      */
    roverAreaDimension: PropTypes.object.isRequired
};

export default RoverOutputControlsPanel;