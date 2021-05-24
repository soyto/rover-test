/**
 * Validates rover inputs
 * @param {*} input 
 * @return {array} array of strings with the invalid items. If contains no items means that is valid
 */
export default function validateRoverInputs(input) {
    const errors = [];

    for (let i = 0; i < input.length; i++) {
        const currentChar = input[i];

        if ('alr '.indexOf(currentChar.toLowerCase()) < 0) {
            errors.push(`The instruction number ${i + 1} cannot be ${currentChar}, only 'A', 'L', and 'R' are valid instructions`);
        }
    }

    return errors;

}