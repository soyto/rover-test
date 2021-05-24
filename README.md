# Rover test build

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions 

It´s needed a program to validate instructions that will be used by a new Rover in Mars. Each Rover are included in a square and can receive the next commands: Advance (A), Turn left (L), Turn Right (R). The program must validate that the Rover be included into the edges of the square and must indicate the final orientation.

The program will receive the dimensions of the square (width x height) and it assumes that the coordinate (0,0) is the bottom left corner. Additionally, will receive initial coordinates of the Rover and it’s initial orientation (N, S, E, W).

Also it will receive a set of commands like the next one; ```AALAARALA```.  There is not fixed limit of number of input commands. It can be assumed that there is not obstacles into the square.

The program must validate that all the commands can be executed without be out of pre-defined initial limits and also must return True or False indicating if the commands are valid. Moreover, also must return the orientation and final coordinates of the Rover 

As example: ``` True, N, (4,5) ```.


## Enviroment files

2 Enviroment files are provided, please change them as needed...

More info can be found in [https://create-react-app.dev/docs/adding-custom-environment-variables/](https://create-react-app.dev/docs/adding-custom-environment-variables/).

- ```.env.local``` is the main enviroment file will be loaded when running with ```npm start```
- ```.env.production.local``` is the productil file, will be loaded when running with ```npm run build```

Now the variables that you should change:



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
