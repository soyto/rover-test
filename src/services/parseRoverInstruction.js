/**
 * Parses a rover instruction
 * @param {*} roverPosition 
 * @param {*} roverAreaDimension 
 * @param {*} instruction 
 * @return {*} object containing the result of the instruction as result, and the new rover position.
 */
export default function parseRoverInstruction(roverPosition, roverAreaDimension, instruction) {
    switch (instruction) {
        case 'A': return parseAdvanceRover({roverPosition, roverAreaDimension});
        case 'L': return parseRotateRover({roverPosition, roverAreaDimension, direction: instruction});
        case 'R': return parseRotateRover({roverPosition, direction: instruction});
        default: return null;
    }
}

/**
 * Checks that the new x and y are within the area
 * @param {*} param0 
 */
function checkWithinArea({x, y, height, width}) {
    if (y < 0 || y > height) { return false; }
    if (x < 0 || x > width) { return false; }

    return true;
}

/**
 * Parses when needs to move forward the rover
 * @param {*} param0 
 * @return {*} a rover instruction
 */
function parseAdvanceRover({roverPosition, roverAreaDimension}) {
    let { x, y, heading } = roverPosition;
    const { width, height } = roverAreaDimension;

    switch (heading) {
        case 'N': y += 1; break;
        case 'S': y -= 1; break;
        case 'W': x -= 1; break;
        case 'E': x += 1; break;
        default: break;
    }

    if (!checkWithinArea({x, y, height, width})) {
        return {
            result: false,
            position: {...roverPosition}
        }
    } else {
        return {
            result: true,
            position: {
                x,
                y,
                heading
            }
        };
    }

}

/**
 * Parses when the rover needs to rotate
 * @param {*} param0 
 */
function parseRotateRover({roverPosition, direction}) {
    let { x, y, heading } = roverPosition;
    const headings = ['N', 'E', 'S', 'W'];
    const numericDirection = direction === 'L' ? -1 : 1;
    let outcomeHeadingIndex = headings.indexOf(heading) + numericDirection;

    if (outcomeHeadingIndex < 0) {
        outcomeHeadingIndex = headings.length -1;
    }
    else if(outcomeHeadingIndex === headings.length) {
        outcomeHeadingIndex = 0;
    }

    return {
        result: true,
        position:{
            x,
            y,
            heading: headings[outcomeHeadingIndex]
        }
    }
}