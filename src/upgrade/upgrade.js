/**
 * When you want to upgrade to latest react application, do below steps:
 * Step1:
 * Install the latest version (React 18), run below command from your project folder.
 * $ npm i react@latest react-dom@latest
 *
 * Step2: Use the new root API
 * New root API for cliet rendering.
 * // Before
 * import ReactDOM from 'react-dom';
 * ReactDOM.render(<App />, document.getElementById('root'));
 *
 * // After
 * import ReactDOM from 'react-dom/client';
 * const root = ReactDOM.createRoot(document.getElementById('root'));
 * root.render(<App />);
 *
 * Note:
 * Your application will work without using the new root API. If you continue to use 'ReactDOM.render'
 * your application will behave like React 17.
 *
 */