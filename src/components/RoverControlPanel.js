import { useState, useReducer } from 'react';

import SetDimensionsPanel from './SetDimensionsPanel';
import RoverInputControlsPanel from './RoverInputControlsPanel';
import RoverOutputControlsPanel from './RoverOutputControlsPanel';

import {
    Row, Col
} from 'react-bootstrap';


const STATE_SET_DIMENSIONS = 'set-dimensions';
const STATE_ROVER_CALCULATIONS = 'rover-calculations';

const INITIAL_ROVER_POSITION = {
    x: 0,
    y: 0,
    heading: 'N'
};

/**
 * Reducer for the instructions
 */
function instructionsReducer(state, action) {
    const { type } = action;

    switch (type) {
        case 'add': 
            return state.concat(action.values);

        case 'empty':
            return [];

        default: 
            return state;
    }
}

/**
 * Renders the rover control panel
 * @return {ReactDOM}
 */
function RoverControlPanel() {
    const [state, setState] = useState(STATE_SET_DIMENSIONS);
    const [roverAreaWidth, setRoverAreaWidth] = useState(300);
    const [roverAreaHeight, setRoverAreaHeight] = useState(300);
    const [roverPosition] = useState(INITIAL_ROVER_POSITION);
    const [instructions, dispatchInstructions] = useReducer(instructionsReducer, []);

    /**
     * When the user sets the dimensions of the rover area
     * @param {*} param0 
     */
    const onSetDimensionsPanelSetDimensionsSet = ({width, height}) => {
        setRoverAreaWidth(width);
        setRoverAreaHeight(height);
        setState(STATE_ROVER_CALCULATIONS)
    };

    /**
     * Whenever the controls panel wants to perform an action
     * @param {*} action 
     */
    const onInputControlsPanelAction = (action) => {
        const {type} = action;

        switch (type) {

            case 'instructions':
                // Dispatch the instructions into the reducer
                dispatchInstructions({
                    type: 'add',
                    values: action.instructions
                });

                break;

            case 'reset-position':
                // Just reset the rover position to the initial one
                dispatchInstructions({type: 'empty'});
                break;
                
            case 'reset-dimensions':
                // Just change the state
                setState(STATE_SET_DIMENSIONS);
                break;

            default: 
                break;
        }
    };


    // If the state is initial we should show the get dimensions panel.
    if (state === STATE_SET_DIMENSIONS) {
        return (
            <Row>
                <Col xs md={{span: 4, offset: 4}}>
                <SetDimensionsPanel 
                    initialHeight={roverAreaHeight}
                    initialWidth={roverAreaWidth}
                    onDimensionsSet={onSetDimensionsPanelSetDimensionsSet} />
                </Col>
            </Row>
           
        );
    }

    return (
        <Row>
            <Col xs={12} md={6}>
                <RoverInputControlsPanel onAction={onInputControlsPanelAction} />
            </Col>
            <Col xs={12} md={6} className={`mt-4 mt-md-0`}>
                <RoverOutputControlsPanel 
                    roverInitialPosition={roverPosition}
                    instructions={instructions}
                    roverAreaDimension={{
                        width: roverAreaWidth,
                        height: roverAreaHeight
                    }} />
            </Col>
        </Row>
    );
}

RoverControlPanel.displayName = 'RoverControlPanel';
RoverControlPanel.propTypes = {

};
export default RoverControlPanel;