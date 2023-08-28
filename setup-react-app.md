## Create React App
React environment on your computer.
The *create-react-app* tool is an officially supported way to create React applications.

Node.js is required to use *create-reacrt-app*.

Run the command to creat react applications:

$ npx create-react-app my-first-react-app

*create-react-app* will setup everything you need to run a React application.

### Note
If you've previously installed 'create-react-app' globally, it is recommended that you uninstall the package to ensure npx always uses the latest version of 'create-react-app'.
To uninstall, run this command:

$ npm uninstall -g create-react-app

## Run the react application

$ cd my-first-react-app
$ npm start

Application is running under http://localhost:3000

If you want to change port number,
create '.env' file in root directory of react application, and line as below:

PORT=5555
